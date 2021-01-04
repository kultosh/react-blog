import './App.css';

function App() {
  const title = 'Welcome to new blog!';
  const link = "https://github.com/kultosh";

  return (
    <div className="App">
      <div className="content">
        <h2>React Blog</h2>
        <p>{title}</p>
        <a href={link}>My Github</a>
      </div>
    </div>
  );
}

export default App;
