import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "const";
//Components
import PlayerRegistration from "pages/PlayerRegistration";
import RequiredAuth from "../RequiredAuth";
import Login from "pages/Login";
import Admin from "pages/Admin";

interface Props {}

const RouteContainer: React.FC<Props> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.REGISTRATION} element={<PlayerRegistration />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route
          path="/admin"
          element={
            <RequiredAuth>
              <Admin />
            </RequiredAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default React.memo(RouteContainer);
