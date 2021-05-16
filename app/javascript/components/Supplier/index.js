import { Route, useRouteMatch, Switch } from "react-router-dom";

import GenerateForm from "./GenerateForm";

function Supplier() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}`}>
        <GenerateForm />
      </Route>
    </Switch>
  );
}

export default Supplier;
