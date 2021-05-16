import { useEffect, useState } from "react";
import { Route, useHistory, useRouteMatch } from "react-router-dom";
import { isLoggedIn } from "Apis/Admin/Auth";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Station from "./Station";

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
            <Route path={`${path}stations`}>
              <Station />
            </Route>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminHome;
