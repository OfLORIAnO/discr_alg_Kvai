import React from 'react';

const AppendTable = ({ kolvoPerem, render, row }) => {
    return (
        <table>
            {row.map((item) => {
                return (
                    <tr key={item}>
                        <td>{item}</td>
                    </tr>
                );
            })}
        </table>
    );
};

export default AppendTable;
