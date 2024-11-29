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
            query: document.getElementById('query').value,
        };
    
        // Replace this URL with your Google Apps Script Web App URL
        const baseURL = "https://script.google.com/macros/s/AKfycbyQRA3fWuIpnInPiSmELQzCkIQoK9sIVeSzop_Ob76OyeZEQcLTpwAwa1CZ00rPUQOP/exec";
    
        // Add query parameters
        const query = new URLSearchParams(formData).toString();
        const url = `${baseURL}?${query}`;
    
        try {
            const response = await fetch(url, {
                method: 'GET',
            });
    
            const result = await response.json();
            if (result.status === 'success') {
                setResponseMessage('You will contacted soon');
                event.target.reset(); // Clear the form
            } else {
                setResponseMessage('Please try again later.');
            }
        } catch (error) {
            setResponseMessage('Please try again later.');
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
                                id="query"
                                placeholder="Your query"
                                required
                            ></textarea>
                            </div>
                            <div className="sub_button">
                                <button type="submit" className="subscribe-button">Submit</button>
                            </div>
                        </form>
                        {responseMessage && (
                                <div 
                                    className={`response-message ${responseMessage.includes('success') ? 'success' : 'error'}`}>
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
