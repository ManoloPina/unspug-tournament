import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import PlayerRegistration from "pages/PlayerRegistration";

interface Props {}

const RouteContainer: React.FC<Props> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlayerRegistration />} />
      </Routes>
    </BrowserRouter>
  );
};

export default React.memo(RouteContainer);
