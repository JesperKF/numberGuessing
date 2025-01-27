let btn = document.getElementById('btn');
let output = document.getElementById('outputtext'); 
let inputField = document.getElementById('userInput');

let number = [Math.floor(Math.random() * 100)]
console.log(number);

let attempts = 0;

btn.addEventListener('click', function(){
    let input = document.getElementById('userInput').value;
    attempts++; 

    if (input == number){
        output.innerHTML = `Det var korrekt! <br><span style="font-size: 0.8em;"> Dit nummer var ${number}. Du brugte ${attempts} forsøg! 🎉`;
        inputField.classList.add('blink-green');

        setTimeout(() => {
            inputField.classList.remove('blink-green');
        }, 1000);

        showCongratulations();

    } else if (input < number){
        output.innerHTML = `For lavt, prøv igen :( <br><span style="font-size: 0.8em;"> Du har brugt ${attempts} forsøg.`;
    } else if (input > number){
        output.innerHTML = `For højt, prøv igen :( <br><span style="font-size: 0.8em;"> Du har brugt ${attempts} forsøg.`;
    }
})

function showCongratulations() {
    let congrats = document.createElement('div');
    congrats.classList.add('congrats');
    congrats.innerText = 'TILLYKKE!';
    document.body.appendChild(congrats);

    setTimeout(() => {
        congrats.remove();
    }, 4000);
}