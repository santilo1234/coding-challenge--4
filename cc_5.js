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



//Task 4- Price Adjustments
const prices= [100,200,300];
const discountedPrices = prices.map(price => price * 0.9);
console.log(discountedPrices)


//Task 5- Product Availability
const inventory= [3, 6, 0, 9, 0];
const availableProducts = inventory.filter(quantity => quantity > 0);
console.log(availableProducts);


//Task 6- Revenue Calculation
const sales = [500, 300, 200, 400];
const totalRevenue = sales.reduce((acc, sale) => acc + sale, 0);

console.log (`Total Revenue: $${totalRevenue}`);
