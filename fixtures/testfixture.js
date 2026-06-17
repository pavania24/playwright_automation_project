import { test, expect } from '@playwright/test';

export const customtest = test.extend({
  testdataForregistration: {
    firstname: "Abcd",
    lastname: "Xyz",
    city: "San Jose",
    address: "address1",
    state: "California",
    zipcode: "12345",
    phonenumber: "12345",
    ssn: "12345",
    username: "Testers1",
    password: "123456",
    confirmpassword: "123456"
  }
});

export{expect};

