import Navbar from '../Shared/Navbar/Navbar';
import { useLoaderData, useParams } from 'react-router-dom';

const NewsDetails = () => {


    const news = useLoaderData();
    const params = useParams();

    const result = news.find(currentNews => currentNews._id == params.id);


    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl font-semibold my-5">{result.title}</h2>
            <img src={result.image_url} alt="" />

        </div>
    );
};

export default NewsDetails;