import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
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

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await dispatch(refresh()).unwrap();
      } catch (e) {
        console.error("Failed to refresh token on app load:", e);
      }
    };
    checkAuth();
  }, [dispatch]);

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
