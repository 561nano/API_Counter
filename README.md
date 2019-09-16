# API Counter
If you have a daily limit on the number of request you can make, this will let you know how many request you have made.

# Goals
- [x] Count the the number of request and store (cache) in browser.
- [x] Convert counter from simple string to json (json)
- [x] Log the number of request per day (json)
- [x] Warn the developer if they are about to reach their limit
- [x] Warn the developer if they have reached their limit
- [ ] Notify the developer that they have 1 request left
- [ ] Provide the length of time until they can use there API again.
- [ ] Update method from daily counter to specified counter 
    - Hourly, daily, weekly, monthly and yearly

# How to use
All you have todo is add APICounter to your project via ```npm i api_counter```, add it to your try and catch or where ever you want to count a variable.
You can have multiple counters, just pass in a name as a string. If you do not pass in a name as the variable it will default to ```'counterAPI'```
```javascript
try {
    const result = fetch(`https://www.food2fork.com/api/search?key=1235`);
    APICounter('food2forkAPI', 50);
} catch (error) {
    console.log(error);
    APICounter('errorCount')
}
```
