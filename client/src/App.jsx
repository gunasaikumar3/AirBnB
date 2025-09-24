// App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Listings from "./pages/listings/Listings";
import Show from "./pages/listings/Show";
import New from "./pages/listings/New";
import Edit from "./pages/listings/Edit";
import BoilerPlate from "./pages/layouts/Boilerplate";
import ProtectedRoute from "./ProtectedRoute";

import { useDispatch } from "react-redux";
import { refresh } from "./store/authSlice.js";

export default function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await dispatch(refresh()).unwrap();
      } catch (e) {
        // Handle failed refresh, no need for dispatch(logout()) here
        console.error("Failed to refresh token on app load:", e);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BoilerPlate>
      <Routes>
        <Route path="/" element={<Navigate to="/listings" />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/listings/:id" element={<Show />} />
        <Route
          path="/listings/new"
          element={
            <ProtectedRoute>
              <New />
            </ProtectedRoute>
          }
        />
        <Route
          path="/listings/:id/edit"
          element={
            <ProtectedRoute>
              <Edit />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BoilerPlate>
  );
}
