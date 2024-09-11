

var display = document.querySelector("#display");
var displayPrimary = document.querySelector(".display")
let numberExhanges = 1;
function Generate_quote(){
    //initiating something random
var randomQuotes = Math.floor(Math.random() * quotes.length );
var filtered_results = quotes.filter((q) =>{
    return q.number == randomQuotes
})
   var results = filtered_results.map((quote) =>{
//directly apply css style inside the HTML TAG
//map is not only for displaying an entire array but can also be used
//after a filtered array to remove the [object object]
    return (`
        
        <div style="background-image:url(${quote.image});height:100%;background-size:cover;" class="styling">
        <section class="section">
        <h3>${quote.sayings}</h3>
        <i>${quote.person}</i></br>
        </section>
       <button onclick="Generate_quote()" class="button">GENERATE<br>QUOTES</button>
       
        </div>
        `
    )
       
   
   }).join("")
      return display.innerHTML = `
     ${results}
     
      `
}

 var initiate = function Initiate(){
    Generate_quote()
    
}
if(numberExhanges == 1){
    display.innerHTML = `
    <div style="background-image:url(./images/cover.jpg); height:100%;background-size:cover;" class="container">
    <button onclick="Generate_quote()" class="cover_button">Click to</br>start!</button>
    </div>
    `
}
else{
    initiate()
}









