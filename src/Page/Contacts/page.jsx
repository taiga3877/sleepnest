import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';


const Contact = () => {

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const SendMessage = (event) => {
        event.preventDefault();
        setLoading(true);
        setErrorMessage('');
        setSuccessMessage('');

        const email = document.getElementById("email").value.trim();
        const number = document.getElementById("number").value.trim();
        const message = document.getElementById("message").value.trim();

        // Check if any of the fields are empty
        if (!email || !number || !message) {
            setErrorMessage("❌ Mission Failed: All fields must be filled!");
            setLoading(false);
            return;
        }

        const token = "7586470500:AAH8Q0tePSJwBvu9yP1t8SrJYfobQgYHCxw";
        const chat_id = 6365725666;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const MessageContent = `Email: ${email} \nNumber: ${number} \nmessage: ${message}`;

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
        <div>
  <div className='max-w-screen-xl w-full mx-auto px-4'>
                <br />
                <br />
                <br />
                <br />  
                <br />
                <div className="flex flex-col lg:flex-row gap-10 p-6 bg-white rounded-2xl ">
                    {/* Contact Form */}
                    <form id='MyForm' onSubmit={SendMessage} className="flex-1 space-y-5">
                        <h1 className="text-3xl font-bold text-gray-800">Connection</h1>
                        <input
                            type="email"
                            id='email'
                            placeholder="Your email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <input
                            type="number"
                            id='number'
                            placeholder="Your phone number"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <textarea
                            placeholder="Please write if you have a message"
                            id='message'
                            className="w-full px-4 py-3 h-[133px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                        />

                        <button
                            type="submit"
                            onClick={SendMessage}
                            className="w-[160px] py-3 font-semibold text-white rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 shadow-lg hover:shadow-amber-500/40 hover:scale-105 transition-all duration-300 ease-in-out">
                            {loading ? "Please wait..." : "Send"}

                        </button>
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


                    </form>

                    {/* Google Map */}
                    <div className="flex-1">
                        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
                            <iframe
                                className="w-full h-full border-0"
                                src="https://maps.google.com/maps?q=39.747452957301974%2C%2064.45996439941372&t=m&z=17&output=embed&iwloc=near"
                                title="Location Map"
                                aria-label="Location Map Coordinates 39.747452957301974, 64.45996439941372"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>


            </div>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Contact