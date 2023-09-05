import React from 'react';
import aboutImg from "../../../assets/image/about.png"
const About = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full'>
            <div className='w-full'>
                <img src={aboutImg} alt="" />
            </div>
            <div className='my-auto w-full'>
               <p>At Iron Fist Martial Arts, we're dedicated to empowering individuals through the discipline of martial arts. With a rich legacy of over two decades, our school is a welcoming community where students of all ages and backgrounds can develop physical strength, mental resilience, and life-enhancing skills.</p> <br />
               <p>Our experienced instructors are committed to providing top-notch training in various martial arts disciplines, ensuring that every student can find their path to personal growth and mastery.</p><br />
               <p>We prioritize safety and uphold the highest standards of instruction, making Iron Fist a trusted choice for both beginners and experienced martial artists.</p><br />
               <p>Join us today to embark on a transformative journey of self-discovery and empowerment through the art of martial combat.</p>
            </div>
        </div>
    );
};

export default About;