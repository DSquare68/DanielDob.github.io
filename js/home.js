/**
 * 
 */
var quote;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
	  quote= JSON.parse(this.responseText);
    quoteSLider(0);
  }
};
xmlhttp.open("GET", "https:/DanielDob.github.io/res/data/home_page.json", true);
//xmlhttp.send(); 

//TODO DELETE

var quote = {quote:["Programming is the art of doing one thing at a time","And Zombie zombie zombie","Nothing is true everything is permitted"],author:["Assasssin","undead","Michael Feathers"]}
var i=1;

//***********************************
window.onload = function(){

	quoteSLider(0);
}

//TODO to actually slide maybe timer
function quoteSLider(n){
	i+=n;
	if(i==Object.keys(quote.quote).length){
		i=0;
	} else if(i==-1){
		i=Object.keys(quote.quote).length-1;
	}

	document.getElementById("quote-text").textContent=quote.quote[i];
	document.getElementById("quote-author").textContent=quote.author[i]
	document.getElementById().getContext("2d").;
}