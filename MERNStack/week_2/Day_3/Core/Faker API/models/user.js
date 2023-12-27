
const { faker } = require('@faker-js/faker');

const createUser = () => {
    const newuser = {
     
        password:faker.internet.password(),
        email:faker.internet.email(),
        phoneNumber:faker.phone.number(),
        lastName:faker.person.lastName(),
        firstName:faker.person.firstName(),
        _id:faker.string.uuid(),
    };
    return newuser;
};
    
const newFakeUser = createUser();
console.log(newFakeUser);



  module.exports = newFakeUser ;