import React, { useState } from 'react';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [flyer, setFlyer] = useState(false);
    const [flyerTwo, setFlyerTwo] = useState(false);

    return (
        <>
            <div className="relative ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="/">
                                <span className="sr-only">Workflow</span>
                                <img
                                    className="h-8 w-auto sm:h-10"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <button
                                type="button"
                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                onClick={() => setOpen(!open)}
                            >
                                <span className="sr-only">Open menu</span>
                                {/* Heroicon name: outline/menu */}
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                        {/* Desktop Menu */}
                        <nav className="hidden md:flex space-x-10">
                            <div className="relative">
                                <button className=" btn btn-ghost "><span>Home</span></button>
                            </div>
                            <div className="relative">
                                <button className=" btn btn-ghost"><span>About</span></button>
                            </div>
                            <div className="relative">
                                <button className=" btn btn-ghost"><span>Contact</span></button>
                            </div>
                            <div className="relative">
                                <button className=" btn btn-ghost"><span>Help</span></button>
                            </div>
                        </nav>
                        {/* Login Details */}
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <a href="/" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                            > Sign in </a>
                            <a href="/" className="btn glass ml-2 text-black  hover:bg-white hover:text-black"
                            > Sign up
                            </a>
                        </div>
                    </div>
                </div>

                <div className={
                    open
                        ? "opacity-100 scale-100  ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                }
                >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    {/* Brand Logo */}
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                        alt="Workflow"
                                    />
                                </div>
                                {/* Main Menu Menu */}
                                <div className="-mr-2">
                                    <button
                                        type="button"
                                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                        onClick={() => setOpen(!open)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <svg
                                            className="h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Mobile Menu Start */}
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    <a
                                        href="/"
                                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                    >
                                        {/* Heroicon name: outline/chart-bar */}
                                        <svg
                                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                            />
                                        </svg>
                                        <span className="ml-3 text-base font-medium text-gray-900">
                                            Analytics
                                        </span>
                                    </a>
                                    <a
                                        href="/"
                                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                    >
                                        {/* Heroicon name: outline/cursor-click */}
                                        <svg
                                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                            />
                                        </svg>
                                        <span className="ml-3 text-base font-medium text-gray-900">
                                            Engagement
                                        </span>
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;