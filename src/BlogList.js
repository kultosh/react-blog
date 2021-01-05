function BlockList (props) {
    const blogs = props.blogs;
    return (
        <div className="block-list">
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