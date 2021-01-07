import {useState, useEffect} from 'react';
import BlockList from './BlogList';
function Home() {
    const [blogs, setBlogs] = useState([
        { title: 'Learn React', body: 'lorem ipsum ...', author: 'Roger', id: 1},
        { title: 'Learn Laravel', body: 'lorem ipsum ...', author: 'Nadal', id: 2},
        { title: 'Learn Vue', body: 'lorem ipsum ...', author: 'Roger', id: 3}
    ]);

    const [name, setName] = useState('Santosh');

    const handleBlog = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    };

    useEffect(() => {
        console.log('useEffect ran');
        console.log(name);
    }, [name])

    return (
        <div className="home">
            <BlockList blogs={blogs} title="All Blogs!" handleDelete={handleBlog} />
            <button onClick={() => setName('Prasidha')}>Change Name</button>
            <p>{name}</p>
        </div>
    )
}

export default Home;