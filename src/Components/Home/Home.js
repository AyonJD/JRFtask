import React, { useState } from 'react';
import { communities, users } from '../../data';
import AuthorProfile from '../AuthorProfile/AuthorProfile';
import FixedHeightStory from '../StoryCards/FixedHeightStory';
import LongStory from '../StoryCards/LongStory';
import ShortStory from '../StoryCards/ShortStory';
import VariableheightStory from '../StoryCards/VariableheightStory';

const Home = () => {
    const [authorData, setAuthorData] = useState(users);
    const [comminutyData, setComminutyData] = useState(communities);
    return (
        <div className='px-4 md:px-0'>
            <FixedHeightStory />
            <VariableheightStory />
            <AuthorProfile authorData={authorData}>Amaging Authors to follwo
            </AuthorProfile>
            <LongStory />
            <ShortStory />
            <AuthorProfile authorData={comminutyData}>Amaging Communities to follwo
            </AuthorProfile>
        </div>
    );
};

export default Home;