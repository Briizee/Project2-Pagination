//collect the contacts
var contacts = document.querySelectorAll('li');
//store in array
var contactsarr = Array.from(contacts);

//number of pages needed
var totalPages = Math.ceil(contactsarr.length/10);

//node to insert the list
var ul = document.querySelector('ul');

//create div for buttons
ul.insertAdjacentHTML('afterend', '<div id="buttons-div"></div>');

//string to holdk the buttons html
var htmlStr = '';
for(var i=1; i<=totalPages; i++){
htmlStr += '<button id="' + i + '">' + i + '</button>';
}

//insert the buttons to the div
document.getElementById('buttons-div').innerHTML = htmlStr;

//clear the contacts and populate the contacts for the page
function resetAndPopulateList(startIndex) {
    ul.innerHTML = '';
    for(var i= startIndex+1; i<startIndex+10 ; i++) {
        if (i>contactsarr.length - 1) {
            break;
        } else {
        ul.appendChild(contactsarr[i]);
        }
    }
}

var buttons = document.querySelectorAll('button');

//event listener for the buttons clicks
for(var i=0; i<buttons.length; i++) {
    console.log(buttons[i], 'btnx');
    buttons[i].addEventListener('click', (e) => {
        
        resetAndPopulateList((e.target.id - 1) * 10 - 1);
    })
}

resetAndPopulateList(0);