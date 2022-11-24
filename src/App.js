/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Outlet, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";

import AnimatedRoute from "./AnimatedRoute";
import "./App.css";
import Loading from "./Loading";
function App() {
  //loading screen by react
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <>
      {loading === false ? (
        <BrowserRouter>
          <main className=" displayx">
            <Header />
            <div className=" md:pt-16">
              <div className="relative overflow-hidden">
                <AnimatedRoute />
              </div>
              <Outlet />
            </div>
          </main>{" "}
        </BrowserRouter>
      ) : (
        <Loading />
      )}
    </>
  );
}
export default App;
