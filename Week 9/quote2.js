function generateQuote(){
    // var btn = document.getElementById("btn")
    var h2 = document.getElementById("txt")

    var quote = [
        "education is light",
        "Be yourself everyone else is already taken",
        "You've gotta dance like there's nobody watching",
        "Be the change that you wish to see in the world",
        "Darkness cannot drive out darkness: only light can do that",
        "Live as if you were to die tomorrow. Learn as if you were to",
        "We accept the love we think we deserve",
        "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle",
        "We are all in the gutter, but some of us are looking at the stars",
        "I have not failed. I've just found 10,000 ways that won't work"
    ];

    var x = Math.floor(Math.random()*quote.length);
    // console.log(x)
    h2.innerHTML= quote[x];
}
setInterval(generateQuote, 2000)