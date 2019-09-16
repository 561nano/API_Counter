/* Count # of API request

* cls = current local storage
* cy = current year
* cm = current month
* cdy = current day
* cn = counter name
* clsli = current local storage last item - meaning the last object in the array
* */

export const APICounter = (cn = 'counterAPI') => {
    const cy = new Date().getFullYear();
    const cm = new Date().getMonth();
    const cdy = new Date().getDate();

    //this stores the object as a string on the end user computer
    const storeObject = (cls) => {
        console.log(`Daily API calls for ${cn} : ${cls.data[cls.data.length-1].counterAPI}`);
        localStorage.setItem(cn, JSON.stringify(cls));
    };

    if (localStorage.getItem(cn) === null) {
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
        storeObject(cls);
    } else {
        let cls = JSON.parse(localStorage.getItem(cn));
        let clsli = cls.data[cls.data.length - 1];

        if (parseInt(clsli.counterYear) === cy &&
            parseInt(clsli.counterMonth) === cm &&
            parseInt(clsli.counterDay) === cdy) {
            clsli.counterAPI = parseInt(clsli.counterAPI) + 1;
            storeObject(cls);
        } else {
            cls.data[cls.data.length] = {
                counterAPI: 1,
                counterYear: cy,
                counterMonth: cm,
                counterDay: cdy,
            };
            storeObject(cls);
        }
    }
};

APICounter();