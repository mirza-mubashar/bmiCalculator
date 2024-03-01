let button = document.querySelector('#sbmt');

    button.addEventListener('click', function (e) {
        let result = document.querySelector('.result')
        let height = parseInt(document.querySelector('#height').value);
        let weight = parseInt(document.querySelector('#weight').value);
        let answer = (weight / ((height / 100) * (height / 100))).toFixed(4);
        result.textContent = `You entered you'r height as ${height} cm's and weight as ${weight} kg's and you'r BMI is ${answer}`;
    })