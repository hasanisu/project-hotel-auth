import React from 'react';
import { Link } from 'react-router-dom';

const CheckOut = ({ product }) => {
    const { id, name, img } = product;
    return (
        <div className=''>
            <div className="card card-compact w-96 bg-zinc-600 shadow-xl">
                <img className='mx-auto mt-10 w-10/12 rounded-2xl' src={img} alt="Shoes"></img>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link to={`/booking/:${id}`}><button className="btn btn-primary">Buy Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;