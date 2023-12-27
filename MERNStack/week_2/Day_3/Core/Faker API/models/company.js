const { faker } = require('@faker-js/faker');

const createCompany = () => {
    const newcomp = {
        _id:faker.string.uuid(),
        name:faker.company.name(),
        address:{
          street: faker.location.street(),
          city:  faker.location.city(),
          state: faker.location.state() ,
          zipCode: faker.location.zipCode(),
          country:faker.location.country()
        }
       
    };
    return newcomp;
};
    
const newFakecompany = createCompany();
console.log(newFakecompany);
module.exports=newFakecompany;