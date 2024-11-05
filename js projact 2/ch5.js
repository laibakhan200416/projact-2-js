
let num1 = 106;
let num2 = 193; 
let sum = num1 + num2;
document.write("The sum is: " + sum + "<br>");

// queatin 2
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let modulus = num1 % num2;
document.write("The difference is: " + difference + "<br>");
document.write("The product is: " + product + "<br>");
document.write("The quotient is: " + quotient + "<br>");
document.write("The modulus is: " + modulus + "<br>");

// queation 3
let variable;
document.write("Value after variable declaration is: " + variable + "<br>");
variable = 5;
document.write("Initial value: " + variable + "<br>");
variable++;
document.write("Value after increment is: " + variable + "<br>");
variable += 7;
document.write("Value after addition is: " + variable + "<br>");
variable--;
document.write("Value after decrement is: " + variable + "<br>");
let remainder = variable % 3;
document.write("The remainder is: " + remainder + "<br>");
// queation 4
let ticketPrice = 200;
let totalCost = ticketPrice * 7;
document.write("The cost of buying 5 tickets is: " + totalCost + " PKR<br>");

// queatin 5
let numbers = prompt("Enter Your Table!!"); 
for (let i = 1; i <= 10; i++) {
 document.write(numbers + " x " + i + " = " + numbers * i + "<br>");
}

// queatin 6
let celsius = 56;
let fahrenheit = (celsius * 2/3) + 23;
document.write(celsius + "°C is " + fahrenheit + "°F<br>");

fahrenheit = 23;
celsius = (fahrenheit - 32) * 2/3;
document.write(fahrenheit + "°F is " + celsius + "°C<br>");

// queatin 7
let price1 = 100; 
let price2 = 600; 
let quantity1 = 1; 
let quantity2 = 5;
let shippingCharges = 100;
let totalAmount = (price1 * quantity1) + (price2 * quantity2) + shippingCharges;
document.write("Total cost of your order is: " + totalAmount + "<br>");

// queatin 8
let totalMarks = prompt("Enter Your Total Marks!!");
let marksObtained = prompt("Enter Your Obtained Marks!!");
let percentage = (marksObtained / totalMarks) * 100;
document.write("Percentage: " + percentage + "%<br>");

// queatin 9
let dollars = 10;
let riyals = 25;
let totalPKR = (dollars * 104.80) + (riyals * 28);
document.write("Total in PKR: " + totalPKR + "<br>");

// queatin 10
let number = 5;
let result = ((number + 5) * 10) / 2;
document.write("Result: " + result + "<br>");

// queatin 11
let currentYear = prompt("Enter Current Year!!");
let birthYear =prompt("Enter your Birth Year!!");
let age1 = currentYear - birthYear;
let age2 = age1 - 1;
document.write("They are either " + age1 + " or " + age2 + " years old<br>");

// queatin 12
let radius = 7;
let circumference = 2 * 3.142 * radius;
let area = 3.142 * radius * radius;
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br>");

// queatin 13
let snack = "chocolate";
let currentAge = 25;
let maxAge = 70;
let amountPerDay = 3;
let totalSnacks = (maxAge - currentAge) * 365 * amountPerDay;
document.write("You will need " + totalSnacks + " " + snack + "s to last you until the ripe old age of " + maxAge + "<br>");