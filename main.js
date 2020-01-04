// var userOne = {
// email : 'haiadnok@gmail.com',
// name:'haiadnok',
// login(){
//     console.log(this.email, "has loged in")
// },
// logout(){
//     console.log(this.email,"has loged out");
// }
// };
// console.log(userOne); 


class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
    }
    login(){
        console.log(this.email)
    }
}

var userone = new User('konda@gmail.com', 'haiadnok');
var usertwo = new User('haiadnok@gmail.com', 'konda');
console.log(userone);
console.log(usertwo);