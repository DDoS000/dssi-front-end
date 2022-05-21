import React from "react";
import { Route, Switch, Redirect } from "react-router";
import { fetchRegistry } from "../../../redux/registry/registryActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Admin from "./Admin";
import Student from "./Student";

export default function Project() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchRegistry());
  }, []);
  return (
    <Switch>
      <Route path="/admin/manager/project">
        <Admin />
      </Route>
      <Route path="/student/main/project">
        <Student />
      </Route>
      {/* {!selectedProject ? (
        <Redirect to="/student/main/project" />
      ) : (
        <Route path="/student/main/project/upload-project">
          <Upload />
        </Route>
      )} */}
    </Switch>
  );
}
