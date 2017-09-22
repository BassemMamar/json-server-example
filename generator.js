 /**
  * For more details how to use faker.js
  * https://github.com/Marak/faker.js
  */
 module.exports = () => {
     const data = { users: [] }
         // Create 1000 users
     for (let i = 0; i < 1000; i++) {
         data.users.push({ id: i, name: `user${i}` })
     }
     return data
 }