import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const App = () => {
    return (
        <div className='text-center items-center'>
            <h1 className='mb-10'>This is the Stater template for react app.</h1>
            <p className='mb-10'>This template includes: react-icons, Eslint, Prettier</p>
            <p className='display-center'>Follow Me: <span style={{fontSize:"30px"}}> <a href="https://github.com/nuruzaman-milon" target='_blank'><FaGithub/></a> <a href="https://www.linkedin.com/in/nuruzaman-milon/" target={'_blank'}><FaLinkedin/></a></span></p>
        </div>
    );
};

export default App;
