// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------

//div class="fields" id="fields"
const form = document.querySelector("#fields");
const firstName = document.createElement("input");
const lastName = document.createElement("input");
const emailAddress = document.createElement("input");
const currentWeb = document.createElement("input");
const language = document.createElement("select");
const textArea = document.createElement("input");
const mobileNumber = document.createElement("input");
const homePhone = document.createElement("input");


function first (){
  form.appendChild(firstName);
  firstName.setAttribute('type', formData[0].type);
  firstName.placeholder = formData[0].label;
}
first();

function last (){
  form.appendChild(lastName);
  lastName.setAttribute('type', formData[1].type);
  lastName.placeholder = formData[1].label;
}
last();

function email (){
  form.appendChild(emailAddress);
  emailAddress.setAttribute('type', formData[2].type);
  emailAddress.placeholder = formData[2].label;
}
email();

function web (){
  form.appendChild(currentWeb);
  currentWeb.setAttribute('type', formData[3].type);
  currentWeb.placeholder = formData[3].label;
}
web ();

function lang (){
  form.appendChild(language);
  language.setAttribute('type', formData[4].type);
  language.placeholder = formData[4].label;
/* let select = document.getElementById( "user-language"); TRYING need TO CREATE A DROPBOX*/
}
lang ();

function text (){
  form.appendChild(textArea);
  textArea.setAttribute('type', formData[5].type);
  textArea.placeholder = formData[5].label;
}
text ();

function mobile (){
form.appendChild(mobileNumber);
  mobileNumber.setAttribute('type', formData[6].type);
  mobileNumber.placeholder = formData[6].label;
}
mobile ();

function home (){
form.appendChild(homePhone);
  homePhone.setAttribute('type', formData[7].type);
  homePhone.placeholder = formData[7].label;
}
home ();
