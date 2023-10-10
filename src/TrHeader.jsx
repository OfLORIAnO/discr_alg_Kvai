import React from 'react';

// eslint-disable-next-line react/prop-types
const TrHeader = ({ header }) => {
    return (
        <tr>
            {header && header.map((item, index) => <th key={index}>{item}</th>)}
            <th>F</th>
        </tr>
    );
};

export default TrHeader;
