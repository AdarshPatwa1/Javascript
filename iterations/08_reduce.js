const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {  // acc = accumulator, currval = current value
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)  // here 0 is initial value of accumulator

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0) // using arrow here 0 is initial value of accumulator

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);