var btn = document.querySelector("#btn");

function reverseString(){
    var word = document.querySelector("#txt").value;
    var rev = "";
    for(let i = word.length-1; i>=0; i--){
        rev = rev+word[i];
    }
    return rev;
}


btn.addEventListener("click", function(){
    document.querySelector("#result").innerHTML = reverseString();

})