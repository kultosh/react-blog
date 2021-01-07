import {useState, useEffect} from 'react';
import BlockList from './BlogList';
function Home() {
    const [blogs, setBlogs] = useState([
        { title: 'Learn React', body: 'lorem ipsum ...', author: 'Roger', id: 1},
        { title: 'Learn Laravel', body: 'lorem ipsum ...', author: 'Nadal', id: 2},
        { title: 'Learn Vue', body: 'lorem ipsum ...', author: 'Roger', id: 3}
    ]);

    const handleBlog = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    };

    useEffect(() => {
        console.log('useEffect ran');
    })

    return (
        <div className="home">
            <BlockList blogs={blogs} title="All Blogs!" handleDelete={handleBlog} />
        </div>
    )
}

export default Home;