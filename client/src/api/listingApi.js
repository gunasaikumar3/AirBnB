import axios from "axios";
import { wrapAsync } from "../utils/wrapAsync";

const API_BASE_URL = "http://localhost:8080/api";

export const fetchAllListings = wrapAsync(async () => {
  const res = await axios.get(`${API_BASE_URL}/listings`);
  return res.data;
});

export const fetchSingleListing = wrapAsync(async (id) => {
  const res = await axios.get(`${API_BASE_URL}/listings/${id}`);
  return res.data;
});

export const updateSingleListing = async (id, formData) => {
  try {
    const res = await axios.put(`${API_BASE_URL}/listings/${id}`, {
      listing: formData,
    });
    console.log("Api Result", res); // will run if request succeeds
    return res.data;
  } catch (err) {
    console.error("Axios error:", err.response?.data || err.message);
    throw err; // rethrow so wrapAsync can handle it
  }
};

export const createNewListing = wrapAsync(async (formData) => {
  const res = await axios.post(`${API_BASE_URL}/listings`, {
    listing: formData,
  });
  return res.data;
});

export const deleteSingleListing = wrapAsync(async (id) => {
  const res = await axios.delete(`${API_BASE_URL}/listings/${id}`);
  return res.data;
});
