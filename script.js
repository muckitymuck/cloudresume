var request = new XMLHttpRequest();

request.open('GET', 'https://4lnixszdo4.execute-api.us-east-2.amazonaws.com/test/visitcount', true);
                    
request.onload = function () {
    console.log(request)
    if (request.status == 200) {
        console.log(JSON.parse(request.response));
    }
    else {
        console.log('error ${request.status} ${request.statusText}')
        
    }

}

request.send();