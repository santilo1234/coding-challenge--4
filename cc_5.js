//Task 1- Customer Profile
 const customer= {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
};

console.log (`name: ${customer.name}`);
console.log (`age: ${customer.age}`);
console.log (`email: ${customer.email}`);

//Task 2- Order Details
const order= {
orderId: 12345,
totalAmount: 150, 
status: "Processing",
displayOrder () {


console.log (`Order ID: ${this.orderId},
     Amount: $${this.totalAmount}, 
     Status: ${this.status}`);
}
};
order.displayOrder();


//Task 3- Shopping Cart
const cartItems = ["Chicken", "Eggs", "Steak"];
cartItems.push("Turkey");
cartItems.pop();
cartItems.unshift("potatoes");
cartItems.shift();
console.log (cartItems);

