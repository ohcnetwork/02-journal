import { Route, useRouteMatch, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

import SignIn from "./SignIn";
import AdminHome from "./AdminHome";

function Admin() {
  const match = useRouteMatch();

  return (
    <>
      <Helmet
        titleTemplate="%s - Admin - Trail - Coronasafe"
        defaultTitle="Admin - Trail - Coronasafe"
      />
      <Switch>
        <Route exact path={`${match.url}/login`}>
          <SignIn />
        </Route>
        <Route path={`${match.url}`}>
          <AdminHome />
        </Route>
      </Switch>
    </>
  );
}

export default Admin;
