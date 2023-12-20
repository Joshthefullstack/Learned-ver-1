import { RouterProvider } from "react-router-dom";
import { router } from "./AppRoute";
import LoginPage from "./views/LoginPage";
import { useState } from "react";
import HomePage from "./views/client/HomePage";
import StuLogin from "./views/client/StuLogin";

function App() {
  const [showLandingPage, setShowLandingPage] = useState(true)
  const [showInstructorLogin, setShowInstructorLogin] = useState(false);
  const [action, setAction] = useState('home');

  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="App">
      {
        action === 'home' ? <HomePage setAction={setAction} setShowInstructorLogin={setShowInstructorLogin} /> : <StuLogin setAction={setAction} showInstructorLogin={showInstructorLogin} setShowLandingPage={setShowLandingPage} setShowInstructorLogin={setShowInstructorLogin} user={user} />
      }
      {user ? <RouterProvider router={router}/> : '' }
    </div>
  );
}

export default App;
