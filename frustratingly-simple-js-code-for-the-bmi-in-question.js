// welcome to my world of fear and despair, known as javascript
// first i must make the variables, no funny business because i know that'll mess up the formula
// the formula wasn't the problem lmfao
const ageInput = document.getElementById("age-input");
const genderInputs = document.getElementsByName("gender");
const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");
const button = document.getElementById("button");
// formula time babyyyyy
// proved a bit harder than i expected, how is gender applied to the bmi formula anyway??
const calculateBMI = (height, weight) => {
    return weight / (height ** 2);
}
// time to get the selected gender, apparently we need the selected gender to see if the bmi makes the person over/underweight or not, hope that made sense

function getSelectedGender () {
    for (let i = 0; i < genderInputs.length; i++) {
        if (genderInputs[i].checked) {
            return genderInputs[i].value;
        }
    }
    return null;
}
// event listener, the interpreter must at least wait a bit and check if the form is submitted or not.
button.addEventListener("click", function (e) {
    e.preventDefault(); // this one prevents the event from being submitted if the inputs are invalid, i think.

    const age = parseInt(ageInput.value);
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
    const gender = getSelectedGender();
    // but of course, we must cross out all possibilites so, naturally, if not everything is filled in we tell the user to fill in everything before submitting using the blessed alert function 
    if(!age || !height || !weight || !gender) {
        alert("Fill out all fields before submitting.");
        return;
    }

const BMI = calculateBMI(height, weight);
document.getElementById("result").innerText = `Your BMI is ${BMI.toFixed(2)}`;
});