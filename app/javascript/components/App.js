import { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../styles";
import "remixicon/fonts/remixicon.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { UseRequestProvider } from "ahooks";

import User from "./User";
import Modals from "./Common/Modals";
const Admin = lazy(() => import("./Admin"));

dayjs.extend(relativeTime);

export default class App extends Component {
  render() {
    return (
      <Router>
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
