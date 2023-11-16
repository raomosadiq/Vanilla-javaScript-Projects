const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const results = document.querySelector('#results')

    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = `Please provide the valid height`;
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please provide the valid weight`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // results.innerHTML = `<span>${bmi}</span>`;
        if(bmi > 70.9) {
            results.innerHTML = `<span>${bmi}: Overweight</span>`
        } else if(bmi < 30.6) {
            results.innerHTML = `<span>${bmi}: Underweight</span>`
        } else if (30.6 >= bmi <= 70.9) {
            results.innerHTML = `<span>${bmi}: Normal weight</span>`
        }
    }

})