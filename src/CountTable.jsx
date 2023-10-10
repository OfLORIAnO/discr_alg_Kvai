import React, { useRef } from 'react';
import TrBody from './TrBody';
import AppendTable from './AppendTable';
import { calculate, newCalculate } from './utils/helpFunc';

const CountTable = ({ kolvoPerem, row, render, setRender }) => {
    const [newTable, setNewTable] = React.useState([]);
    const [table, setTable] = React.useState([]);
    const [thirdTable, setThirdTable] = React.useState([]);
    React.useEffect(() => {
        let m = row.filter((item) => item[item.length - 1] === '1');
        const obj = {};
        m.forEach((item) => {
            let sum = 0;
            for (let i = 0; i < item.length; i++) {
                if (item[i] === '1') {
                    sum++;
                }
            }
            sum = sum - 1;
            const prev = obj[sum];
            const newItem = item.slice(0, item.length - 1);
            obj[sum] = prev ? [...prev, newItem] : [newItem];
        });
        setTable(obj);
        const calculatedObj = calculate(obj, kolvoPerem);
        const later = newCalculate(calculatedObj, kolvoPerem);
        setNewTable(calculatedObj);
        setThirdTable(later);
    }, [row, render]);

    return (
        <>
            <table>
                {Object.entries(table).map((item, index) => {
                    return (
                        <>
                            <tr>
                                <th className='key'>{item[0]}</th>
                                {item[1].map((itemInner, i) => {
                                    return <td key={i}>{itemInner}</td>;
                                })}
                            </tr>
                        </>
                    );
                })}
            </table>
            <AppendTable row={newTable} kolvoPerem={kolvoPerem} render={render} />
            <AppendTable row={thirdTable} kolvoPerem={kolvoPerem} render={render} />
        </>
    );
};

export default CountTable;
