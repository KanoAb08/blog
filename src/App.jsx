import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import authService from "./appwrite/auth";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const { status } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!status) {
      authService.getCurrentUser().then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      });
    }

    setLoading(false);
  }, []);

  return !loading ? (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-1 py-6 justify-center items-center">
        <Outlet />
      </main>

      <Footer />
    </div>
  ) : null;
}

export default App;
