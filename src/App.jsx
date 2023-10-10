import { useEffect, useState } from 'react';
import './App.css';
import { addZero, alphabet } from './utils/helpFunc';
import TrHeader from './TrHeader';
import TrBody from './TrBody';
import CountTable from './CountTable';

function App() {
    const [render, setRender] = useState(0);
    const [header, setHeader] = useState([]);
    const [kolvoPerem, setKolvoPerem] = useState(3);
    const [row, setRow] = useState([]);

    useEffect(() => {
        const arr = [];
        for (let i = 0; i < 2 ** kolvoPerem; i++) {
            arr.push(addZero(i.toString(2), kolvoPerem));
        }
        setRow(arr);
    }, [kolvoPerem]);

    const renderTableHeader = () => {};
    useEffect(() => {
        renderTableHeader();
        const m = [];
        for (let i = 0; i < kolvoPerem; i++) {
            m.push(alphabet[i]);
        }
        setHeader(m);
    }, [kolvoPerem]);
    return (
        <>
            <p>Построение сокращенной ДНФ методом Квайна-МакКласки</p>
            <div className={'App'}>
                <input
                    type='number'
                    value={kolvoPerem}
                    onChange={(e) => setKolvoPerem(e.target.value)}
                />
                <p></p>
                <div className='flex'>
                    <table>
                        <thead>
                            <TrHeader header={header} setHeader={setHeader} />
                        </thead>
                        <tbody>
                            <TrBody
                                row={row}
                                setRow={setRow}
                                kolvoPerem={kolvoPerem}
                                setRender={setRender}
                            />
                        </tbody>
                    </table>
                    <CountTable
                        row={row}
                        kolvoPerem={kolvoPerem}
                        render={render}
                        setRender={setRender}
                    />
                </div>
            </div>
            <p>Сделано Руденко Вячеславом. Группа 20121</p>
        </>
    );
}

export default App;
