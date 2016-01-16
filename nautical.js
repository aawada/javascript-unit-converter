var report = function (mph, knots) {
    document.getElementById("result").innerHTML =
        mph + " MPH = " + knots + " Knots";
};

document.getElementById("Knots to MPH").onclick = function () {
    var mph = document.getElementById("nautical").value; // conversion from knots to mph
       report((mph * 1.1508), mph); //equation for conversion
    
    if (isNaN(mph)){
        document.getElementById("result").innerHTML = "Please enter a valid number" //if a non-number character is entered, an error statement is printed
        
        document.getElementById("nautical").focus(); //allows the user to resume typing in the conversion text box
        document.getElementById("nautical").value = ""; //erases the entered value in the conversion text box
    }
};

document.getElementById("MPH to Knots").onclick = function () {
    var knots = document.getElementById("nautical").value; //conversion from mph to knots
    report(knots, knots / 1.1508); //equation for conversion
    
    if (isNaN(knots)){
        document.getElementById("result").innerHTML = "Please enter a valid number" //if a non-number character is entered, an error statement is printed
        
        document.getElementById("nautical").focus(); //allows the user to resume typing in the conversion text box
        document.getElementById("nautical").value = ""; //erases the entered value in the conversion text box
    }
};