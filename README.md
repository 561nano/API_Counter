# API Counter
Count the request you make. This npm package is nothing more than a counter.  
This package was created out of restrictions on certain free API's limiting 50 request per day.   

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)  

# Goals
- [x] Count the the number of request and store (cache) in browser.
- [x] Convert counter from simple string to json (json)
- [x] Log the number of request per day (json)
- [x] Warn the developer if they are about to reach their limit
- [x] Warn the developer if they have reached their limit
- [x] Notify the developer that they have 1 request left
- [x] Notify the developer that they have gone over there request
- [x] The ability to reset a counter
- [x] The ability to remove or reset one counter with out ```localStorage.clear()```
    * ```restCounter('counterAPI','soft')``` soft to reset to 0 or hard to erase counter
- [ ] Return the object if requested
    - ```APICounter('counterNameAsString', 50, JSON or yes for current counter object)``` or create a function to public JSON
- [ ] The ability to choice how to receive alert by ```console.log```, ```alert``` or ```return counter```
- [ ] Create a mini version of this package
- [ ] add the ability to log every add and request beside hard reset
- [ ] Provide the length of time until they can use there API again.
- [ ] The current local storage size
- [ ] Update method from daily counter to specified counter 
    - Hourly, daily, weekly, monthly and yearly

# How to use APICounter()
All you have todo is add ```APICounter()``` to your project via ```npm i api_counter```, add it to your ```try and catch``` or where ever you want to count.  
You can have multiple counters, just pass in a name as a ```'string'```. If you do not pass in a name as the variable it will default to ```'mainCounter'```.  
You can also add a ```limit``` to alert you that you have used 50% or 100% of your daily use. ```APICounter('counterNameAsString', limit as intiger)``` 
```javascript
try {
    const result = fetch(`https://www.apiurl.com/api/search?key=1235`);
    APICounter('mainCounter', 50);
} catch (error) {
    console.log(error);
    APICounter('errorCount')
}
```

# understanding the acronyms and format
* Function Format = cn , cls , limit, type
* cn = counter name
* cls = current local storage
* limit = at what count do you want to be warn by
* type = soft or hard reset
* cy = current year
* cm = current month
* cdy = current day
* clsli = current local storage last item - meaning the last object in the array
* ldt = last date
* tm = time

# Data structure of JSON "file"
```javascript
let cls = {
  data: [
    {
      counterAPI: 13,
      counterYear: 2022,
      counterMonth: 12,
      counterDay: 24,
      counterTime: 1568681773241
    },
    {
      counterAPI: 48,
      counterYear: 2022,
      counterMonth: 12,
      counterDay: 25,
      counterTime: 1568681901168
    }
  ]
};
```

##### Pull request are recommend and any features you want let's collaborate
