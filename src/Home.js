import {useState} from 'react';
import BlockList from './BlogList';
function Home() {
    const [blogs, setBlogs] = useState([
        { title: 'Learn React', body: 'lorem ipsum ...', author: 'Roger', id: 1},
        { title: 'Learn Laravel', body: 'lorem ipsum ...', author: 'Nadal', id: 2},
        { title: 'Learn Vue', body: 'lorem ipsum ...', author: 'Andy', id: 3}
    ]);

    return (
        <div className="home">
            <BlockList blogs={blogs} title="All Blogs!" />
        </div>
    )
}

export default Home;