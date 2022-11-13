function getUpper(val: string) {
  return val.toUpperCase();
}

// number example of a function
function addTwo(num: number): number {
  return num + 2;
  // return 'hello'
}

// case
function getValue(myVal: number) {
  if (myVal > 30) {
    return false;
  }
  return "200 oK";
}

// arrow function
const getHello = (S: string): string => {
  return "";
};

function signUpUser(name: string, email: string, isPaid: boolean) {}

function loginUser(name: string, email: string, isPaid: boolean = false) {}

const consoleError = (errMsg: string): void => {
  console.log("Error", errMsg);
};

const handleError = (errmsg: string): never => {
  throw new Error(errmsg);
};

const heros = ["thor", "superman", "ironman"];

heros.map((hero): string => `hero is ${hero}`);

addTwo(2);

getUpper("4");

signUpUser("manish", "manish198@dev.com", true);

loginUser("manya", "m.m@dev.com");
export {};
