let user = {
    name:"Vidya",
    age:18,
    sizes:{
        width:10,
        height:12
    }
};

user1=user;
user2 = Object.assign({},user);

console.log(user===user1)
console.log(user2===user)

user1.name="Sagar"

user2.name="Reddy"
console.log(user.name)