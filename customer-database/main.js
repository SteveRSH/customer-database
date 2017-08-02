// link main.js to index.html
//
//NOTE to self - below didn't work
// const wrap = `
// <h1>Internal Company Directory</h1>
// `;
// console.log(wrap);
// container.innerHTML = wrap;
// document.querySelector().innerHTML = wrap;

// for (i = 0; i < 12; i++) {
//     customers[i];}

console.log(customers);
const body = document.querySelector("body");
let header = "<h1>Internal Company Directory</h1>";
for (i = 0; i < customers.results.length; i++) {
header += `
 <div>
 <p><img src= "${customers.results[i].picture.large}" ></img></p>
  <p id = "alias">${customers.results[i].name.first} ${customers.results[i].name.last}</p>
  <p id = "email">${customers.results[i].email}</p>
  <p id = "street">${customers.results[i].location.street}</p>

    <p id = "location">${customers.results[i].location.city} ${customers.results[i].location.state}
    ${customers.results[i].location.postcode}</p>
    <p id = "cell" >${customers.results[i].cell}</p>
      <p id = "ssn">${customers.results[i].id.name} ${customers.results[0].id.value}</p>

  </div>`;
}


 body.innerHTML = header;
