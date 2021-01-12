import BlockList from './BlogList';
import useFetch from './useFetch';
function Home() {
    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading....</div>}
            {blogs && <BlockList blogs={blogs} title="All Blogs!" />}
        </div>
    )
}

export default Home;