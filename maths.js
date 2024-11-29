var answer;
var score = 0;
var backgroundImages = [];

function nextQuestion() {
    const n1 = Math.floor(Math.random() * 6);
    document.getElementById('n1').innerHTML = n1;
    const n2 = Math.floor(Math.random() * 6);
    document.getElementById('n2').innerHTML = n2;
    answer = n1 + n2;
}

function checkAnswer() {
    
    const prediction = predictImage();
    console.log(`answer: ${answer}, prediction: ${prediction}`);

    if (prediction == answer){
        score++;
        console.log(`Correct! Score is ${score}`);
        if(score <= 6){
            backgroundImages.push(`url('images/background${score}.svg')`);
            document.body.style.backgroundImage = backgroundImages;
        } else {
            alert('Well done! Your math garden is in full bloom! Want to start again?');
            score = 0;
            backgroundImages = [];
            document.body.style.backgroundImage = backgroundImages;

        }
    
    } else{
        console.log(`Wrong! Score is ${score}`);
        alert('Oops! Check your calculations and try writing the number neater next time');
        if(score > 0) {
            score--;
            backgroundImages.pop(`url('images/background${score}.svg')`);
            document.body.style.backgroundImage = backgroundImages;
        } else {
            alert('Your math garden has died. Want to start again?')
            score = 0;
            backgroundImages = [];
            document.body.style.backgroundImage = backgroundImages;

        }
        
    }

}