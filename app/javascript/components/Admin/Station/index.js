import { Route, Switch, useRouteMatch } from "react-router";

import AllStations from "./AllStations";
import StationDetail from "./Detail";

function Station() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/:id`}>
        <StationDetail />
      </Route>
      <Route path={path}>
        <AllStations />
      </Route>
    </Switch>
  );
}

export default Station;
