export function anagrams(word) {
    if (word.length <= 1) {
        return word;
    };
    const tmp = [];
    for (let aux of anagrams(word.slice(1))) {
        for (let i in word) {
            tmp.push(`${aux.slice(0, i)}${word.slice(0, 1)}${aux.slice(i)}`);
        }
    }
    return tmp;
}

export function posibilites(text) {
    const fac = n => {
        if (n === 0) return 0;
        for (let i = n - 1; i > 0; i--) {
            n *= i;
        }
        return n;
    }
    return fac(text.length);
}

export function repeats(text) {

    const sum = list => {
        let count = 0;
        for (let x of list) {
            count += x;
        }
        return count;
    }

    const fac = n => {
        if (n === 0) return 0;
        for (let i = n - 1; i > 0; i--) {
            n *= i;
        }
        return n;
    }

    const obj = {};
    for (let i in text) {
        let char = text[i];
        obj[char] = 0;
        [...text].forEach(currentChar => {
            if (currentChar === char) {
                obj[char] += 1;
            }
        });
        if (obj[char] === 1) {
            delete obj[char];
        }
    }

    
    const lis = Object.values(obj);

    const n = text.length;
    const k = sum(lis);

    if (k < 1) return 0; 
    if (n === k) return fac(n);

    const top = fac(n);
    const bottom = (fac(k)) * (fac(n - k))

    return (
        top / bottom
    );
}