import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex items-center bg-slate-100 p-2 rounded my-8">
            <button className="btn btn-secondary">BreakingNews</button>
            <div>
                <Marquee pauseOnHover={true} speed={200}>
                    <Link className="mr-10" to={""}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, velit.....</Link>
                    <Link className="mr-10" to={""}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, velit.....</Link>
                    <Link className="mr-10" to={""}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, velit.....</Link>
                </Marquee>
            </div>

        </div>
    );
};

export default BreakingNews;