
//let myShoppingList = ["milk", "bread", "candies"];
// console.log(myShoppingList[2]);

const cat = {
    name: "Charlie",
    gender: "Male",
    age: "2",
    color: "red",
    favorite_food:["fish", "meat", "mouse"],
    say_miyau: function(){
        return this.name + " said miyau"
    }

}

console.log(cat.name);
console.log(cat.color);
console.log(cat.favorite_food[0]);
console.log(cat.say_miyau())