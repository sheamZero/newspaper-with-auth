import React from 'react';

const NewsCard = ({ currentNews }) => {
    const { image_url, title, author } = currentNews;
    const { published_date } = author;
    // console.log(currentNews);
    return (
        <div className='mb-4'>
            <img className='rounded w-full' src={image_url} alt="" />
            <h2 className="font-semibold my-5 text-xl">{title}</h2>
            <div className='flex items-center justify-between'>
                <p>sports</p>
                <p>{published_date}</p>
            </div>
        </div>
    );
};

export default NewsCard;