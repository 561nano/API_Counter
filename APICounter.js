/* Count # of API request */

const cy = new Date().getFullYear();
const cm = new Date().getMonth();
const cdy = new Date().getDate();
const tm = new Date().getTime();
let cls;

const getCLS = (cn = 'mainCounter', giveback = 0) => {
    cls = JSON.parse(localStorage.getItem(cn));
    if (giveback === 1) {return cls}; 
};

const storeObject = (cn = 'mainCounter', cls) => {
    console.log(`Daily API calls for ${cn} : ${cls.data[cls.data.length - 1].counterAPI}`);
    localStorage.setItem(cn, JSON.stringify(cls));
};

// rest counter hard =nothing left behind or soft = reset to daily
const resetCounter = (cn = 'mainCounter', type = 'soft') => {
    localStorage.removeItem(cn);
    if (type === 'soft'){
        let cls = {
            data: [
                {
                    counterAPI: 1,
                    counterYear: cy,
                    counterMonth: cm,
                    counterDay: cdy,
                    counterTime: tm
                }
            ]
        };
        storeObject(cn, cls);
    }
};

// checks the limit of counter
// TODO add function to get the current cls so that it's not required to be passed in.
const isLimit = (cn = 'mainCounter', cls, limit) => {
    if (Math.ceil(parseInt(limit)) > 0) {
        if (parseInt(cls.data[cls.data.length - 1].counterAPI) === parseInt(limit)) {
            alert(`💔 You have reached your limit for ${cn} 💔`);
        } else if (parseInt(limit) === parseInt(limit) -1) {
            alert(`❗😮❗ You have one request before your limit: ${cn} ❗😮❗`)
        } else if (Math.ceil((parseInt(limit)) / 2) >= limit) {
            alert(`❗ You have reached more than half of your limit for ${cn} ❗`)
        }
    }
};

const APICounter = (cn = 'mainCounter', limit = 0) => {
    if (localStorage.getItem(cn) === null) {
        resetCounter(cn);
    } else {
        getCLS(cn);
        let clsli = cls.data[cls.data.length - 1];

        // this check if any change but time
        if (parseInt(clsli.counterYear) === cy &&
            parseInt(clsli.counterMonth) === cm &&
            parseInt(clsli.counterDay) === cdy) {
            clsli.counterAPI = parseInt(clsli.counterAPI) + 1;
            storeObject(cn, cls);
            isLimit(cn, cls, limit);
        } else {
            cls.data[cls.data.length] = {
                counterAPI: 1,
                counterYear: cy,
                counterMonth: cm,
                counterDay: cdy,
                counterTime: tm,
            };
            storeObject(cn, cls);
            isLimit(cn, cls, limit);
        }
    }
};
