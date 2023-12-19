var hello;  
console.log(hello);                                   
hello = 'world'; 
// =========================2=========
var needle;
function test(){
    var needle;
    needle = 'magnet';
    console.log(needle);
}
needle = 'haystack';
test();
// =================3============
var brendan ;
function print(){
        brendan = 'only okay';
        console.log(brendan);
    }
brendan = 'super cool';

console.log(brendan);
// ==============4=================
var food;
function eat(){
        food = 'half-chicken';
        console.log(food);
        var food = 'gone';
    }
food = 'chicken';
console.log(food);
eat();
// =====================5==============
var mean = function() {
        food = "chicken";
        console.log(food);
        var food = "fish";
        console.log(food);
    }
mean();
console.log(food);

console.log(food);

// ====================6====================
var genre;
function rewind() {
        genre = "rock";
        console.log(genre);
        var genre = "r&b";
        console.log(genre);
    }
console.log(genre);
genre = "disco";
rewind();
console.log(genre);
// ===============7=========================
function learn() {
        var dojo;  
        dojo = "seattle";
        console.log(dojo);
        dojo = "burbank";
        console.log(dojo);
    }
dojo = "san jose";
console.log(dojo);
learn();

console.log(dojo);









