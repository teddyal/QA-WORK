
// let myShoppingList = ["milk", "bread", "candies"];
// console.log(myShoppingList[2]);
// console.log(myShoppingList.length);
// console.log(myShoppingList[myShoppingList.length-1]);
// console.log(myShoppingList);
// myShoppingList.sort();
// console.log(myShoppingList);

const cat = {
    name: "Charlie",
    gender: "Male",
    age: 2,
    color: "red",
    favorite_food: ["fish", "meat", "mouse"],
    say_miyau: function(){
        return this.name + " said miyayu"
    }

}

console.log(cat.name);
console.log(cat.color);
console.log(cat.favorite_food[0]);
console.log(cat.say_miyau());
