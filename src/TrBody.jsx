import React from 'react';
import ChangeF from './ChangeF';

const TrBody = ({ row, kolvoPerem, setRow, setRender, last = true }) => {
    if (!row) return <div></div>;
    else {
        return (
            <>
                {row.map((item, index) => (
                    <tr key={index}>
                        {item.map((itemInner, index2) => {
                            if (kolvoPerem == index2 && last) {
                                return (
                                    <ChangeF
                                        key={index2}
                                        setRow={setRow}
                                        row={row}
                                        index1={index}
                                        index2={index2}
                                        itemInner={itemInner}
                                        setRender={setRender}
                                    />
                                );
                            }
                            if (kolvoPerem == index2 && !last) {
                                return <></>;
                            }
                            return (
                                <>
                                    <td key={index2}>{itemInner}</td>
                                </>
                            );
                        })}
                    </tr>
                ))}
            </>
        );
    }
};

export default TrBody;
