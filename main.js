//I used https://www.geeksforgeeks.org/how-to-get-value-of-selected-radio-button-using-javascript/ 
//and chatgpt prompt to create an alert dialogue box in javascript that is caled when the subit button is pressed with a radio button checked.


function displaySelection() {
    let radios = document.getElementsByName("option");
    let selectedValue = "";

    for (let radio of radios) {
        if (radio.checked) {
            selectedValue = radio.value;
            break;
        }
    }

    if (selectedValue) {
        alert("Congrats!You selected a button: " + selectedValue);
    } else {
        alert("Please select an option.");
    }
}
