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

	const handleDelete = (id) => {
		const newBlogs = blogs.filter(blog => blog.id !== id);
		setBlogs(newBlogs);
	}

	return (
		<div className='home'>
			<BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete} />
		</div>
	);
};

export default Home;
