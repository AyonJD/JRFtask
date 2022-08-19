import React from 'react';
import AuthorProfile from '../AuthorProfile/AuthorProfile';
import FixedHeightStory from '../StoryCards/FixedHeightStory';
import VariableheightStory from '../StoryCards/VariableheightStory';

const Home = () => {
    return (
        <div>
            <FixedHeightStory />
            <VariableheightStory />
            <AuthorProfile />
        </div>
    );
};

export default Home;