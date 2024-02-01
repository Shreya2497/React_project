import React ,{useState, useEffect} from 'react';
import Loading from './Loading';
import Tours from './Tours';
 

const url="https://course-api.com/react-tours-project";
export default function AppTour() {
    const [tours, setTours] = useState([]);
	const [loading, setLoading] = useState(true);
    

	function removeTour(id) {
		// add logic to update state for tour removal
		const updatedTours = tours.filter((tour) => tour.id !== id);
    // Update the state variable with the filtered tours
    	setTours(updatedTours);
	}

	async function fetchTours() {
		// set loading to true here
		setLoading(true);

		const data = await fetch(url);
		const jsonData = await data.json();
		setTours(jsonData);

		setLoading(false);
		// set loading to false here
	}

	useEffect(() => {
		fetchTours();
	}, []);

	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}

	return (
		<main>
			<Tours tours={tours} removeTour={removeTour} />
		</main>
	);
}
