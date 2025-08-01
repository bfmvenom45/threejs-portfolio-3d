import React, { use, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {

    const [loading, setLoading] = useState(false);
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        try {
            await  emailjs.send(
            'service_nwlpa5p',
            'template_8sinvzj',
            {
                from_name: form.name,
                to_name: 'Oleksandr',
                from_email: 'bfmvenom45@gmail.com',
                message: form.message
            }, "Cah-Cah-pYcmPfW60qQ0Z" // Your user ID from EmailJS
       
        
    )  
      setLoading(false);

    alert('Thank you! I will get back to you as soon as possible.');
    setForm({
        name: '',
        email: '',
        message: '' 
    })

        } catch (error) {
        setLoading(false);
        console.log(error);
        alert('Something went wrong. Please try again later.');
        }
       
    };

    // service_nwlpa5p

  return (
    <section className="c-space my-20">
        <div className="relative min-h-screen flex items-center justify-center flex-col">     
            <img src="/assets/terminal.png" alt="background" className="absolute inset-0 min-h-screen" /> 
            <div className='contact-container'>
                 <h3 className="head-text">Contact Me</h3>  
                 <p className="text-lg text-white-600 mt-3 " >
                    Feel free to reach out for collaborations or just to say hi!
                    </p>  
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3 ">
                            <span className="field-label">Your Name</span>
                            <input 
                                type="text" 
                                name="name" 
                                value={form.name} 
                                onChange={handleChange} 
                                placeholder="Enter your name" 
                                className="field-input"
                                required
                            />  
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Your Email</span>
                            <input 
                                type="email" 
                                name="email" 
                                value={form.email} 
                                onChange={handleChange} 
                                placeholder="Enter your email" 
                                className="field-input"
                                required
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Your Message</span>
                            <textarea 
                                name="message" 
                                value={form.message} 
                                onChange={handleChange} 
                                placeholder="Type your message here"
                                className="field-input"
                                rows="5"
                                required
                            ></textarea>
                        </label>
                        <button 
                            type="submit" 
                            className="field-btn"
                            disabled={loading}
                        >       
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"  />
                        </button>
                        {loading && <p className="loading-text">Sending your message...</p>}                
                            

                    </form>
            </div>
        </div>

      
    </section>
  );
}   

export default Contact; 