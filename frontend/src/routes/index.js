import React from "react";
import { Switch } from "react-router-dom";

import Route from "./route";

import SignIn from "../pages/SignIn";
import Plans from "../pages/Plans";
import Students from "../pages/Students";
import Registrations from "../pages/Registrations";
import HelpOrders from "../pages/HelpOrders";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/plans" component={Plans} isPrivate />
      <Route path="/students" component={Students} isPrivate />
      <Route path="/registrations" component={Registrations} isPrivate />
      <Route path="/help-orders" component={HelpOrders} isPrivate />
    </Switch>
  );
}
