import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NewsCard from './NewsCard';

const LeftSideContent = ({ news }) => {
    
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setCategories(data));

    }, [])


    return (
        <div className='py-2'>
            <h2 className="text-xl font-semibold mb-5">All Categories</h2>
            <div className='mb-8'>
                {
                    categories.map(category => <Link className="block p-4 pl-16 font-medium text-lg hover:bg-slate-50 active:bg-slate-100" key={category.id}>{category.name}</Link>)
                }
            </div>

            <div>
                {
                    news.map(currentNews => <NewsCard key={currentNews._id} currentNews={currentNews}></NewsCard>)
                }     
            </div>
        </div>

    );
};

export default LeftSideContent;