function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);

    var result = document.getElementById("result");

    let resultDisplay = '<br \><br \>If you deposit ' + "<span class='highlight'>" + principal + "</span>" + '<br \>';
    resultDisplay = resultDisplay + 'at an interest rate of ' + "<span class='highlight'>" + rate + "</span>" + '%.<br \>';
    resultDisplay =resultDisplay + 'You will receive an amount of ' + "<span class='highlight'>" + interest + "</span>" + ',<br \>';
    resultDisplay = resultDisplay + 'in the Year ' + "<span class='highlight'>" + year + "</span>" + '<br \>';

    if (principal == null || principal == "")  {
        alert("Please Enter the amount field");
        document.getElementById("principal").focus();
        return;
    }

    if (principal <= 0) {
        alert("Principal has to be greater than zero");
        document.getElementById("principal").focus();
        return;
    }
    document.getElementById("maindiv").style.height = "330px";
    document.getElementById("footer").style.top = "330px";
    document.getElementById("result").innerHTML = resultDisplay;

    
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}