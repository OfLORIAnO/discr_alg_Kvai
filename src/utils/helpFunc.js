export const addZero = (str, len) => {
    if (str.length < len) {
        for (let i = 0; i <= len - str.length; i++) {
            str = '0' + str;
        }
    }
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(str[i]);
    }
    arr.push('0');
    return arr;
};
export const calculate = (obj, kolvoPerem) => {
    const set = new Set();
    const f = Object.entries(obj);
    if (f.length > 1) {
        for (let i = 0; i < f.length - 1; i++) {
            // По всему мапу - 1
            for (let j = 0; j < f[i][1].length; j++) {
                // по всем массивам мапа
                const m1 = f[i][1][j];
                for (let k = 0; k < f[i + 1][1].length; k++) {
                    // по всем значениям следующего массива
                    const m2 = f[i + 1][1][k];
                    //Дальше ряды
                    let conunter = 0;
                    let newStr = '';
                    let flag = true;
                    for (let l = 0; l < m1.length; l++) {
                        const char1 = m1[l];
                        const char2 = m2[l];
                        if (char1 === char2 && conunter <= 1) {
                            newStr += m1[l];
                        } else if (char1 !== char2) {
                            conunter += 1;
                            if (conunter > 1) {
                                flag = false;
                                break;
                            }
                            newStr += '*';
                        }
                    }
                    if (flag && newStr.length === Number(kolvoPerem)) {
                        set.add(newStr);
                    }
                }
            }
        }
    }
    return Array.from(set);
};

const copyToNewMassive = (obj) => {
    const newMass = [];
    for (let i = 0; i < obj.length; i++) {
        newMass.push(obj[i]);
    }
    return newMass;
};

export const newCalculate = (obj, kolvoPerem) => {
    const newMass = copyToNewMassive(obj);
    const ans = recurceCalculate(newMass, Number(kolvoPerem));
    return ans;
};

const checkMask = (prevSet, newArr) => {
    const set = new Set();
    for (let i = 0; i < prevSet.length; i++) {
        const setItem = prevSet[i];
        for (let j = 0; j < newArr.length; j++) {
            const arrItem = newArr[j];
            let flag = false;
            let counter = 0;
            for (let k = 0; k < setItem.length; k++) {
                const char1 = setItem[k];
                const char2 = arrItem[k];
                if (char1 === '*' && counter <= 1) {
                    counter++;
                    flag = true;
                } else if (char1 === char2) {
                    flag = true;
                } else if (char1 != '*' && char1 !== char2) {
                    flag = false;
                    break;
                } else {
                    break;
                }
            }
            if (!flag) {
                set.add(arrItem);
            }
        }
    }
    let lastArr = Array.from(set);
    return [lastArr, new Set(prevSet)];
};

export const recurceCalculate = (obj, kolvoPerem) => {
    let newMass = copyToNewMassive(obj);
    let newNewMass = new Set();
    let flag = true;
    let counnt = 0;
    while (flag === true && counnt < 10000) {
        counnt++;
        flag = false;
        for (let i = 0; i < newMass.length - 1; i++) {
            const item1 = newMass[i];
            for (let j = i + 1; j < newMass.length; j++) {
                const item2 = newMass[j];
                let counter = 0;
                let flag2 = false;
                let newStr = '';
                for (let k = 0; k < item1.length; k++) {
                    const num1 = item1[k];
                    const num2 = item2[k];
                    if (num1 !== num2 && num1 !== '*' && num2 !== '*' && counter <= 1) {
                        counter += 1;
                        newStr += '*';
                        flag = true;
                        flag2 = true;
                    } else if (num1 === num2) {
                        newStr += num1;
                    }
                    if (counter > 1) {
                        break;
                    }
                }
                if (flag2 && newStr.length === kolvoPerem) {
                    newNewMass.add(newStr);
                }
            }
        }
        [newMass, newNewMass] = checkMask(Array.from(newNewMass), newMass);
        console.log('chackMask', newMass, newNewMass);
    }
    return Array.from(newNewMass).concat(newMass);
};

export const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];
