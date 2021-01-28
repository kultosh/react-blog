import { Link } from "react-router-dom";

function BlockList ({blogs, title}) {
    return (
        <div className="block-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <i>Written By: {blog.author}</i>
                    </Link>    
                </div>
            ))}
        </div>
    )
}

export default BlockList;