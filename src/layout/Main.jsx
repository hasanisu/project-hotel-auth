import React from 'react';
import Header from '../components/Header/Header';
import './Main.css';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div>
           <Header></Header>
           <img className='w-full bg-img' src="https://www.berjayahotel.com/sites/default/files/colombo_2.jpg" alt="" />
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;