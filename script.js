const inputs = document.querySelectorAll("input");
const requireds = document.querySelectorAll(".required");

for (let i = 0; i < inputs.length; i++ ) {
    if (i === (inputs.length - 1)) {
        inputs[i].addEventListener("keyup", function () {
            if (inputs[i].value === inputs[i-1].value) {
                inputs[i].setCustomValidity("");
                requireds[i].style.color = "#000000";
            }
            else {
                inputs[i].setCustomValidity("Does not match password.");
                requireds[i].style.color = "#d40000";
            }
        })
    }
    else {
        inputs[i].addEventListener("keyup", function () {
            if (inputs[i].checkValidity())
                requireds[i].style.color = "#000000";
            else
                requireds[i].style.color = "#d40000";
    });
    }
}
