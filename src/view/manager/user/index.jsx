import { Route, Switch, Redirect } from "react-router";

import { useSelector } from "react-redux";

import Table from "./Table";
import Detail from "./Detail";

export default function Contact() {
  const selectedUser = useSelector((state) => state.contact.selectedUser);

  return (
    <Switch>
      <Route exact path="/manager/user">
        <Table />
      </Route>

      {
        !selectedUser ? (
          <Redirect to="/manager/user" />
        ) : (
          <Route path="/manager/user/user-detail">
            <Detail selectedUser={selectedUser} />
          </Route>
        )
      }
    </Switch>
  );
}
