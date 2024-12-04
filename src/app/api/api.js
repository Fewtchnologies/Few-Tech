import axios from "axios";

export const applyForInternship = async (applicationData) => {
  try {
    const response = await axios.post('/api/internship', applicationData);
    return response.data;
  } catch (error) {
    console.error("Error applying for internship:", error);
    throw error;
  }
};

export const contactUs = async (contactData) => {
  try {
    const response = await axios.post('/api/contact', contactData);
    return response.data;
  } catch (error) {
    console.error("Error sending contact message:", error);
    throw error;
  }
};