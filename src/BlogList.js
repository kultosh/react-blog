function BlockList ({blogs, title}) {
    return (
        <div className="block-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <i>Written By: {blog.author}</i>
                </div>
            ))}
        </div>
    )
}

export default BlockList;