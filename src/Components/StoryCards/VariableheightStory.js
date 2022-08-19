import React, { useState } from 'react';
import { stories } from '../../data';
import polyzon from '../../images/polyzon.png';

const VariableheightStory = () => {
    const [storydata, setStoryData] = useState(stories);
    return (
        <div className='container mx-auto'>
            <div className="bg-white px-3 py-4 rounded-md">
                <div className=" variable_stroy_cover"></div>
                <h1 className='font-medium md:text-md my-4 px-4'>{storydata[0].content}</h1>

                <div className="sm:flex items-center my-5 justify-between">
                    <div className='flex items-center'>
                        <img className='h-10 rounded-full' src={storydata[0].author.profileImage} alt="" />
                        <h1 className='ml-2 font-bold text-md lg:text-xl'>{storydata[0].author.name}</h1>
                    </div>
                    <p className='text-gray-400 mt-3 sm:mt-0 ml-3 sm text-sm md:text-lg font-medium'>{storydata[1].created}</p>
                    <div className='flex mt-3 sm:mt-0 items-center'>
                        <img className='h-6' src={polyzon} alt="" />
                        <h1 className='ml-2 font-bold text-md lg:text-xl'>{storydata[0].community.name}</h1>
                    </div>
                </div>
            </div>

            <div className="bg-white mt-10 px-3 py-4 rounded-md">
                <h1 className='font-medium md:text-md my-4 px-4'>{storydata[0].content}</h1>

                <div className="sm:flex items-center my-5 justify-between">
                    <div className='flex items-center'>
                        <img className='h-10 rounded-full' src={storydata[0].author.profileImage} alt="" />
                        <h1 className='ml-2 font-bold text-md lg:text-xl'>{storydata[0].author.name}</h1>
                    </div>
                    <p className='text-gray-400 mt-3 sm:mt-0 ml-3 sm text-sm md:text-lg font-medium'>{storydata[1].created}</p>
                    <div className='flex mt-3 sm:mt-0 items-center'>
                        <img className='h-6' src={polyzon} alt="" />
                        <h1 className='ml-2 font-bold text-md lg:text-xl'>{storydata[0].community.name}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VariableheightStory;