
isFruit("1")


function isFruit(name){

    if (name == "apple" || name == "banana" || name == "pear") {
        console.log(name + " is a fruit");
    }
    else if(name == "1"){
        console.log(name + " is a number");
    }
    // else if (name == "banana") {
    //     console.log(name + " is a fruit");
    // }
    // else if (name == "pear") {
    //     console.log(name + " is a fruit");
    // }
else {
            console.log("I have no idea what is: " + name)
 }

    }