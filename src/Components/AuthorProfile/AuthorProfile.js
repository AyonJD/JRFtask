import React, { useState } from 'react';
import { users } from '../../data';
const AuthorProfile = ({ authorData, children }) => {
    return (
        <div className='container mx-auto mb-10'>
            <div className="px-3 py-4 rounded-md">
                <h1 className='text-white text-2xl font-semibold'>{children}</h1>
                {
                    authorData.map((author, index) => {
                        return (
                            <div key={index} className="bg-[#383b4d] rounded-md py-1 my-3 px-2">
                                <div className={`sm:flex items-center justify-between ${children === "Amaging Authors to follwo" ? "my-5" : "my-1"}`}>
                                    <div className={`items-center ${children === "Amaging Authors to follwo" ? "flex" : "md:flex"}`}>
                                        <img className={`${children === "Amaging Authors to follwo" ? "h-10 rounded-full" : "w-1/4 rounded-md mr-2"}`} src={author.profileImage} alt="" />
                                        <div className='ml-2'>
                                            <div className='flex items-center'>
                                                <h1 className=' font-bold mr-2 text-white text-md lg:text-xl'>{author.name}</h1>
                                                <span className='text-white'>{author.summary.stories} Stories</span>
                                            </div>

                                            <p className='text-gray-400'>{author.bio.slice(0, 50)}....</p>
                                        </div>
                                    </div>
                                    <div className={`flex mt-3 sm:mt-0 items-center sm:ml-0 ${children === "Amaging Authors to follwo" ? "ml-12" : "ml-0"}`}>
                                        <h1 className={`text-white ${children === "Amaging Communities to follwo" && "text-sm"} `}>{author.summary.followers} Followers</h1>
                                        <h1 className='text-blue-500 font-bold ml-5 cursor-pointer'>Follow</h1>
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