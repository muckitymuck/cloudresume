var request = new XMLHttpRequest()

request.open('GET', 'https://4lnixszdo4.execute-api.us-east-2.amazonaws.com/test/visitcount',true)    
    
request.onload = function () {
    var data = JSON.parse(this.response);
    const p1 = document.createElement('p');
    p1.textContent = console.log(data)    

}
request.send() 