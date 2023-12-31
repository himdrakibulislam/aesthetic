import axios from 'axios';


// const cookies = new Cookies();
const axiosInstance = axios.create({
	// Configuration
	baseURL: process.env.NEXT_PUBLIC_BACKEND_URL ,
	timeout: 8000,
	headers: {
		'Access-Control-Allow-Origin': '*', 
        Accept: 'application/json',

		// 'x-rapidapi-key': '<your-key-here>'
	},
});

export default axiosInstance