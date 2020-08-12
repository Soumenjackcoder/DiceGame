function diceGame() {
    var number1 = Math.floor((Math.random() * 6) + 1);
    var imageSource1 = "images/dice" + number1 + ".png";
    document.getElementsByClassName("img1")[0].setAttribute("src", imageSource1);
    var number2 = Math.floor((Math.random() * 6) + 1);
    var imageSource2 = "images/dice" + number2 + ".png";
    document.getElementsByClassName("img2")[0].setAttribute("src", imageSource2);
    if(number1 > number2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }else if(number2 > number1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }else {
        document.querySelector("h1").innerHTML = "Draw";
    }
}