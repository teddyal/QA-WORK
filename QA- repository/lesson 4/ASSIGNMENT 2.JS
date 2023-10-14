function getDetails(appartment_object){
    let result = "The appatrment on " + appartment_object.street + 
    ", " + appartment_object.city + " cost " + appartment_object.rental_cost +
     "dollars and has " + appartment_object.rooms.length + " rooms in total";
    return result;

}


const appartment1 = {
    city: "New York",
    street: "Brooklin",
    avenu: "49TH",
rental_cost: "5900$",
    rooms:["master bedroom", "kids room", "washroom", "kitchen"],
    // getDetails: function(){
    //     let result = "The appatrment on " + this.Street + "," + this.city + " cost " + this.Rental_cost + "_dollars and has" + this.Rooms.length + " rooms in total"
    //     return result;

}


const appartment2 = {
    city: "Toronto",
    street: "Steels",
    avenu: "19TH",
    rental_cost: "3000$",
    rooms:["master bedroom", "kids room", "washroom", "kitchen"],


}


console.log(getDetails(appartment1));
console.log(getDetails(appartment2));

