            //   Assignment # 4

            // const emptymultiarray = [];
            // emptymultiarray.push([]);

            // const matrix = [
            //     [1,2,3],
            //     [4,5,6],
            //     [7,8,9],
            // ];

            // for (let i=1; i<=10; i++){
            //     console.log(i);
            // }

//             function getuserinput(promptText) {
//                 return parseInt(prompt(promptText)); 
//             }
//             const tableNumber = getuserinput("Enter The Table Number:");
//             const tablelength = getuserinput("Enter The Table number");
//             console.log(`Multiplication Table of ${tableNumber} up to ${tableLength}:`);
// for (let i = 1; i <= tableLength; i++) {
//     const result = tableNumber * i;
//     console.log(`${tableNumber} x ${i} = ${result}`);
// }



// let counting = "";
// for (let i = 1; i <= 15; i++) {
//     counting += i + ", ";
// }
// document.getElementById("counting").textContent = counting.slice(0, -2);


// let reverseCounting = "";
// for (let i = 10; i >= 1; i--) {
//     reverseCounting += i + ", ";
// }
// document.getElementById("reverseCounting").textContent = reverseCounting.slice(0, -2);

// let even = "";
// for (let i = 0; i <= 20; i += 2) {
//     even += i + ", ";
// }
// document.getElementById("even").textContent = even.slice(0, -2);


// let odd = "";
// for (let i = 1; i <= 19; i += 2) {
//     odd += i + ", ";
// }
// document.getElementById("odd").textContent = odd.slice(0, -2);

// let series = "";
// for (let i = 1; i <= 10; i++) {
//     series += 2 * i + "k, ";
// }
// document.getElementById("series").textContent = series.slice(0, -2);

// const items = ["cake", "apple pie", "cookie", "chips", "patties"];
// function searchItem() {
 
//   const userInput = prompt("Enter an item to search:");
//   const lowerCaseInput = userInput.toLowerCase();
//   const found = items.includes(lowerCaseInput);
//   if (found) {
//     alert(`${userInput} is found in the list.`);
//   } else {
//     alert(`${userInput} is not found in the list.`);
//   }
// }
// searchItem();
 
// const A = [24,73,80,91,12,25];
// let largest = A [0];

// for let( i = 1; i < A.length; i++){
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }
// console.log("The largest number in the array is:", largest);

// for (let i = 1; i <= 20; i++) {
//     const multiple = i * 5;
//     console.log(multiple);
//   }

// var firstname = prompt("enter your firstname")
// var lastname =prompt("enter your last name")

// var fullname = firstname + "" + lastname;
// alert("Hello, " + fullName + "! Welcome!");


// var word = "pakistani";
// var index = word.indexOf('n');
// document.write("the index of 'n' in the word" + word + "is" + index);

// const word = "Hello World";
//     const lastIndex = word.lastIndexOf("l");

//     document.write(`The last index of 'l' in the word "${word}" is: ${lastIndex}`);
  

// var word = "Pakistani";
// var character = word.charAt(3);
// document.write("The character at the 3rd index is: " + character);

// var stringNumber = "472";
//     var convertedNumber = parseInt(stringNumber);
//     document.write("<p>Original String: " + stringNumber + " (Type: " + typeof stringNumber + ")</p>");
//     document.write("<p>Converted Number: " + convertedNumber + " (Type: " + typeof convertedNumber + ")</p>");


// var university = 'university of karachi'
// var universityArray = university.split(' ');
// document.write("<h2>Original String:</h2>");
//         document.write(university);

//         document.write("<h2>Array Elements:</h2>");
//         document.write("<ul>");
//         for (var i = 0; i < universityArray.length; i++) {
//             document.write("<li>" + universityArray[i] + "</li>");
//         }
//         document.write("</ul>");