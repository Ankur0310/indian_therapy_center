import React, { useState } from 'react';
import "./Subscribe.css";

const Subscribe = () => {
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
        };

        // Replace this URL with your Google Apps Script Web App URL
        const scriptURL = "https://script.google.com/macros/s/AKfycbyexxVa3K-OiFdPNBzGzauCMPIeVNrxrfk0Bg6w74VQHxdcmrjKiroehBCcodhAN3XURg/exec";

        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (result.status === 'success') {
                setResponseMessage('Form submitted successfully!');
                event.target.reset(); // Clear the form
            } else {
                setResponseMessage('Error submitting form. Please try again.');
            }
        } catch (error) {
            setResponseMessage('Connection error. Please try again later.');
            console.error('Error:', error);
        }
    };

    return (
        <div className="sub_container">
            <div className="sub_form-container">
                <div className="sub_main">
                    <div className="section_subscribe_box">
                        <div className="logo">
                            {/* Add your logo image here */}
                        </div>
                        <div className="sub_form-header">
                            <h1 className="sub_form-header">Have Questions About Our Therapies?</h1>
                        </div>
                        <div className="sub_form_para">
                            <p>Explore the best therapy solutions tailored to your needs. Share your queries with us, and our experts will guide you to the right path. Fill out the form below to get started!</p>
                        </div>
                        <form onSubmit={handleSubmit} className="query_form">
                            <div className="sub_form-field">
                                <input
                                    className="sub_form_input"
                                    type="text"
                                    id="name"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div className="sub_form-field">
                                <input
                                    className="sub_form_input"
                                    type="email"
                                    id="email"
                                    placeholder="Your email"
                                    required
                                />
                            </div>
                            <div className="sub_form-field">
                                <input
                                    className="sub_form_input"
                                    type="phone"
                                    id="phone"
                                    placeholder="Your Phone Number"
                                    required
                                />
                            </div>
                            <div className="sub_form-field">
                            <textarea
                                className="sub_form_input area_field"
                                id="area"
                                placeholder="Your query"
                                required
                            ></textarea>
                            </div>
                            <div className="sub_button">
                                <button type="submit" className="subscribe-button">Submit</button>
                            </div>
                        </form>
                        {responseMessage && (
                            <div className="response-message">
                                <p>{responseMessage}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
