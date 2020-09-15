import CreateTripPage from "../CreateTripPage/CreateTripPage";
import LoginPage from "../LoginPage/LoginPage";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage"
import ListTripsPage from "../ListTripsPage/ListTripsPage";
import TripDetailsPage from "../TripDetailsPage/TripDetailsPage";
import ApplicationFormPage from "../ApplicationFormPage/ApplicationFormPage";



const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Login">
          <LoginPage />
        </Route>
        <Route exact path="/CriarTrip">
          < CreateTripPage/>
        </Route>
        <Route exact path="/Trip">
          < ListTripsPage/>
        </Route>
        <Route exact path="/Detalhe">
          < TripDetailsPage/>
          </Route>
          <Route exact path="/Cadastro">
          
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
