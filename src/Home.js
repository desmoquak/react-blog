import { useState } from 'react'; //destructure useState function("Hook") from library

const Home = () => {
	const [] = useState([
		{
			title: 'My new website',
			body: 'lorem ipsum...',
			author: 'John',
			id: 1,
		},
		{
			title: 'Welcome to my blog!',
			body: 'lorem ipsum...',
			author: 'Aaron',
			id: 2,
		},
		{
			title: 'Developer Tips...',
			body: 'lorem ipsum...',
			author: 'Eli',
			id: 23,
		},
	]);

	return <div className='home'></div>;
};

export default Home;
