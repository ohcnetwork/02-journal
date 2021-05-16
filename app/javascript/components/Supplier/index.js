import { Route, useRouteMatch, Switch } from "react-router-dom";

import GenerateForm from "./GenerateForm";
import DisplayQr from "./DisplayQr";

function Supplier() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/qr`}>
        <DisplayQr />
      </Route>
      <Route path={`${match.path}`}>
        <GenerateForm />
      </Route>
    </Switch>
  );
}

export default Supplier;
