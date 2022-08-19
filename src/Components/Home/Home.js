import React from 'react';
import AuthorProfile from '../AuthorProfile/AuthorProfile';
import FixedHeightStory from '../StoryCards/FixedHeightStory';
import LongStory from '../StoryCards/LongStory';
import VariableheightStory from '../StoryCards/VariableheightStory';

const Home = () => {
    return (
        <div className='px-4 md:px-0'>
            <FixedHeightStory />
            <VariableheightStory />
            <AuthorProfile />
            <LongStory />
        </div>
    );
};

export default Home;