"use strict"

function printContact (name, address, city, state, zip){
    let contact = {
        name: name,
        address: address,
        city: city,
        state: state,
        zip: zip,
        display:function() {
            console.log(name)
            console.log(address)
            console.log(city + ", " + state + " " + zip)
        }
    }
    return contact
}


let nathanGallo = printContact("Nathan Gallo", "55 Example St", "Manchester", "CT", "06040")
let mikeD = printContact("Mike D", "32 sample lane", "Windsor", "CT", "06002")



nathanGallo.display()
mikeD.display()