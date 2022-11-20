"use strict";
class User {
    constructor(name, email) {
        this.city = "";
        this.name = name;
        this.email = email;
        // this.city  // allowed to access here
    }
}
const hitesh = new User('history', 'h@h.com');
// hitesh.city  // not allowed to access private outside class
// another syntax
class AnotherUser {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this._courseCount = 1;
        this.city = "";
    }
    deleteToken() {
        console.log('Token is deleted');
    }
    get getAppleName() {
        return `apple${this.email}`;
    }
    get getCourseCount() {
        return this._courseCount;
    }
    set setCourseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('course count must be at least 1');
        }
        this._courseCount = courseNum;
    }
}
