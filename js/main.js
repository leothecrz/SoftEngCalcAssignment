// CALC FUNCTIONS
/**
 * 
 * @param {*} char 
 */
function appenedToCalcDisplay(char)
{
    var display = document.getElementById("calcDisplay");
    display.value += char;
}

/**
 * 
 */
function clearCalcDisplay()
{
    document.getElementById("calcDisplay").value = "";
}

/**
 * 
 */
function delCalcDisplay()
{
    var display = document.getElementById("calcDisplay");
    display.value = display.value.slice(0, -1);
}

function callCALCAPI(string)
{
    var myheaders = new Headers();
    myheaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"string":string});

    var requestOptions = 
    {
        method: 'POST',
        headers: myheaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://cjuh2w7qk2.execute-api.us-west-1.amazonaws.com/Development", requestOptions)
    .then(responce => responce.text())
    .then(resutls => alert(JSON.parse(resutls).body))
    .catch(err => console.log('error', err));

}


/**
 * 
 */
function evaluateInput()
{
    callCALCAPI(document.getElementById("calcDisplay").value);
}
// CALC FUNCTIONS