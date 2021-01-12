import {useState, useEffect} from 'react';
import BlockList from './BlogList';
function Home() {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Note: dont put the setTimeout function in the live server because it gonna make user wait for 1 second more. Here it is just used to show its uses
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
        .then(res => {
            // console.log(res);
            if(!res.ok)
            {
                throw Error('Could not fetch the data for that resource!');
            }
            return res.json();
        })
        .then(data => {
            setBlogs(data);
            setIsLoading(false);
        })
        .catch(err => {
            console.log(err.message);
        })
        }, 1000);
    }, []);

    return (
        <div className="home">
            {isLoading && <div>Loading....</div> }
            {blogs && <BlockList blogs={blogs} title="All Blogs!" />}
        </div>
    )
}

export default Home;