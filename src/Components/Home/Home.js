import React from 'react';
import FixedHeightStory from '../StoryCards/FixedHeightStory';
import VariableheightStory from '../StoryCards/VariableheightStory';

const Home = () => {
    return (
        <div>
            <FixedHeightStory />
            <VariableheightStory />
        </div>
    );
};

export default Home;