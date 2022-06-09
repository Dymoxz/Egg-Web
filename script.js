
var EiPrijs = 0.28;
var EiBesteld
var EiOverVorigeWeek
var EiOverNu
var EiKapot
var TotaalGeld
var TotaalFooi

function testResults (form) {
    var TestVar = form.inputbox.value;
    alert ("You typed: " + TestVar);
}

const clientID = 'cc_classic_0kJ7gzKMcbtqpQMDmoegJTScAv75z'
const clientSecret = 'cc_sk_classic_QnEiqnA4VQR2UPWpJtbOuPJWwzcYbo9hV8dvGsSl7q1DfbuKWs'
const redirectURL = 'https://cakeeatergames.github.io/ThisButtonDoesNothing/index.html'
const LoginUrl = `https://api.sumup.com/authorize?response_type=code&client_id=${clientID}&redirect_uri=${redirectURL}`
console.log(LoginUrl)
function sumupLogin () {
    window.open(LoginUrl, '_blank').focus();
}

function GetAccessToken () {
    
    const obj = {
                    "grant_type": "authorization_code",
                    "client_id": clientID,
                    "client_secret": clientSecret,
                    "code": code
                }
    var code = document.getElementById("code").value;
    const request = new Request('https://api.sumup.com/token', {
        method: 'POST',
        body: JSON.stringify(obj)
       })

    fetch(request)
    
    console.log(request.json())
}