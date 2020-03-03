let myDate = function (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.getDay = function () {
        return this.day
    };
    this.getYear = function () {
        return this.year;
    };
    this.getMonth = function () {
        return this.month;
    };
    this.setDay = function (day) {
        this.day = day;
    };
    this.setYear = function (year) {
        this.year = year;
    };
    this.setMonth = function (month) {
        this.month = month;
    };
    this.setDate=function(day,month,year){
        this.day=day;
        this.month=month;
        this.year=year;
    };
    this.toString=function(day,month,year){
      alert(day+"/"+month+"/"+year);
    }
};
let date = new myDate(2,2,2007);
let day=date.getDay();
let month=date.getMonth();
let year=date.getYear();
alert(day+"/"+month+"/"+year);
date.setDay(10);
date.setMonth(10);
date.setYear(2019);
day=date.getDay();
month=date.getMonth();
year=date.getYear();
alert(day+"/"+month+"/"+year);
date.setDate(3,3,2020);
day=date.getDay();
month=date.getMonth();
year=date.getYear();
date.toString(day,month,year);
