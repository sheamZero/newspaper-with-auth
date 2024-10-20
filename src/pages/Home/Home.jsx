import React from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftSideContent from '../Shared/LeftSideContent/LeftSideContent';
import RightSideContent from '../Shared/RightSideContent/RightSideContent';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCards from './NewsCards';

const Home = () => {
    const news = useLoaderData();
    // console.log(news);
    return (
        <div className='font-poppins '>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <h2 className="3xl">This is home</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="">
                    <LeftSideContent news={news}></LeftSideContent>
                </div>
                <div className="col-span-2 ">
                   {
                    news.map(currentNews => <NewsCards currentNews={currentNews} key={currentNews._id}></NewsCards>)
                   }
                </div>
                <div className="">
                    <RightSideContent></RightSideContent>
                </div>
            </div>
        </div>
    );
};

export default Home;