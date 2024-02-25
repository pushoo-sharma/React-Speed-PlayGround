import React, { useState, useEffect } from 'react';

import data from "../file/large-file.json";


function getDataLength(data) {
    let count = 0;
    for( let i = 0; i < data.length; i++ ) count++;
    return count;
}



// Inner component
const InnerComponent = (props) => {
    
    const totalData = getDataLength(data);

    return (
        <div>
            <h2>Inner Component</h2>
            <h3>Total Entries : {totalData}</h3>
        </div>
    );
};
  
export default InnerComponent;
