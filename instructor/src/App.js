import { RouterProvider } from "react-router-dom";
import { router } from "./AppRoute";
import LoginPage from "./views/LoginPage";
import { useState } from "react";
import HomePage from "./views/client/HomePage";

function App() {
  const [showLandingPage, setShowLandingPage] = useState(true);
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="App">
      <HomePage/>
      {/* {user ? <RouterProvider router={router}/> : <LoginPage setShowLandingPage={setShowLandingPage} />} */}
    </div>
  );
}

export default App;
