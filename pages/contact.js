import Head from 'next/head'
import Break from '../components/Break'
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const contactForm = useRef()

    const clearForm = () => {
        setName('')
        setNumber('')
        setEmail('')
        setSubject('')
        setMessage('')
    }
    
    const submitForm = (e) => {
        e.preventDefault()
    
        emailjs.sendForm('contact_service', 'contact_form', contactForm.current, 'user_eAK3Etx6c29UBd7NwFDAW')
            .then((res) => {
                console.log(res.text)
            }, (error) => {
                console.log(error.text)
            })
        location.href = "/success"
    }

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    return (
        <>
            <Head>
                <title>Contact Me</title>
            </Head>
            <Break />
            <section className="hero">
                <div className="hero-body">
                    <h1 className="title">
                    Contact Me!
                    </h1>
                    <h2 className="subtitle">
                    I am excited to hear from you! Please fill out the contact form below and I will get back with you as soon as I can!
                    </h2>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <form ref={contactForm} onSubmit={submitForm}>
                        <div className="field">
                            <label className="label">Name:</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Your name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                        </div>
                    
                        <div className="field">
                            <label className="label">Phone Number:</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" type="text" placeholder="Your phone number" name="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-mobile-alt"></i>
                                </span>
                            </div>
                        </div>
                    
                        <div className="field">
                            <label className="label">Email:</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" type="email" placeholder="Your email address" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope"></i>
                                </span>
                            </div>
                        </div>
                    
                        <div className="field">
                            <label className="label">Subject</label>
                            <div className="control">
                                <div className="select">
                                    <select name="subject" size="1" value={subject} onChange={(e) => setSubject(e.target.value)}>
                                        <option>Website Development
                                        </option>
                                        <option>Mobile App Pricing
                                        </option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    
                        <div className="field">
                            <label className="label">Message:</label>
                            <div className="control">
                                <textarea className="textarea" placeholder="Type your message here" name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                            </div>
                        </div>
                    
                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-dark" type="submit">Submit</button>
                            </div>
                            <div className="control">
                                <button className="button is-light" type="button" onClick={clearForm}>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact