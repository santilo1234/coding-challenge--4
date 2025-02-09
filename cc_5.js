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



//Task 7- Customer Search
const customers = ["Santiago", "Alejandro", "Peyton", "Lukas"]
const foundCustomer = customers.find (customer => customer === "Peyton");

console.log (`Found Customer: ${foundCustomer}`);


//Task 8- Tax Calculation 
function calculateTax(amount,taxRate) {
    const tax= amount * taxRate;
    console.log(`The tax for $${amount} at a ${taxRate * 100}% rate is $${tax}`);
    return tax;

}

calculateTax(1000,0.07);


//Task 9- Discount Application
const applyDiscount = function(price, discount) {
const discountedPrice = price - (price * discount);
console.log (`The discounted price is $${discountedPrice}`);
return discountedPrice;
};


applyDiscount(200,0.15);



