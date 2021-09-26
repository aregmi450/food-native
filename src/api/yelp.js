import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer UgAthlyMXvW19iYWUTmziN-lge_ibEapW8GwWz9hLQTlXQjR-N5TAL-cdvB8FNQ2TJsqBw06Cd2S9_AUYK0iIkftvWc9Wz1BdpK9oOtm4RyS2hQffA0zqkgyxAlIYXYx'
    }
});

