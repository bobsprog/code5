var array=[[89,78,64],[75,55,20]];
array.push([45,90]);
console.log(array);
function check(params) {
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

var checkAnother=[56,78,90]
console.log(JSON.stringify(checkAnother));
