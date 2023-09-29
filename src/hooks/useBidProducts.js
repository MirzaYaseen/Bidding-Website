import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useBidProducts = () => {
	const fetchProducts = () =>
		axios
			.get('https://erin-impossible-donkey.cyclic.app/client/products')
			.then((res) => res.data);

	return useQuery({
		queryKey: ['products'],
		queryFn: fetchProducts,
	});
};

export default useBidProducts;
