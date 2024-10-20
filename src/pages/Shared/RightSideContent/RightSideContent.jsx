import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"

const RightSideContent = () => {
    return (
        <div className="py-2">
            <h2 className="text-xl font-semibold ">Login With</h2>
            <div className="my-3">
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
            </div>
            <div>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>

            {/* Find us On  */}
            <div className='mb-5'>
                <h2 className="text-xl font-semibold my-8">Find Us On</h2>
                <div>
                    <a className='flex items-center gap-3 border py-3 px-4 rounded-t-lg' href="">
                        <FaFacebook></FaFacebook>
                        <span>Facebook</span>
                    </a>
                </div>
                <div>
                    <a className='flex items-center gap-3 border-x py-3 px-4' href="">
                        <FaTwitter></FaTwitter>
                        <span>Twitter</span>
                    </a>
                </div>
                <div>
                    <a className='flex items-center gap-3 border py-3 px-4 rounded-b-lg' href="">
                        <FaInstagram></FaInstagram>
                        <span>Instagram</span>
                    </a>
                </div>
            </div>

            {/* Q-zone */}
            <div className='p-3 bg-slate-50 '>
                <h2 className="text-xl font-semibold mb-5">Q-zone</h2>
                <div className='border-2 border-dashed'>
                    <img src={qZone1} alt="" />
                </div>
                <div className='border-2 border-dashed my-5'>
                    <img src={qZone2} alt="" />
                </div>
                <div className='border-2 border-dashed'>
                    <img src={qZone3} alt="" />
                </div>
            </div>

        </div>
    );
};

export default RightSideContent;