import { Route, useRouteMatch } from "react-router";

import AllCylinders from "./AllCylinders";

function Station() {
  const { path } = useRouteMatch();

  return (
    <>
      <Route path={path}>
        <AllCylinders />
      </Route>
    </>
  );
}

export default Station;
