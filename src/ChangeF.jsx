import React from 'react';

const ChangeF = ({ setRow, row, index1, index2, itemInner, setRender }) => {
    const [value, setValue] = React.useState(itemInner);
    const handleClick = () => {
        let newMass = row;
        if (value === '0') {
            setValue('1');
            newMass[index1][newMass[index1].length - 1] = '1';
        } else {
            newMass[index1][newMass[index1].length - 1] = '0';
            setValue('0');
        }
        setRow(newMass);
        setRender((prev) => prev + 1);
    };
    return <button onClick={handleClick}>{value}</button>;
};

export default ChangeF;
