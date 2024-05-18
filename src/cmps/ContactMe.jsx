import React, { useState } from 'react';

export function ContactMe() {
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactInfo({
            ...contactInfo,
            [name]: value,
        });
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        return regex.test(email);
    };

    const validatePhone = (phone) => {
        const regex = /^\d{10}$/;
        return regex.test(phone);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let formValid = true;
        let tempErrors = { name: '', email: '', phone: '' };

        if (!contactInfo.name) {
            formValid = false;
            tempErrors.name = 'Name is required';
        }

        if (!contactInfo.email) {
            formValid = false;
            tempErrors.email = 'Email is required';
        } else if (!validateEmail(contactInfo.email)) {
            formValid = false;
            tempErrors.email = 'Email is not valid';
        }

        if (!contactInfo.phone) {
            formValid = false;
            tempErrors.phone = 'Phone number is required';
        } else if (!validatePhone(contactInfo.phone)) {
            formValid = false;
            tempErrors.phone = 'Phone number is not valid';
        }

        setErrors(tempErrors);

        if (formValid) {
            alert('Form submitted successfully');
            // Here you can handle the form submission, e.g., send the data to your backend
            console.log('Submitted contact info:', contactInfo);
        }
    };

    return (
        <section className='contact-page'>
        <h2>Contact With Me!</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={contactInfo.name}
                    onChange={handleChange}
                />
                {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={contactInfo.email}
                    onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div>
                <label>Phone:</label>
                <input
                    type="text"
                    name="phone"
                    value={contactInfo.phone}
                    onChange={handleChange}
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
        </section>
    );
};

