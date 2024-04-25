var btn = document.querySelector("#btn");
var result = document.querySelector("#result");

btn.addEventListener("click", function(){
    var word = document.querySelector("#in").value;
    const dictionary = {
        noun: "Name of person animal or thing",
        computer: "A machine that stores and process data and presents it as an information",
        book: "A collection of papers bounded by a string or metal",
        pen: "An ink used for writing on book",
        abomasum: "the fourth stomach of a ruminant, such as a cow or sheep",
        demitasse: "a small cup for serving strong black coffee after dinner ",
        Festooned: "a string or chain of flowers, foliage, ribbon, etc., suspended in a curve between two points",
        Foofaraw: "a great fuss or disturbance about something very insignificant",
    
    }

    if(word==""){
        result.innerHTML = "Please enter a search keyword...";
        result.style = "color:brown;";
    }
    else if(!dictionary[word]){
        result.innerHTML = word+" not available in this dictionary";
        result.style = "color:brown;";
        
    }
    else{
        result.innerHTML = word+ " " + dictionary[word];
        result.style = "color:green; font-family: sanserif";

    }
})