import { useState } from 'react'; //destructure useState function("Hook") from library
import BlogList from './BlogList';

const Home = () => {
	const [blogs, setBlogs] = useState([
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
			id: 3,
		},
	]);
	// Write javascript inside curly braces
	return (
		<div className='home'>
			<BlogList blogs={blogs} title='All Blogs' />
		</div>
	);
};

export default Home;
