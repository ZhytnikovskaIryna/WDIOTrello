const axios = require("axios");
const { BASE_URL_API, BASE_URL_CONTENT } = require("./api_data");
const jsonData = require("../../env.json");

const instanceAPI = axios.create({
  baseURL: BASE_URL_API,
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${jsonData.TOKEN}`,
  },
});

const instanceContent = axios.create({
  baseURL: BASE_URL_CONTENT,
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${jsonData.TOKEN}`,
  },
});

exports.postApi = async (route, body, header) => {
  return await instanceAPI.post(route, body, header);
};
exports.postApiContent = async (route, body, header) => {
  return await instanceContent.post(route, body, header);
};
