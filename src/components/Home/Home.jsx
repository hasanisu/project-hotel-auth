import React, { useEffect, useState } from 'react';
import CheckOut from '../CheckOut/CheckOut';

const Home = () => {
    const [information, setInformation] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:7000/hello-test')
        .then(res => res.json())
        .then(data => setInformation(data))
    }, [])

    return (
        <div>
            <h2>This is Home:{information.length}</h2>

            <div className="grid gap-4 grid-cols-3  mt-20 mx-8">
            {
                information.map(product => <CheckOut
                key={product.key}
                product={product}
                ></CheckOut>)
            }
            </div>
        </div>
    );
};

export default Home;