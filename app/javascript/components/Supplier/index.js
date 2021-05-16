import { Route, useRouteMatch, Switch } from "react-router-dom";
import AddCylinder from "./AddCylinder";

import GenerateForm from "./GenerateForm";
import Presets from "./Presets";

function Supplier() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/:id/presets`}>
        <Presets />
      </Route>
      <Route path={`${path}/:id/cylinders`}>
        <AddCylinder />
      </Route>
      <Route path={`${path}`}>
        <GenerateForm />
      </Route>
    </Switch>
  );
}

export default Supplier;
