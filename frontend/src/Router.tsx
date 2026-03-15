// Router.tsx

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AuthPage from "./pages/Authpage";
import Landing from "./pages/LandingPage/LandingPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Auth Page */}
        <Route path="/auth" element={<AuthPage />} />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;