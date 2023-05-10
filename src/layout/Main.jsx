import React from 'react';
import Header from '../components/Header/Header';
import './Main.css';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div>
           <Header></Header>
           <img className='w-full h-5/6 bg-img' src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;