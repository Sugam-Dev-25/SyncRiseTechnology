import axios from "axios";

// ✅ Base instance
const API = axios.create({
  baseURL: "http://syncrise-technology.local/wp-json/wp/v2",
});

// ==============================
// 🔥 SERVICES API
// ==============================

// Get all services
export const getServices = async () => {
  try {
    const res = await API.get("/services");
    return res.data;
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
};

// Get single service by slug
export const getServiceBySlug = async (slug) => {
  try {
    const res = await API.get(`/services?slug=${slug}`);
    return res.data[0];
  } catch (error) {
    console.error("Error fetching service:", error);
    return null;
  }
};


export const getTeams = async () => {
  try {
    const res = await API.get("/team?_embed&orderby=date&order=asc");
    return res.data;
  } catch (error) {
    console.error("Error fetching Team:", error);
    return [];
  }
};



export default API;