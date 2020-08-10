"use strict"

let partCode


function getSupplier(partCode) {
    // Find special character
    let colonPosition = partCode.indexOf(":")
    // Get supplier name
    let supplier = partCode.substring(0, colonPosition)

    return supplier
}

function getProductNumber(partCode) {
    // Find special character
    let colonPosition = partCode.indexOf(":")
    // Get product number
    let hypenPosition = partCode.indexOf("-")

    let productNumber = partCode.substring(colonPosition + 1, hypenPosition)

    return productNumber
}

function getProductSize(partCode) {
    // Find special character
    let hypenPosition = partCode.indexOf("-")
    // Get product size
    let productSize = partCode.substring(hypenPosition + 1)

    return productSize
}

// Create object from partCode
function createPartObject(partCode) {
    let product = {
        supplier: getSupplier(partCode),
        productNumber: getProductNumber(partCode),
        size: getProductSize(partCode),
        display:function (){
            console.log("Part code: " + partCode)
            console.log("The size (" + this.size + ") part " + this.productNumber + " is supplied by " + this.supplier)
        }
    }
    return product
}

let part1 = createPartObject("ACME:123-L")
let part2 = createPartObject("DI:12345-M")
let part3 = createPartObject("ACE:1-12")

part1.display()
part2.display()
part3.display()





