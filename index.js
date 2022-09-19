var array=[[89,78,64],[75,55,20]];
array.push([45,90]);
console.log(array);
function check() {
    console.log("hello world");
}
check();
function try1(x,y) {
    console.log(x-y)
}
try1(13,9)
function newchange() {
    var x;
    x=89;
    console.log(x);
}
newchange();

var outfit="shirt";
function myOutfit() {
    var outfit="t-shirt"
    return outfit;
}
console.log(myOutfit());
function changeCheck(num) {
    return num+33;
}
console.log(changeCheck(67));

function try2(arr,num) {
    return arr.push(num);
}
var numbers=[1,3,5,7,9,11,13,15];

console.log("Before"+JSON.stringify(numbers));
console.log(try2(numbers,17));
console.log("After"+JSON.stringify(numbers));

function ifTrueFalse(TrueFalse) {
    if (TrueFalse) {
        return "It is correct";
    }
    return"It is incorrect";
}
console.log(ifTrueFalse(false));


function compare2(x,y) {
    if (x!==y) {
        return "It is not equal";
    }
    return"It is equal";
}
console.log(compare2(23,"12"))

function checkCompared2(num) {
    if (num<=20) {
        return "It is 20 or over";
    }
    if (num<=10) {
        return "It is 10 or over";
    }
        return "10 or under";
    
}
console.log(checkCompared2(15))

function checkNestedIf(val) {
    if (val>25 && val<50) {
        return "It is between 25 and 50";
    }
    if (val>=25 && val<=50) {
        return "It is between 25 and 50";
    }
    if (val>=50 && val<=75) {
        return "It is between 50 and 75";
    }
}
console.log(checkNestedIf(45));

function checkOr(val) {
    if (val>=45 || val<45) {
        return "It is forty five";
    }
    return "It is not";
}
console.log(checkOr(67));

function elseifcheck(val) {
    if (val<15) {
        return "It is under 15";
    }else if(val>15){
        return "It is more than 15";
    }else{
        return "It is more than or equal to 15";
    }

}
console.log(elseifcheck(15));


function manyArrays(val){

    if (val>25) {
        return "Huge";
    }else if(val>20){
        return "Big";
    }else if(val>10){
        return "Medium";
    }else {
        return"Small";
    }
}
console.log(manyArrays(12));

function isBig(a,b) {
    return a<b;
}
console.log(isBig(23,12));

function abCheck(a,b) {
    if (a<0 || b<0 ) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a)+Math.sqrt(b),2));
}
console.log(abCheck(2,2));

var eat=6;
function edibles(food) {
    switch (food) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            eat++;
            break;
    
        case 6:
        case 7:
            eat--;
            break;
    }
    var eat2;
    if (eat<0) {
        eat2="All food";
    }
    return eat+" "+eat2;
}
console.log(edibles(5));

var enterFood="rice";


var food1={
    "favorites":enterFood,
    "adivised":"Admin input",
};

function checkFood(Foodparam) {
    if (checkFood.hasOwnProperty(Foodparam)) {
        return food1[Foodparam];
    }
    else{
        return"Not found";
    }
}

console.log(checkFood("favorites"));







