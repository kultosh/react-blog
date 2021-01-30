const { Link } = require("react-router-dom")

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>404 Page Error!</h2>
            <p>Page cannot be found</p>
            <Link to="/">Back to the HomePage...</Link>
        </div>
     );
}
 
export default NotFound;