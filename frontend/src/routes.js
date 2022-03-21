import React from "react";

import { Routes as Switch, Route } from "react-router-dom";
import { NewIncident } from "./pages/NewIncident";
import { Profile } from "./pages/Profile";
import { Register } from "./pages/Register";

import { SignIn } from "./pages/SignIn";

const Routes = () => (
  <Switch>
    <Route path="/" exact element={<SignIn />} />
    <Route path="/register" element={<Register />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/incidents/new" element={<NewIncident />} />
  </Switch>
);

export default Routes;
