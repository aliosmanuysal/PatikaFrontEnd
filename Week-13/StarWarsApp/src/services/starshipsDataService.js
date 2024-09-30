import api from './api';

const fetchData = async () => {
    try {
        const [response1, response2, response3, response4] = await Promise.all([
            api.get('starships?page=1'),
            api.get('starships?page=2'),
            api.get('starships?page=3'),
            api.get('starships?page=4')
        ]);

        const combinedData = [
            ...response1.data.results,
            ...response2.data.results,
            ...response3.data.results,
            ...response4.data.results
        ];

        return combinedData;
    } catch (error) {
        console.error("An error occurred while fetching the data:", error);
        throw error;
    }
};

export default fetchData;