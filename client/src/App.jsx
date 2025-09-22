import { Routes, Route, Navigate } from "react-router-dom";

import Listings from "../pages/listings/Listings";
import Show from "../pages/listings/Show";
import New from "../pages/listings/New";
import Edit from "../pages/listings/Edit";
import BoilerPlate from "../pages/layouts/Boilerplate";
import Signup from "../pages/users/Signup";

function App() {
  return (
    <BoilerPlate>
      <Routes>
        <Route path="/" element={<Navigate to="/listings" />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/listings/:id" element={<Show />} />
        <Route path="/listings/new" element={<New />} />
        <Route path="/listings/:id/edit" element={<Edit />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BoilerPlate>
  );
}

export default App;
