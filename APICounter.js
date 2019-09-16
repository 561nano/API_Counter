/* Count # of API request */

const cy = new Date().getFullYear();
const cm = new Date().getMonth();
const cdy = new Date().getDate();
const tm = new Date().getTime();

export const APICounter = (cn = 'counterAPI', limit = 0) => {

    //this stores the object as a string on the end user computer
    const storeObject = (cls) => {
        console.log(`Daily API calls for ${cn} : ${cls.data[cls.data.length - 1].counterAPI}`);
        localStorage.setItem(cn, JSON.stringify(cls));
    };

    const isLimit = (cls, limit) => {
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

    if (localStorage.getItem(cn) === null) {
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
        storeObject(cls);
    } else {
        let cls = JSON.parse(localStorage.getItem(cn));
        let clsli = cls.data[cls.data.length - 1];

        // this check if any change but time
        if (parseInt(clsli.counterYear) === cy &&
            parseInt(clsli.counterMonth) === cm &&
            parseInt(clsli.counterDay) === cdy) {
            clsli.counterAPI = parseInt(clsli.counterAPI) + 1;
            storeObject(cls);
            isLimit(cls, limit);
        } else {
            cls.data[cls.data.length] = {
                counterAPI: 1,
                counterYear: cy,
                counterMonth: cm,
                counterDay: cdy,
                counterTime: tm,
            };
            storeObject(cls);
            isLimit(cls, limit);
        }
    }
};

export const rol = (cn = 'counterAPI', type = 'soft') => {
    localStorage.removeItem(cn);
    if (type === 'soft'){
        let cls = {
            data: [
                {
                    counterAPI: 1,
                    counterYear: cy,
                    counterMonth: cm,
                    counterDay: cdy
                }
            ]
        };
        localStorage.setItem(cn,JSON.stringify(cls));
    }
};