interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?:string;
  startTrail: () => string;
  getCoupon: (couponName: string) => number;
}

let user: User = {
  dbId: 2333,
  email: "h@h.com",
  userId: 1234,
  startTrail: () => "",
  getCoupon: (couponName: string) => 123,
};

user.getCoupon('hitesh');

export {};
