import React, { useState } from 'react';
import { stories } from '../../data';
import polyzon from '../../images/polyzon.png';

const FixedHeightStory = () => {
    const [storydata, setStoryData] = useState(stories);

    const hashTags = storydata[0].hashtags.join(', ');
    return (
        <div className='container mx-auto my-10'>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 px-3 py-4 rounded-md bg-white h[400px]">
                <div className='order-2 md:order-1'>
                    <h1 className='md:text-2xl text-xl text-zinc-700 font-bold'>{storydata[0].title}</h1>
                    <div className="sm:flex items-center my-5 justify-between">
                        <div className='flex items-center'>
                            <img className='h-10 rounded-full' src={storydata[0].author.profileImage} alt="" />
                            <h1 className='ml-2 font-bold text-md lg:text-xl'>{storydata[0].author.name}</h1>
                        </div>
                        <div className='flex mt-3 sm:mt-0 items-center'>
                            <img className='h-6' src={polyzon} alt="" />
                            <h1 className='ml-2 font-bold text-md lg:text-xl'>{storydata[0].community.name}</h1>
                        </div>
                    </div>
                    <hr />
                    <div className="sm:flex my-4 ">
                        <h1 className='text-gray-400 text-sm md:text-md font-medium'>{storydata[0].created}</h1>
                        {
                            <p className='text-gray-600 text-sm md:text-md sm:mt-0 mt-2 sm:ml-5 font-medium' >{hashTags.slice(0, 35)}...</p>
                        }

                    </div>
                </div>
                <div className='cover_image order-1 md:order-2'>

                </div>
            </div>
        </div>
    );
};

export default FixedHeightStory;