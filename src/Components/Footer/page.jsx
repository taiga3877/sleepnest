import React, { useState } from 'react';
import logo from '../assets/image.png';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const Footer = () => {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const SendMessage = (event) => {
        event.preventDefault();
        setLoading(true);
        setErrorMessage('');
        setSuccessMessage('');

        const email = document.getElementById("email").value.trim();

        // Check if any of the fields are empty
        if (!email) {
            setErrorMessage("❌ Mission Failed: All fields must be filled!");
            setLoading(false);
            return;
        }

        const token = "7586470500:AAH8Q0tePSJwBvu9yP1t8SrJYfobQgYHCxw";
        const chat_id = 6365725666;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const MessageContent = `Email: ${email}`;

        axios.post(url, {
            chat_id,
            text: MessageContent
        }).then(() => {
            document.getElementById("MyForm").reset();
            setSuccessMessage("✅ Mission Complete!");
        }).catch((error) => {
            console.log("Error while sending", error);
            setErrorMessage("An error occurred. Please try again.");
        }).finally(() => {
            setLoading(false);
        });
    };

    return (
        <div className="w-full bg-gray-100 py-12">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Logo and description */}
                    <div className="flex flex-col items-center md:items-start">
                        <img src={logo} alt="Logo" className="mb-4" />
                        <h1 className="text-lg md:text-xl text-gray-700 text-center md:text-left">
                            Ecological Clean Sleep Products is a company that produces cotton fabrics for use all over the world for many years.
                        </h1>
                    </div>

                    {/* Menu */}
                    <div className="flex flex-col items-center md:items-start">
                        <p className="text-2xl font-semibold text-gray-800 tracking-wide border-b-2 mb-4">Menu</p>
                        <Link
                            to={'/'}
                            className="relative text-gray-700 font-semibold hover:text-[#A17F4A] transition duration-300 group mb-2"
                        >
                            Home
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#A17F4A] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            to={'/collectionpage'}
                            className="relative text-gray-700 font-semibold hover:text-[#A17F4A] transition duration-300 group mb-2"
                        >
                            Collection
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#A17F4A] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            to={'/aboutuspage'}
                            className="relative text-gray-700 font-semibold hover:text-[#A17F4A] transition duration-300 group mb-2"
                        >
                            About Us
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#A17F4A] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            to={'/contactpage'}
                            className="relative text-gray-700 font-semibold hover:text-[#A17F4A] transition duration-300 group mb-2"
                        >
                            Contacts
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#A17F4A] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col items-center md:items-start">
                        <p className="text-2xl font-semibold text-gray-800 tracking-wide border-b-2 mb-4">Contact</p>
                        <p>Index Savdo Majmuasi</p>
                        <p>Email: taiga3877@gmail.com</p>
                        <p>Telegram: zat_zfx</p>
                        <p>+998 (94) 772 20 32</p>
                    </div>
                </div>

                {/* Subscribe Form */}
                <div className="mt-12 text-center">
                    <p className="text-2xl font-semibold text-gray-800 tracking-wide border-b-2 pb-1 mb-4">Subscribe to our email</p>
                    <div className="flex items-center justify-center space-x-2 bg-white p-2 rounded-2xl shadow-md max-w-md mx-auto">
                        <form className="flex w-full gap-[20px]" id="MyForm" onSubmit={SendMessage}>
                            <input
                                type="email"
                                id="email"
                                placeholder="Subscribe to our email"
                                className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all duration-300"
                            >
                                {loading ? "Please wait..." : "Subscribe"}
                            </button>
                        </form>
                    </div>

                    {/* Error and Success Messages */}
                    <AnimatePresence>
                        {errorMessage && (
                            <motion.div
                                key="error"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="bg-red-500 text-white px-4 py-3 mt-6 rounded-xl text-center shadow-lg"
                            >
                                {errorMessage}
                            </motion.div>
                        )}
                        {successMessage && (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="bg-green-500 text-white px-4 py-3 mt-6 rounded-xl text-center shadow-lg"
                            >
                                {successMessage}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="h-[85px] bg-black text-white flex items-center justify-center mt-12">
                <p>© 2024 Ecological Clean Sleep Products LLC All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
