import React from "react";
import { Route, Switch, Redirect } from "react-router";
import { useSelector } from "react-redux";

import Admin from "./Admin";
import Student from "./Student";

export default function Project() {
  const selectedUser = useSelector((state) => state.contact.selectedUser);
  return (
    <Switch>
        <>
          <Route path="/admin/manager/project">
            <Admin selectedUser={selectedUser} />
          </Route>
          <Route path="/student/main/project">
            <Student selectedUser={selectedUser} />
          </Route>
        </>
    </Switch>
  );
}
