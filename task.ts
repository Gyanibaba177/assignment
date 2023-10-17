let name:string="eric"
console.log("hello eric would you like to to learn some python today")
// q3
let name1="ali"
console.log("hello "+ name.toUpperCase +" where are you")
console.log("hello "+name.toLowerCase+" where are you")
console.log("hello "+name+" where are you")
//q4
console.log("gautam buddha said: if you light the lamp for other it will also lighten your path")
//q5
let famous_person="gautam buddha "
let message="if you light the lamp for other it will also lighten your path"
console.log(famous_person+" has said "+message)
//q6
let name2="hlo \n i am \t here"
console.log(name2.trim())
//q7
console.log(5+3)
console.log(4*2)
console.log(16/2)
console.log(16-8)
//q8
console.log(5+3)
console.log(4*2)
console.log(16/2)
console.log(16-8)
//q9
let fav=7
let favnum=`my fav num is ${fav}`
console.log(favnum)
//q10
//huzaifa
//12/8/2023
let fav1=7
let favnum1=`my fav num is ${fav1}`
console.log(favnum1)
//huzaifa
//12/8/2023
console.log(5+3)
console.log(4*2)
console.log(16/2)
console.log(16-8)
//q11
let names=["ali","ahmad","mozam"]
console.log(names[0])
console.log(names[1])
console.log(names[2])
//q12
console.log("hello "+names[0]+" where are you")
console.log("hello "+names[1]+" where are you")
console.log("hello "+names[2]+" where are you")
//q13
let fav_name=["car","bike","bus"]
console.log("i would like to use "+fav_name[1]+" as a transport")
//q14
let names_invite=["ali","ahmad","mozam"];
for (let i=0;i<3;i++){
    console.log(`i invited ${names_invite[i]} to party `)
}
//q15
console.log("ali is not available")
let new_names=names_invite.splice(0,1,"jaffar")
console.log(names_invite)
for (let i=0;i<3;i++){
    console.log(`i invited ${names_invite[i]} to party `)
}

//q16
names_invite.splice(0,0,"sohaib")
names_invite.splice(1,0,"haris")
names_invite.push("salman")
for (let i=0;i<3;i++){
    console.log(`i invited ${names_invite[i]} to party `)
}

//q17
console.log("i can invite only two peoles")
names_invite.splice(1,3)
for (let i=0;i<2;i++){
    console.log(`i invited ${names_invite[i]} to party `)
}
//q18
let places:string[]= ["havana","havai","rio","maldives"]
//  form create a new array copies
//let e =Array.from(places);

//  sorted function 
function sortalphabet(location:string[],order:number):string[]{
   if(order===0){
    return [...location].sort() 

   }
else{
    return [...location].reverse();
}
    }
    

 
// without sorting alphabet
console.log(places)
//  with sort
  console.log(sortalphabet(places,0))
//   Show that your array is still in its original order by printing it.
 console.log(places)
//  reverse alphabet
let e=sortalphabet(places,0).reverse(); 
console.log(e)
//  print original array 
console.log(places)

// 

console.log(Object.keys(e).reverse())
console.log(Object.keys(places))
//q19
console.log("i invited three peoples to party")
//q20
let fav_rivers=["darling","nile","ganga","amazon"]
console.log(`${fav_rivers} are my fav rivers`)
//q21
//let fav_rivers=["darling","ganga","nile","amazon"]

//q23
let marks:number=95
console.log(marks<=90 && "decide later")
console.log(marks==85-90 && "A")
console.log(marks==80-85 &&"decide later")
console.log(marks==75-80 && "B")
console.log(marks==70-75 && "decide later")
console.log(marks==65-70 && "C")
console.log(marks==60-65 && "decide later")
console.log(marks==55-60 && "D")
console.log(marks==50-55 && "decide later")
console.log(marks==45-50 && "E")
console.log(marks==40-45 && "fail")
//q24

let pass:boolean=true
if (pass==true){console.log("it is true")}
else (console.log("it is false"))
let  mark:number=90;

console.log(mark>=90?"A+": "Decide Later")

console.log(mark>=85 && mark==90?"A+": "B")

let vhicle:string="car"
console.log(vhicle==="car"||vhicle==="cycle"?true:false)

const arr:Array<Number>=[1,2,3,4]

console.log(arr.includes(4,3)?"find":"Not found");

console.log(arr.includes(5)?"find":"Not found");
//q25
let alien_color="red"
if (alien_color=="red"){
    console.log("players just earned 5 points")

}
else{}
//q26
 if(alien_color=="green"){
    console.log("players just earned 5 points")

}
else{console.log("player just earned 10 points")}

if (alien_color=="red"){
    console.log("players just earned 5 points")

}
else{console.log("player just earned 10 points")}
//q27
if(alien_color=="green"){
    console.log("players just earned 5 points")

}
else if(alien_color=="yellow")
{
    console.log("players just earned 10 points")

}
else if(alien_color=="red"){
    console.log("players just earned 15 points")

}
//q28
let age=24
if (age<2){
    console.log("the person is baby")
}
else if(age>2 && age<4){
    console.log("the person is toddler")
}
else if(age>=4 && age<13){
    console.log("the person is kid")
}
else if(age>20 && age<65){
    console.log("the person is adult")
}
else if(age>65){
    console.log("the person is elder")
}
//q29
let fav_fruit=["banana","apple","grapes"]
if (fav_fruit[0]==="banana"){
    console.log("i dont like this banana")
}
else if(fav_fruit[1]==="apple"){
    console.log("i really like apples")
}
else if(fav_fruit[2]==="grapes")[
    console.log("i dont like grapes")
]
//q30
let username:any=["admin","huzaifa","ali"]
for(let i of username)

if(i==="admin")
{
console.log(`Hello ${i}, would you like to see a status report?`)
break;
}
else{
    continue; // not print this message
    console.log(`Hello ${i}, thank you for logging in again.`)

}
//q31
username=[]
let empty:any=[]
if (username==empty){
    console.log("we need to find some users")
}
else{
    console.log("the users are here")
}

//q32
let currentuser=["admin","root ","manager","ali ","mozam"]
let newuser=["admin","root","khan","zia","mota"]
if(currentuser[0]==newuser[0]){
    console.log("enter new users")
}
else {
    console.log("username is available")
}

if(currentuser[1]==newuser[1]){
    console.log("enter new users")
}
else {
    console.log("username is available")
}

if(currentuser[2]==newuser[2]){
    console.log("enter new users")
}
else {
    console.log("username is available")
}


if(currentuser[3]==newuser[3]){
    console.log("enter new users")
}
else {
    console.log("username is available")
}
//q33
let ordinal_number:number[]=[1,2,3,4,5,6,7,8,9,];
 let suffix:string[]=new Array(9).fill("th");


 console.log(ordinal_number.join("th\t"))
console.log("----------------------------")
//   by loop 
for(let i=0; i<ordinal_number.length;i++){

    if(ordinal_number[i]>0 && ordinal_number[i]<10)
    
    console.log(`${ordinal_number[i]}th`)
}
//q34
const pizza_names:Array<string>=["Greek Pizza","Detroit Pizza","Neapolitan Pizza"] 
//  print names of pizza list
pizza_names.map((value)=>(console.log(value)))
const pizza_list= pizza_names.map((value)=>(value=="Greek Pizza" ?`i like ${value}` :value))
console.log(pizza_list);

console.log("🍕 How Much you Like pizza 🍕 ")
console.log("You like Greek pizza 🍕 ")
console.log("I really love pizza 🍕❤️")

//q35
let animals=["dog","cat","goat"]
for(let i of animals){{
    console.log(i)
}if (i=="dog"){
    console.log("is a graet pet")
}}

//q36
let makeshirt=function(size:number,print:string ){{
    console.log(size,print)
    
}}
console.log(makeshirt(12,"ali"))

//q37
let sizechange=function(message:"ali is good",mediumsize:"13",largesize:"14"){
    console.log(message,mediumsize,largesize)
}
console.log(sizechange("ali is good","13","14"))

//q38
function describe_city(city:string,country:string){
    return city+" is in "+country
}
console.log(describe_city("karachi","pakistan"))
console.log(describe_city("tel aviv","israel"))

//q39
function city_country (city1:string,city2:string,city3:string,country1:string){

    
    return `${city1} ${country1}`
    }

    //  first call 
    const citynames=city_country("Lahore","Sahiwal","Karachi","Pakistan")
    console.log(citynames);
   //  second call 
   console.log(city_country("Jeddah","Madina","Taif","Saudia Arabia")) 

//q40
function make_album(name:string,title:string,tracks?:number){
    return `${name},${title},${tracks}`
}
console.log(make_album("adele","set fire to rain",12))

//q41
let magician_names:string[]=["ali","ahmad","taha","mano"]
function show_magician(magician_names:string[]){
    for(let i=0;i<magician_names.length;i++){
        console.log(magician_names[i])
    }
}
show_magician(magician_names)

//q42
function make_great(magician_names:string[],greet:string){
    for(let i=0;i<magician_names.length;i++){
        console.log(magician_names[i]+greet)
    }
}
make_great(magician_names," you are great")

//q43
const greet:string[]=Array(3)
greet.fill("greet")
const m_names:string[]= ["Merlin","Teller","Ricky"]
function show_magicians(){

   const addtwo= m_names.map((value,index)=>(
        `${value}  ${greet[index]}  `
    ))
    return addtwo
}

console.log(show_magicians())
//q44
let sandwitch:string[]=["egg sandwitch","chicken sandwitch","seafood sandwitch"];

const sandwitchlist=function(...list:string[]):string[]{
    return list.sort();
}

console.log(`${sandwitchlist(...sandwitch)}`);
console.log(sandwitchlist("seafood sandwitch","roast beef sandwitch","ham sandwitch"))
console.log(sandwitchlist("Nutella Sandwich","Grilled Chicken Sandwich"))

//q45
interface Car {
    car_name: string,
    car_number: number;
  }

  let car_object:Car={
    car_name:"Cultus",
    car_number:1685
  }


  function greetin(car_object: { color: string,brand: string }):string {
    return `Hello   ${car_object.color} \t ${car_object.brand}` ;
  }

  console.log(`${car_object.car_name} \t ${car_object.car_number}`)

  console.log(greetin({color:"white",brand:"Honda"}))








