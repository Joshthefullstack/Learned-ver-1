import { RouterProvider } from "react-router-dom";
import { router } from "./AppRoute";
import LoginPage from "./views/LoginPage";
import { useState } from "react";

function App() {
  const [showLandingPage, setShowLandingPage] = useState(true);
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="App">
      {/* <LoginPage/>
      <RouterProvider router={router}/> */}
      {user ? <RouterProvider router={router}/> : <LoginPage setShowLandingPage={setShowLandingPage} />}
    </div>
  );
}

export default App;
