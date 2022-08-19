import React, { useState } from 'react';
import { users } from '../../data';
const AuthorProfile = () => {
    const [authorData, setAuthorData] = useState(users);
    return (
        <div className='container mx-auto mb-10'>
            <div className="px-3 py-4 rounded-md">
                <h1 className='text-white text-2xl font-semibold'>Amaging Authors to follwo</h1>
                {
                    authorData.map((author, index) => {
                        return (
                            <div key={index} className="bg-[#383b4d] rounded-md py-1 my-3 px-2">
                                <div className="sm:flex items-center my-5 justify-between">
                                    <div className='flex items-center'>
                                        <img className='h-10 rounded-full' src={author.profileImage} alt="" />
                                        <div className='ml-2'>
                                            <div className='flex items-center'>
                                                <h1 className=' font-bold mr-2 text-white text-md lg:text-xl'>{author.name}</h1>
                                                <span className='text-white'>{author.summary.stories} Stories</span>
                                            </div>

                                            <p className='text-gray-400'>{author.bio.slice(0, 50)}....</p>
                                        </div>
                                    </div>
                                    <div className='flex mt-3 sm:mt-0 items-center ml-12 sm:ml-0'>
                                        <h1 className='text-white'>{author.summary.followers} Followers</h1>
                                        <h1 className='text-blue-500 font-bold ml-5'>Follow</h1>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AuthorProfile;