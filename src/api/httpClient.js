import axios from 'axios';

const apiClient = axios.create({
	baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
});
