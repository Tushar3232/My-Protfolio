import React from 'react';
import profile from '../assets/pic-1.png'; 

const Hero = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={profile}
                        alt="Tushar Debnath"
                        className="max-w-sm rounded-full shadow-2xl"
                    />
                    <div>
                        <h1 className="text-3xl font-bold">Hello It's Me </h1>
                        <h2 className='text-5xl font-bold my-2'>Tushar Debnath</h2>
                        <h2 className='text-3xl font-bold text-blue-600'>
                            Software / Web Developer
                        </h2>
                        <p className="py-6">
                            A FrontEnd Developer & MERN Stack Specialist. I'm deeply passionate about creating innovative, responsive, and user-friendly web applications that captivate and engage users
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
