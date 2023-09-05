import React from 'react';
import welcome from "../../../assets/image/welcome.jpg"

const ChooseUs = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2'> 
            <div className='mb-5 sm:mb-0'>
                <img className='rounded-xl' src={welcome} alt="" />
            </div>
            <div className='my-auto mx-auto '>
                <ul className='list-disc ml-10 text-xl'>
                   <li>Qualified Instructors</li>
                   <li>Diverse Martial Arts Styles</li>
                   <li>Focus on Self-Defense</li>
                   <li>Safety First</li>
                   <li>Character Development</li>
                   <li>Personalized Training</li>
                   <li>Inclusivity</li>
                   <li>Community and Support</li>
                   <li>Competitive Opportunities</li>
                   <li>Trial Classes</li>
                </ul>
            </div>
        </div>
    );
};

export default ChooseUs;