import { Route, useRouteMatch, Switch, useHistory } from "react-router-dom";

import AddCylinder from "./AddCylinder";
import GenerateForm from "./GenerateForm";
import Presets from "./Presets";
import SupplierList from "./SupplierList";
import ContentOutline from "../ContentOutline";
import Cylinder from "../Cylinder";

function Supplier() {
  const { path } = useRouteMatch();
  const history = useHistory();

  return (
    <Switch>
      <Route path={`${path}/:id/presets`}>
        <Presets />
      </Route>
      <Route path={`${path}/:id/cylinders`}>
        <AddCylinder />
      </Route>
      <Route path={`${path}/:id/cylinderList`}>
        <Cylinder />
      </Route>
      <Route path={`${path}/new`}>
        <GenerateForm />
      </Route>
      <Route path={`${path}/`}>
        <ContentOutline
          heading="Suppliers"
          subtitle="Create & View list of suppliers"
          rightEl={
            <div className="mt-3 sm:mt-0 sm:ml-4">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => history.push(`/admin/suppliers/new`)}
              >
                Create new Supplier
              </button>
            </div>
          }
        >
          <SupplierList />
        </ContentOutline>
      </Route>
    </Switch>
  );
}

export default Supplier;
