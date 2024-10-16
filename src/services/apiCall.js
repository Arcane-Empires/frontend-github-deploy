import axios from 'axios';
const apiCall = async (url) => {
    try {
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'https://frontend-github-deploy-staging-379840034411.us-central1.run.app/'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error making API call:', error);
        throw error;
    }
};

export default apiCall;
