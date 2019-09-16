# API Counter
Count the request you make. This npm package is nothing more than a counter, it was created out of restrictions on certain free API's limiting 50 request per day.

# Goals
- [x] Count the the number of request and store (cache) in browser.
- [x] Convert counter from simple string to json (json)
- [x] Log the number of request per day (json)
- [x] Warn the developer if they are about to reach their limit
- [x] Warn the developer if they have reached their limit
- [ ] Return the object if requested
    - ```APICounter('counterNameAsString', 50, JSON or yes for current counter object)``` or create a function to public JSON
- [ ] Notify the developer that they have 1 request left
- [ ] Provide the length of time until they can use there API again.
- [ ] Update method from daily counter to specified counter 
    - Hourly, daily, weekly, monthly and yearly

# How to use
All you have todo is add APICounter to your project via ```npm i api_counter```, add it to your ```try and catch``` or where ever you want to count.  
You can have multiple counters, just pass in a name as a ```string```. If you do not pass in a name as the variable it will default to ```'counterAPI'```.  
You can also add a ```limit``` to alert you that you have used 50% or 100% of your daily use. ```APICounter('counterNameAsString', limit as intiger)``` 
```javascript
try {
    const result = fetch(`https://www.apiurl.com/api/search?key=1235`);
    APICounter('mainAPI', 50);
} catch (error) {
    console.log(error);
    APICounter('errorCount')
}
```
