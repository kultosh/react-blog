import {useState} from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');
   const [author, setAuthor] = useState('yoshi');
   const [isPending, setIsPending] = useState(false);
   const history = useHistory();

   const handleSubmit = (e) => {
      e.preventDefault();
      const blog = {title, body, author};

      setIsPending(true);

      fetch('http://localhost:8000/blogs', {
         method: 'POST',
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify(blog)
      }).then(() => {
         console.log('new blog added');
         setIsPending(false);
         history.push('/')
      })
   }

    return ( 
        <div className="create">
           <h3>Add a New BLog</h3> 
           <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" value={title} onChange= { (e) => setTitle(e.target.value) } />
           
            <label htmlFor="body">Body</label>
            <textarea value={body} onChange= { (e) => setBody(e.target.value) } cols="30" rows="10"></textarea>
           
            <label htmlFor="author">Author</label>
            <select name="author" value={author} onChange={(e) => setAuthor(e.target.value)}>
               <option value="mario">Mario</option>
               <option value="yoshi">Yoshi</option>
            </select>

           { isPending && <button>Addding Blog</button> }
           { !isPending && <button>Add Blog</button> }
           </form>
        </div>
     );
}
 
export default Create;