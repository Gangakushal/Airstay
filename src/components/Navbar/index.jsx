import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal';

const searchOptions = {
    stays: [
        { title: 'Where', placeHolder: 'Search Destinations', width: 250 },
        { title: 'Check-in', placeHolder: 'Add Dates', width: 200 },
        { title: 'Check-out', placeHolder: 'Add Dates', width: 200 },
        { title: 'Who', placeHolder: 'Add Guests', width: 300 },
    ],
    experiences: [
        { title: 'Where', placeHolder: 'Search Destinations', width: 250 },
        { title: 'Date', placeHolder: 'Add Dates', width: 400 },
        { title: 'Who', placeHolder: 'Add Guests', width: 300 },
    ],
};

const inactiveStyle = {
    fontSize: '15px',
    fontWeight: '400',
    borderRadius: '50%',
    color: '#6b6b6b',
};

export default function Navbar() {
    const [activeTab, setActiveTab] = useState('stays');
    const searchList = searchOptions[activeTab];

    return (
        <nav className="flex flex-col justify-center px-16 py-8 font-sans border-b-2 border-shadow">
            <div className="flex justify-between items-center h-[16px]">
                <Link to="/" className="flex items-center text-airstay-red w-[500px]">
                    <i className="text-4xl fi fi-brands-airbnb"></i>
                    <h1 className="text-2xl font-semibold ms-1">airstay</h1>
                </Link>
                <div className="flex w-[180px] text-lg justify-between">
                    {['stays', 'experiences'].map((tab) => (
                        <button
                            key={tab}
                            style={activeTab !== tab ? inactiveStyle : {}}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>
                <div className="flex items-center gap-x-2 w-[500px] justify-end">
                    <h1 className="text-sm px-5 py-3 hover:bg-[#ebebeb] flex items-center rounded-full cursor-pointer">
                        Airstay Your Home
                    </h1>
                    <i
                        onClick={() => document.getElementById('my_modal_1').showModal()}
                        className="rounded-full px-3 py-2 hover:bg-[#ebebeb] fi fi-br-world"
                    ></i>
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            className="px-4 h-[50px] w-24 rounded-full flex items-center justify-between border-[0.5px] border-[#b3b3b3] hover:shadow-md"
                        >
                            <i className="fi fi-br-menu-burger"></i>
                            <i className="text-2xl fi fi-br-user-skill-gear text-[#595959]"></i>
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                        >
                            <li><a>Sign Up</a></li>
                            <li><a>Sign In</a></li>
                            <hr className="my-2" />
                            <li><a>Airstay Your Home</a></li>
                            <li><a>Help!</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-10 h-[65px] mx-auto shadow-lg rounded-full border-[1px] border-shadow flex overflow-hidden">
                {searchList.map(({ title, placeHolder, width }) => (
                    <div
                        key={title}
                        className="flex flex-col justify-center h-full px-5 rounded-full cursor-pointer hover:bg-shadow"
                        style={{ width: `${width}px` }}
                    >
                        <h1 className="text-base">{title}</h1>
                        <p className="text-sm text-light">{placeHolder}</p>
                    </div>
                ))}
            </div>

            <Modal classNames="h-[80%] max-w-[80%]" modal_id="my_modal_1">
                <h3 className="text-5xl font-bold">Hello!</h3>
                <p className="py-4">It's Modal from navbar</p>
            </Modal>
        </nav>
    );
}
