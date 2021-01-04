import {useState} from 'react';
function Home() {
    const [name, setname] = useState('Prasidha');
    const [age, setage] = useState(9);
    const handleClick  = () => {
       setname('Santosh');
       setage(26);
    }

    return (
        <div className="home">
            <h2>HomePage</h2>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default Home;