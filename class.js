class Person{
    firstname="Nakiboneka";
    lastname="Mary";
    age=22;
    display(){
        // console.log("First name="+this.firstname,"Second name="+this.lastname)
        console.log(" The person's lastname = " + this.lastname + ", firstname = " + this.firstname);


    }
}
// object of Person class
var P=new Person;
P.age=30;
P.firstname="Mulindwa";
P.lastname="Akram";
// console.log(P)
P.display();