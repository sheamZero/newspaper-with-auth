import { FaRegBookmark, FaStar, FaEye } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const NewsCards = ({ currentNews }) => {
    const { image_url, title, author, details, total_view, rating, _id } = currentNews;
    const { name, published_date, img } = author;

    // const dateOnly = published_date ? published_date.slice(0,10) : "Not available";
    const dateOnly = published_date ? published_date.split(" ")[0] : "Not available"
    // console.log(dateOnly);



    return (
        <div className='mb-4 border'>

            <div className="flex justify-between items-center p-3 bg-slate-100">
                <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 ">
                        <img className="w-full  rounded-full" src={img} alt="" />
                    </div>
                    <div>
                        <h3>{name}</h3>
                        <h3>{dateOnly}</h3>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <FaRegBookmark></FaRegBookmark>
                    <IoShareSocialSharp></IoShareSocialSharp>
                </div>
            </div>

            <h2 className="font-semibold my-5 text-xl">{title}</h2>
            <img className='rounded w-full' src={image_url} alt="" />
            <p className="text-sm my-5">
                {
                    details.length > 200 ?
                        <>
                            <span>{details.slice(0, 200)}</span><br />
                            <Link to={`/news/${_id}`} className="text-red-600 font-semibold">Read more...</Link>
                        </>
                        : details

                }
            </p>

            <div className='flex items-center justify-between border-t-2 p-2'>
                <p className="flex items-center gap-2">
                    <FaStar className="text-orange-500"></FaStar>
                    <FaStar className="text-orange-500"></FaStar>
                    <FaStar className="text-orange-500"></FaStar>
                    {rating.number}
                </p>
                <p className="flex items-center gap-3">
                    <FaEye></FaEye>
                    {total_view}
                </p>
            </div>
        </div>
    );
};

export default NewsCards;