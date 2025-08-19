let myDate = new Date();

console.log(myDate.toString());        // Full date & time string  =>  Tue Aug 19 2025 04:20:45 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());    // Only date (no time)      =>  Tue Aug 19 2025
console.log(myDate.toLocaleString());  // Localized date & time    =>  8/19/2025, 4:20:45 AM
console.log(typeof myDate);            // Object type              =>  object

let myCreatedDate = new Date(2023, 0, 23);           //costomized date  => Mon Jan 23 2023
console.log(myCreatedDate.toDateString());


let mydate1 = new Date("2023-01-14")                 // to dd-mm-yy format => 1/14/2023, 12:00:00 AM
console.log(mydate1.toLocaleString())

let mytime= Date.now()
console.log(mytime)
console.log(Math.floor(Date.now()/1000))

let newdate = new Date();

console.log(newdate);              // full date object
console.log(newdate.getMonth());   // month (0-11)
console.log(newdate.getDate());    // day of the month (1-31)
console.log(newdate.getFullYear()); // full year (e.g., 2025)


newdate.toLocaleString('default',{
    weekday:"long",
})