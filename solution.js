////////////// Part 1 /////////////////////
/* 1.1) ✔️ Link the CSS file by setting the href attribute of <link> */


/* 1.2) ✔️ Set the class of the image to "list-img" */


/* 1.3) ✔️ Set the classes of the inputs (buttons) to "btn" by using a loop */


function makeClassBtn() {
        for (let i=0; i<document.querySelectorAll('input').length; i++) {
                document.querySelectorAll('input')[i].classList.add('btn');
        }
}

makeClassBtn();



////////////// Part 2 /////////////////////

/* 2.1) grab the <ul> that we are going to append <li> nodes to and store it in a variable */

let unorderedList = document.querySelector('ul');


/* 2.2) When the user clicks the ADD button, ask them what item they need to add and then:
        1. Create a new li Element
        2. Create the text node with the user's input
        3. Append the text node to the li Element
        4. Add the li Element to the unordered list by appending it to the variable created in step 2.1 */

//make a function and connect it to the add button - addItem()
//fire a prompt: let item = prompt(`What item do you need?`)
// 



function addItem() {
const listItem = document.createElement('li');
let item = document.createTextNode(prompt(`What item do you need?`));
listItem.appendChild(item);
document.getElementById("grocery-list").appendChild(listItem);
}


/* 2.3) When the user clicks the TOTAL button:
//make a function called getTotal()
        1. Display the total area by removing the "display-none" class from the the total-area div
                .removeAttribute?
                 classList.remove? classList.remove("mystyle")

        2. Total the number of groceries by getting the length of the li NodeList
                document.querySelectorAll('li').length

        3. Add the count to the page by setting the textContent of #item-count */
        //let listlength = document.querySelectorAll('li').length
    
       // document.getElementById("item-count").textContent = listlength;

   

function getTotal() {
        document.querySelector(".total-area").classList.remove("display-none");
        let listlength = document.querySelectorAll('li').length;
        document.getElementById("item-count").textContent = listlength
}



////////////// BONUS /////////////////////
/*  When the user clicks the REMOVE button, ask them what item they want to remove and then:
    1. Remove the item from the list with removeChild by comparing the user's response to the textContent of each <li> */

        //make a function called removeItem()
        //prompt(`What would you like to remove from the list?`)
        //make a loop to cycle through each li?
        // if item == item, removeChild 
        //.textContent.includes('item') vs. .textContent ==



// function removeItem() {
//         let itemToRemove = prompt(`What item would you like to remove from the list?`);

//         for (let i=0; i<document.querySelectorAll('li').length; i++) {
//                 if (document.querySelectorAll('li')[i].textContent == itemToRemove){
//                         document.getElementById("grocery-list").removeChild(document.getElementById("grocery-list").childNodes[i]);
//                 } 
//         }
// }


let list = document.getElementById("grocery-list")

function removeItem() {
        let itemToRemove = prompt(`What item would you like to remove from the list?`);

        for (let i=0; i<document.querySelectorAll('li').length; i++) {
                if (document.querySelectorAll('li')[i].textContent == itemToRemove){
                        list.removeChild(list.childNodes[i]);
                } 
        }
}




