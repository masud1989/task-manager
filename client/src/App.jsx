import { Fragment } from "react";
import {Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import CancelledPage from "./pages/CancelledPage";
import CompletedPage from "./pages/CompletedPage";
import ProgressPage from "./pages/ProgressPage";
import NewPage from "./pages/NewPage";
import CreatePage from "./pages/CreatePage";
import FullScreenLoader from "./components/MasterLayout/FullScreenLoader";
import { getToken } from "./helper/SessionHelper";


function App() {
  if(getToken()){
    return (
      <Fragment>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/new" element={<NewPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/completed" element={<CompletedPage />} />
          <Route path="/cancelled" element={<CancelledPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
        <FullScreenLoader />
      </Fragment>
    );
  }
  else{
    return (
      <Fragment>
        <Routes>
         
          <Route path="/" element={<Navigate to="/Login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <FullScreenLoader />
      </Fragment>
    );
  }
}

export default App;
