const user = {
  name: "manish",
  email: "manya@gmail.com",
  isActive: false,
};

function createUser({ name: string, isPaid: boolean }) {}

// Getting Error cauze of extra parameter passed
// createUser({ name: user.name, isPaid: user.isActive ,email: user.email });

// soln to above problem
let newUser = { name: user.name, isPaid: user.isActive, email: user.email };
createUser(newUser);

// function createCourse():{}{
//     return {}
// }

function createCourse(): { name: string; price: number } {
  return { name: "ReactJs", price: 399 };
}

export {};
