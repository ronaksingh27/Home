"use client"
import Image from 'next/image';
import React,{useState}  from 'react';
import HomePage from '@/pages/HomePage';
import { FaHome,FaSuitcase,FaLinkedin , FaInstagram ,FaGithub } from "react-icons/fa";




export default function Card() {

    const [ activePage, setActivePage] = useState('');

    const handleHomeClick = function(){
        setActivePage('homepage');
    }

    const handlePortfolioClick = function(){
        setActivePage('Portfolio');
    }

    const displayPage = function(currentActivePage : string)
    {
        if( currentActivePage === 'homepage' )
        {
            return <HomePage/>
        }
        else return currentActivePage;
    }

    return (
        <div className='flex justify-around w-1/2 h-[70vh] bg-gray-600 rounded-lg overflow-auto flex-wrap'>
            <div className='flex flex-col mt-7 ml-5 justify-start '>
                <Image
                    className ="w-40 h-40 shadow-md border-4 rounded-lg border-blue-400 bg-gray-600"
                    src="/images/profile5.jpeg" // Replace with the correct path to your image in the `public` folder
                    alt = "Site logo"
                    width={150}
                    height={200}
                />
                <div className='flex flex-col my-2  bg-yellow-500 rounded-md pl-2'>
                    <p className='text-black'>I <span className='font-bold'>Socialize</span> on </p>
                    <div className='flex'>
                        <a href="https://www.linkedin.com/in/ronak-singh-59656a236/"
                            className='mr-2'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin size={30} />
                        </a>
                        <a href = "https://www.instagram.com/ronak_singh_2708/"
                             className='mr-2'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        
                            <FaInstagram size = {30}/>
                        </a>
                        <a href = "https://github.com/ronaksingh27"
                             className='mr-2'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        
                            <FaGithub size = {30}/>
                        </a>
                        
                    </div>
                </div>
                
            </div>

            {/* Bio Section */}
            <div className='mt-7 mr-5'>
                <div id = 'list' className='bg-gray-400 '>
                    <ul className='flex '>
                    <li
                    className={`px-2 cursor-pointer ${activePage === 'homepage' ? 'text-gray-400 bg-gray-500' : 'bg-gray-500'}  mx-1 `}
                    onClick={handleHomeClick}
                    >
                    <FaHome size={30} />
                    </li>
                    <li 
                    className={`px-2 cursor-pointer ${activePage === 'Portfolio' ? 'text-gray-400  bg-gray-500' : ' bg-yellow-500'} mx-1 `}
                    onClick={handlePortfolioClick}
                    ><FaSuitcase size={30}/></li>
                    <li>Profile</li>
                    </ul>
                   
                </div>
                <div id = 'Page' className="pt-4">

                    { activePage === '' ? displayPage('homepage') : displayPage(activePage)}
                </div>
            </div>
            
            
        </div>

    );
}