import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ModalContact } from './ModalContact';

export function ContactMe() {
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [modal, setmodal] = useState(false)
    const [modalMessage, setModalMessage] = useState('');

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
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
        let tempErrors = { name: '', email: '', phone: '', message: '' };

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

        if (!contactInfo.message) {
            formValid = false;
            tempErrors.message = 'Message is required';
        }

        setErrors(tempErrors);

        if (formValid) {
            const templateParams = {
                from_name: contactInfo.name,
                to_name: 'Ben', // Replace with the recipient's name
                message: contactInfo.message,
                email: contactInfo.email,
                phone: contactInfo.phone
            };

            emailjs.send('service_i1jms5i', 'template_nl0d2fg', templateParams, 'bx_8qBf35vFTbeDjo')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setModalMessage('SUCCESS!');
                    setmodal(true);
                }, (error) => {
                    console.log('FAILED...', error);
                    // alert('Failed to send email. Please try again.');
                    setModalMessage('Failed to send email. Please try again!');
                    setmodal(true);
                });
        }
    };

    const closeModal = () => {
        setmodal(false);
        window.scroll({top:0,behavior:'smooth'})
        setContactInfo({
            name: '',
            email: '',
            phone: '',
            message: '',
        });
        setErrors({
            name: '',
            email: '',
            phone: '',
            message: '',
        });
    };


    return (
        <>
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
                    <div>
                        <label>Message:</label>
                        <textarea
                            name="message"
                            value={contactInfo.message}
                            onChange={handleChange}
                        />
                        {errors.message && <span className="error">{errors.message}</span>}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </section>
            {modal && <ModalContact closeModal={closeModal} message={modalMessage} />}
        </>
    );
};
