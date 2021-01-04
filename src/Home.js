function Home() {
    const handleClick  = () => {
        console.log('hello')
    }

    const handleClickAgain  = (name) => {
        console.log('New Hello ' + name);
    }

    return (
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click</button>
            <button onClick={() => handleClickAgain('Santosh')}>Click Me</button>
        </div>
    )
}

export default Home;