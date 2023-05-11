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
            <h2 className='text-center text-3xl mt-4'>Choose Your Effortable Items:{information.length}</h2>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 place-items-center sm:ml-20">
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