import {useState} from 'react';
import BlockList from './BlogList';
function Home() {
    const [blogs, setBlogs] = useState([
        { title: 'Learn React', body: 'lorem ipsum ...', author: 'Roger', id: 1},
        { title: 'Learn Laravel', body: 'lorem ipsum ...', author: 'Nadal', id: 2},
        { title: 'Learn Vue', body: 'lorem ipsum ...', author: 'Roger', id: 3}
    ]);

    const handleBlog = (id) => {
        setBlogs(blogs.filter((blog) => blog.id !== id));
    };

    return (
        <div className="home">
            <BlockList blogs={blogs} title="All Blogs!" handleBlog={handleBlog} />
            <BlockList blogs={blogs.filter((blog)=> blog.author==='Roger')} title="Roger's blogs" handleBlog={handleBlog} />
        </div>
    )
}

export default Home;