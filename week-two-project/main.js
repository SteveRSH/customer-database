// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.

function question1 () {
  // Answer:
  let total = 0;
  let average = 0;
  for (let i = 0; i < data.length; i++) {
    total = total + data[i].price
  };
    average = total/data.length;

    console.log("The average price is $ " + average.toFixed(2));
  };





// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:

let items = [];

for (i = 0; i < data.length; i++){
  if(data[i].price >= 14 && data[i].price <= 18){
    items.push(data[i].title)
}}
console.log("Items that cost between $14.00 USD and $18.00 USD:", items);

};

// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {

let currency = [];
for (i = 0; i < data.length; i++){
  if(data[i].currency_code === "GBP"){
      currency.push(data[i].title)
  }}
  console.log(currency);
};

  // Answer:



// 4: Display a list of all items who are made of wood.
function question4 () {

  let itemOfWood = [];
    for (let i = 0; i < data.length; i++){
        for (let j = 0; j <  data[i].materials.length; j++){
          if (data[i].materials[j] === "wood") {
            itemOfWood.push(data[i].title);
          };
        };
      };
        console.log(itemOfWood);

};

  // Answer:



// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {

let itemOfEight = [];
    for (let i = 0; i < data.length; i++){
      // for (let j = 0; j <  data[i].materials.length; j++){
        if (data[i].materials.length >= 8) {
          itemOfEight.push(data[i].description);
        };
      // };
    };
    console.log(itemOfEight);
  };


// 6: How many items were made by their data.length?
// Answer:
function question6 () {

  //0. Make a counter variable
  //1. loop over all items
  //2. if who_made property === I did
      //2.1 add 1 to the counter
  //3. console log counter

  let anotherPractice = 0;

  for (let i = 0; i < data.length; i++){
    if (data[i].who_made === "i_did") {
      anotherPractice += 1;
    }

  }
  console.log(anotherPractice + " x amount of items");
}
  // Answer:
