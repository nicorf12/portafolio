import React from 'react';
import './contact.css';

const Contact = ({ contact }) => {
    return (
        <div className="contact" id="contact">
            <h1>{contact.title}</h1>
            <p>{contact.description}</p>
            
            <div className="contact-methods">
                {contact.medios.map((medio, index) => (
                    <p key={index}>
                        {medio.title}: {' '}
                        {medio.title.toLowerCase().includes("correo") ? (
                            <a href={`mailto:${medio.url}`}>{medio.url}</a>
                        ) : (
                            <a href={medio.url} target="_blank">{medio.url}</a>
                        )}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Contact;
