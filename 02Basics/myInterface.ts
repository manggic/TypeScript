interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //startTrial:() => string
  startTrail(): string;
  getCoupon(couponName: string): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "nodal" | "agent";
}

const Man: Admin = {
  role: "nodal",
  githubToken: "abcde",
  dbId: 123,
  email: "m.m@gmail.com",
  userId: 555,
  startTrail: () => "trail",
  getCoupon: (name: "hitesh10") => 100,
};

const hitesh: User = {
  githubToken: "abcde",
  dbId: 123,
  email: "m.m@gmail.com",
  userId: 555,
  startTrail: () => "trail",
  getCoupon: (name: "hitesh10") => 100,
};

export {};
