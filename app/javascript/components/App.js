import { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Helmet } from "react-helmet";
import { UseRequestProvider } from "ahooks";

import "../styles";
import User from "./User";
import Modals from "./Common/Modals";
const Admin = lazy(() => import("./Admin"));

dayjs.extend(relativeTime);

export default class App extends Component {
  render() {
    return (
      <Router>
        <Helmet
          titleTemplate="%s - Trail - Coronasafe"
          defaultTitle="Trail - Coronasafe"
        />
        <UseRequestProvider
          value={{
            refreshOnWindowFocus: true,
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/admin">
                <Admin />
              </Route>
              <Route path="/">
                <User />
              </Route>
            </Switch>
            <Modals />
          </Suspense>
        </UseRequestProvider>
      </Router>
    );
  }
}
