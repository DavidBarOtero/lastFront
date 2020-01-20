import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import { Cover } from "./Pages/Cover";
import { HeaderIndex } from "./components/IndexComponents/HeaderIndex";
import { FooterIndex } from "./components/IndexComponents/FooterIndex";
import { AsideContentIndex } from "./components/IndexComponents/AsideContentIndex";
import { MyEvents } from "./components/IndexComponents/Events/MyEvents";
import UserCard from "./components/UserCard";
import { ContentEventProfesionalFinder } from "./components/IndexComponents/Events/ContentEventProfesionalFinder";
import { FormRegister } from "./components/FormRegister";
import { FormLogin } from "./components/FormLogin";

import { AuthProvider } from "./components/Api/auth-requests";
import { PrivateRoute } from "./components/Api/PrivateRoute";
import "./assets/css/ComunCss.css";
import "./assets/css/Index/IndexStyle.css";
import "./assets/css/Index/FooterIndex.css";

function App(props) {
  const [openRegisterForm, setOpenRegisterForm] = useState(false);
  const [openLoginForm, setOpenLoginForm] = useState(false);
  const [openWhoWeAre, setOpenWhoWeAre] = useState(false);
  const [openHowItWorks, setOpenHowItWorks] = useState(false);
  const [openRatingPolitics, setOpenRatingPolitics] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [finder, setFinder] = useState(true);
  function DisplayRegister() {
    setOpenRegisterForm(!openRegisterForm);
  }
  function DisplayLogin() {
    setOpenLoginForm(!openLoginForm);
  }

  function Previous() {
    if (openHowItWorks) {
      setOpenWhoWeAre(true);
    } else if (openRatingPolitics) {
      setOpenHowItWorks(true);
    } else if (openContact) {
      setOpenRatingPolitics(true);
    }
  }
  function Next() {
    if (openWhoWeAre) {
      setOpenHowItWorks(true);
    } else if (openHowItWorks) {
      setOpenRatingPolitics(true);
    } else if (openRatingPolitics) {
      setOpenContact(true);
    }
  }
  function displayWhoWeAre() {
    setOpenWhoWeAre(!openWhoWeAre);
  }
  function displayHowItWorks() {
    setOpenHowItWorks(!openHowItWorks);
  }
  function displayRatingPolitics() {
    setOpenRatingPolitics(!openRatingPolitics);
  }
  function displayOpenContact() {
    setOpenContact(!openContact);
  }
  function ResetAbout() {
    if (openHowItWorks) {
      setOpenHowItWorks(false);
    } else if (openWhoWeAre) {
      setOpenWhoWeAre(false);
    } else if (openRatingPolitics) {
      setOpenRatingPolitics(false);
    } else if (openContact) {
      setOpenContact(false);
    }
  }

  useEffect(() => {
    if (openLoginForm) {
      setFinder(false);
    } else if (openRegisterForm) {
      setFinder(false);
    } else {
      setFinder(true);
    }
  });

  useEffect(() => {
    if (openRegisterForm) {
      setOpenLoginForm(false);
    }
  }, [openRegisterForm]);
  useEffect(() => {
    if (openLoginForm) {
      setOpenRegisterForm(false);
    }
  }, [openLoginForm]);

  useEffect(() => {
    if (openWhoWeAre) {
      setOpenHowItWorks(false);

      setOpenRatingPolitics(false);
      setOpenContact(false);
    }
  }, [openWhoWeAre]);
  useEffect(() => {
    if (openHowItWorks) {
      setOpenWhoWeAre(false);
      setOpenRatingPolitics(false);
      setOpenContact(false);
    }
  }, [openHowItWorks]);
  useEffect(() => {
    if (openRatingPolitics) {
      setOpenWhoWeAre(false);

      setOpenHowItWorks(false);
      setOpenContact(false);
    }
  }, [openRatingPolitics]);
  useEffect(() => {
    if (openContact) {
      setOpenWhoWeAre(false);

      setOpenHowItWorks(false);
      setOpenRatingPolitics(false);
    }
  }, [openContact]);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <Cover
                stateFinder={finder}
                formLogin={FormLogin}
                formRegister={FormRegister}
                displayLogin={DisplayLogin}
                displayRegister={DisplayRegister}
                stateLogin={openLoginForm}
                stateRegister={openRegisterForm}
                // stateProfesionalDropdown={openProfesionalDropdown}
                // alternateProfesionalDropdown={OpenCloseProfesionalDropdown}
              />
            )}
          />
          <PrivateRoute>
            <Route path="/index">
              <HeaderIndex />
              <div className="contentIndex">
                <AsideContentIndex />

                <Route
                  path="/index"
                  exact
                  component={ContentEventProfesionalFinder}
                />
                <Route path="/index/MyEvents" exact component={MyEvents} />

                <Route path="/index/Card" exact component={UserCard} />

                <Route
                  path="/index/ProfesionalsFinder"
                  exact
                  component={ContentEventProfesionalFinder}
                />
              </div>
            </Route>
          </PrivateRoute>
        </Switch>
        <Route
          path="(/|/index)"
          exact
          render={props => (
            <FooterIndex
              resetAbout={ResetAbout}
              next={Next}
              previous={Previous}
              stateWhoWeAre={openWhoWeAre}
              stateHowItWorks={openHowItWorks}
              stateRatingPolitics={openRatingPolitics}
              stateContact={openContact}
              displayHowItWorks={displayHowItWorks}
              displayWhoWeAre={displayWhoWeAre}
              displayRatingPolitics={displayRatingPolitics}
              displayOpenContact={displayOpenContact}
            />
          )}
        />
      </AuthProvider>
    </BrowserRouter>
  );
}

export { App };
