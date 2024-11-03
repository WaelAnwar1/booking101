// use ajax to get json data
let http = new XMLHttpRequest();
// http variable will hold all properties, methods of the Object
http.open('get', 'js/tables.json', true);
//send the request
http.send();
//now, prepare to catch response
http.onload = function(){
    //check readystaate and status properties
    if(this.readyState == 4 && this.status == 200)
    {
        //once have a successful response, get (parse) json data
        // and convert to Java Array
        let tables = JSON.parse(this.responseText);
        //use a variable to hold incoming data from JSON file
        //use a loop to get all data
        let output="";
        
        for(let item of tables)
        {
            output += `
            <div class="table">
                <h5 class="tag"> ${item.tag} </h5>
                <p class="seats"> ${item.seats} </p>
                <p class="status"> ${item.status} </p>
                <p class="contact">${item.contact}</p>
                <a href="#" class="card-link" data-toggle="modal" data-target="#modalId">More</a>
            </div>
            `;
        }
        //Now, send data to "Tables Container"
        document.querySelector(".tables").innerHTML = output;
    };
};




// // MODAL Code *******************************

// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


