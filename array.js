var age=[10,20,30,40];
console.log("Age before modification =" +age);
console.log("Using a for() loop");
for(var x=0;x<age.length;x++){
    console.log("age["+x+"]="+age[x])
}

console.log("")
age[2]=47;
age[4]=12;
console.log(age)
age.push(32)
console.log("deleting using splice(),(age.splice(0,1) )")
age.splice(0,1) 

console.log("Age after modification =" +age);
console.log("");
console.log("Deleting using delete and accessing Using a forEach() Mtd,(delete age[2]);") ;
delete age[2];
// console.log(age)

age.forEach(function(ag,i){
    console.log("age["+i+"]=",ag)
})


    

