fetch('https://4lnixszdo4.execute-api.us-east-2.amazonaws.com/test/visitcount')
.then(function (response) {
    return response.json();
})
.then(function(myJson) {
    console.log(JSON.stringify(myJson));

})