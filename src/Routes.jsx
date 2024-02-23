import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const Frame48096505 = React.lazy(() => import("pages/Frame48096505"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          
          <Route path="/" element={<Navigate to="/frame48096505" />} />
          
          <Route path="/frame48096505" element={<Frame48096505 />} />
          
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
