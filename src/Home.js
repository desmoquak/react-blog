import { useState } from 'react'; //destructure useState function("Hook") from library

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
			{blogs.map((blog) => (
				<div className='blog-preview' key={blog.id}>
					<h2>{blog.title}</h2>
					<p>Written by {blog.author}</p>
				</div>
			))}
		</div>
	);
};

export default Home;
