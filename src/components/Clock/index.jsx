import React, {useState} from 'react';

const Clock = () => {
    const [currentTime] = useState(new Date());

    return (
        <h2>{currentTime.toLocaleTimeString()}</h2>
    );
};

export default Clock;
