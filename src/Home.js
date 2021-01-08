import {useState, useEffect} from 'react';
import BlockList from './BlogList';
function Home() {
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setBlogs(data);
        })
    }, []);

    return (
        <div className="home">
            {blogs && <BlockList blogs={blogs} title="All Blogs!" />}
        </div>
    )
}

export default Home;