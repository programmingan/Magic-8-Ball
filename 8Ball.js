let button = document.querySelector("button");
button.addEventListener("click", buttonClicked);

function buttonClicked() {
    var answers = ["Yes", "No", "Maybe", "It is certain", "It is decidedly so", "Without a doubt", "Yes - definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Signs point to yes", "Don't count on it", "My reply is no", "My sources say no", "Outlook is not so good", "Very doubtful", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Probably not", "I'd say no", "Unlikely"];

    var randomChoice = Math.floor(Math.random() * answers.length);

    document.querySelector(".eight").style.visibility = "hidden";
    document.querySelector(".answer").innerHTML = answers[randomChoice];
    document.querySelector(".answer").style.visibility = "visible";

    document.querySelector(".triangle").style.visibility = "visible";
    document.querySelector(".innerCircle").style.background = "gray";
    document.querySelector(".innerCircle").style.width = "250px";
    document.querySelector(".innerCircle").style.height = "250px";


}