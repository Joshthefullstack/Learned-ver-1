import { RouterProvider } from "react-router-dom";
import { router } from "./AppRoute";
import LoginPage from "./views/LoginPage";
import { useState } from "react";

function App() {
  const [showLandingPage, setShowLandingPage] = useState(true);
  return (
    <div className="App">
      {/* <LoginPage/>
      <RouterProvider router={router}/> */}
      {showLandingPage ? <LoginPage/> : <RouterProvider router={router}/>}
    </div>
  );
}

export default App;
