const express = require("express");
const app = express();
const port = 8000;
const {faker} = require('@faker-js/faker');


const user = () => {
    const newUser = {
        password:faker.internet.password(),
        email:faker.internet.email(),
        phoneNumber:phone.phoneNumber(),
        lastName:faker.name.lastName(),
        firstName:faker.name.firstName(),
        _id:faker.datatype.uuid()
    };
    return newUser;
};



const company = () => {
    const newCompany= {
        id:faker.datatype.uuid(),
        name:faker.commerce.companyName(),
        address:[
            city=faker.address.city(),
            street=faker.address.street(),
            state=faker.address.state(),
            zipcode=faker.address.zipCode(),
            country=faker.address.country(),
        ]
    }
}



const newUserPage = user();
const newCompanyPage = company();

app.get("/users/new",(req,res)=> {
    res.json({newUserPage})
})

app.get("/api/companies/new",(req,res)=> {
    res.json({newCompanyPage})
})

app.get("/api/user/company",(req,res)=> {
    res.json({newCompanyPage} + {newUserPage})
})




app.listen(port, () => console.log(`Running on port ${port}!`));