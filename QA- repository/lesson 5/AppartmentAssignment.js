
function getDetails(appartment_object) {
    let result = "The appartment on " + appartment_object.street +
        ", " + appartment_object.city + " costs " + appartment_object.price +
        " dollars and has " + appartment_object.rooms.length + " rooms in total";
    return result;
}

const appartment1 = {
    city: "New-York",
    street: "5th Avenue",
    price: 5000,
    rooms: ["master bedroom", "kids room", "washroom", "kitchen"]
    // getDetails: function(){
    //     let result = "The appartment on " + this.street +
    //     ", " + this.city + " costs " + this.price + 
    //     " dollars and has " + this.rooms.length + " rooms in total";
    //     return result;
    // } 
}

const appartment2 = {
    city: "Toronto",
    street: "Steels",
    price: 3000,
    rooms: ["master bedroom", "kids room", "washroom", "kitchen", "balconee"],
}

console.log(getDetails(appartment1));
console.log(getDetails(appartment22));
