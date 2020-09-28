import CreateTripPage from "../CreateTripPage/CreateTripPage";
import LoginPage from "../LoginPage/LoginPage";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage"
import ListTripsPage from "../ListTripsPage/ListTripsPage";
import TripDetailsPage from "../TripDetailsPage/TripDetailsPage";
import ApplicationFormPage from "../ApplicationFormPage/ApplicationFormPage";
import SignUp from "../SignUp/SignUp";


const Router = () => {
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/signup">
        < SignUp/>
      </Route>
      <Route exact path="/trips-create">
        < CreateTripPage/>
      </Route>
      <Route exact path="/list">  
        < ListTripsPage/>
      </Route>
      <Route exact path="/details/:id">
        < TripDetailsPage/>
      </Route>
      <Route exact path="/application-form">
        < ApplicationFormPage/>
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route>
        <div>Eita Giovanna, o forninho caiu (404)</div>
      </Route>
    </Switch>
  </BrowserRouter>
  );
};

export default Router;
