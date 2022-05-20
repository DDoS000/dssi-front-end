import { Route, Switch } from "react-router";

import Table from "./Table";

export default function schedule() {

  return (
    <Switch>
      <Route exact path="/admin/manager/project">
        <Table />
      </Route>
    </Switch>
  );
}
