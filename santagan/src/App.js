import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CustomHeader from "./components/common/Header/CustomHeader";
// import MuiHeader from "./components/common/Header/MuiHeader";
import BeginnerContainer from "./containers/Beginner/BeginnerContainer";
import HeightContainer from "./containers/Height/HeightContainer";
import HomeContainer from "./containers/Home/HomeContainer";
import LocalContainer from "./containers/Local/LocalContainer";
import NationalContainer from "./containers/National/NationalContainer";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Home</div>,
//     errorElement: <div>Page Not Found</div>,
//   },
//   {
//     path: "/beginner",
//     element: <div>Beginner</div>,
//     errorElement: <div>Page Not Found</div>,
//   },
//   {
//     path: "/height",
//     element: <div>Height</div>,
//     errorElement: <div>Page Not Found</div>,
//   },
//   {
//     path: "/national",
//     element: <div>National</div>,
//     errorElement: <div>Page Not Found</div>,
//   },
//   {
//     path: "/local",
//     element: <div>Local</div>,
//     errorElement: <div>Page Not Found</div>,
//   },
// ]);

const App = () => {
  return (
    <>
      <BrowserRouter>
      <CustomHeader />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/local" element={<LocalContainer />} />
          <Route path="/national" element={<NationalContainer />} />
          <Route path="/beginner" element={<BeginnerContainer />} />
          <Route path="/height" element={<HeightContainer />} />
          {/* <MuiHeader />
      <BeginerContainer />
      <HeightContainer />
      <LocalContainer />
    <NationalContainer /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
