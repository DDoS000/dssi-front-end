import { Route, Switch } from "react-router";

import Table from "./Table";

export default function schedule() {

  return (
    <Switch>
      <Route exact path="/admin/main/schedule">
        <Table />
      </Route>
      <Route exact path="/student/main/schedule">
        <Table />
      </Route>
    </Switch>
  );
}
