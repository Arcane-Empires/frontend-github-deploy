import axios from 'axios';
const apiCall = async (url) => {
    try {
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error making API call:', error);
        throw error;
    }
};

export default apiCall;
