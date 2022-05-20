import { Route, Switch, Redirect } from "react-router";

import { useSelector } from "react-redux";

import Table from "./Table";
import Detail from "./Detail";

export default function user() {
  const selectedUser = useSelector((state) => state.users.selectedUser);

  return (
    <Switch>
      <Route exact path="/admin/manager/user">
        <Table />
      </Route>

      {!selectedUser ? (
        <Redirect to="/admin/manager/user" />
      ) : (
        <>
          <Route path="/admin/manager/user/user-detail/:id">
            <Detail selectedUser={selectedUser} />
          </Route>
        </>
      )}
    </Switch>
  );
}
