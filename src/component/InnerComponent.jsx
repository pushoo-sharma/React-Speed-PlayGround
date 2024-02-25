import React, { useMemo } from 'react';

import data from "../file/large-file.json";

// heavy computational task
function getDataLength(data) {
    console.log("Rendering Heavy Computational Task")
    let count = 0;
    for( let i = 0; i < data.length; i++ ) count++;
    return count;
}

// Inner component
const InnerComponent = (props) => {
    
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
