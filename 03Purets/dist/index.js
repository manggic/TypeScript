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
    constructor(name, email, userId) {
        this.name = name;
        this.email = email;
        this.userId = userId;
        this.city = "";
    }
}
