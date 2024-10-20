import React from 'react';
import logo from "../../../assets/logo.png"
import moment from 'moment';


const Header = () => {
    return (
        <div className="text-center mt-10">
            <img className='mx-auto' src={logo} alt="" />
            <p className="mt-3 mb-2 text-lg">Journalism Without Fear or Favour</p>
            <p className="font-medium text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;