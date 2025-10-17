import React from 'react';
import Hero from '../Components/Hero';
import About from '../Sections/About';
import Education from '../Sections/Education';
import Skills from '../Sections/Skills';
import Projects from '../Sections/Projects';
import ContactForm from '../Sections/ContactForm';
import Herobg from '../Components/Herobg';


const Home = () => {
    return (
        < >
            <Herobg></Herobg>
            <div className=' bg-black'>
                <section id="about">
                    <About></About>
                </section>

                <section id="education">
                    <Education></Education>
                </section>

                <section id="skills">
                    <Skills></Skills>
                </section>

                <section id="projects">
                    <Projects></Projects>
                </section>

                <section id="contact">
                    <ContactForm></ContactForm>
                </section>
            </div>

        </>
    );
};

export default Home;