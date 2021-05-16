import { useEffect, useState } from "react";
import { Route, useHistory, useRouteMatch } from "react-router-dom";
import { isLoggedIn } from "Apis/Admin/Auth";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Station from "./Station";
import Supplier from "./Supplier";

function AdminHome() {
  const history = useHistory();
  const { path } = useRouteMatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const login = () => {
      setLoading(true);
      const token = localStorage.getItem("admin-auth-token");
      if (!token) {
        history.push("/admin/login");
      } else {
        isLoggedIn();
      }
      setLoading(false);
    };

    login();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar />
      <div className="flex flex-col w-0 flex-1 overflow-auto">
        <Header />
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <Route path={`${path}/stations`}>
              <Station />
            </Route>
            <Route path={`${path}/suppliers`}>
              <Supplier />
            </Route>
            <Route exact path={`${path}/`}>
              <div className="flex items-center justify-center flex-col h-60">
                <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-700 sm:text-4xl">
                  Dashboard under Construction
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-gray-500">
                  Please select an item from sidebar to continue.
                </p>
              </div>
            </Route>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminHome;
