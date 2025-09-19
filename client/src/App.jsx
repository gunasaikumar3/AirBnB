import { Routes, Route, Navigate } from "react-router-dom";

import Listings from "../pages/listings/Listings";
import Show from "../pages/listings/Show";
import New from "../pages/listings/New";
import Edit from "../pages/listings/Edit";

function App() {
  return (
    <Routes>
      <Route path="/listings" element={<Listings />}></Route>
      <Route path="/listings/:id" element={<Show />} />
      <Route path="/listings/new" element={<New />} />
      <Route path="/listings/:id/edit" element={<Edit />} />
    </Routes>
  );
}

export default App;
