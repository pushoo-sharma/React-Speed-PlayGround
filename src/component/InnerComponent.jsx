// Import React and useMemo hook from react module
import React, { useMemo, useEffect } from 'react';

// Import large-file.json data
import data from "../file/large-file.json";

// Heavy computational task to get the length of data
function getDataLength(data) {
    console.log("Rendering Heavy Computational Task")
    let count = 0;
    for (let i = 0; i < data.length; i++) count++;
    return count;
}

// Inner component
const InnerComponent = (props) => {
    
    // Attach event listener for datalog loaded event using useEffect hook
    useEffect(() => {
        const handleDatalog = () => {
            console.log('Datalog loaded');
        };

        window.addEventListener('load', handleDatalog);

        // Cleanup function to remove the event listener when component unmounts
        return () => {
            window.removeEventListener('load', handleDatalog);
        };
    }, []);
    
    // Memoize the heavy computation to avoid re-executing it on every render
    const totalData = useMemo(() => getDataLength(data), [] );

    return (
        <div>
            <h2>Inner Component</h2>
            <h3>Total Entries : {totalData}</h3>
        </div>
    );
};

export default InnerComponent;
