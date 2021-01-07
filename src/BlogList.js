function BlockList ({blogs, title, handleBlog}) {
    return (
        <div className="block-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <i>Written By: {blog.author}</i>
                    <button onClick={() => handleBlog(blog.id)}>delete blog</button>
                </div>
            ))}
        </div>
    )
}

export default BlockList;