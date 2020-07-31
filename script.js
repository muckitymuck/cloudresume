var request = new XMLHttpRequest()

request.open('GET', 'https://4lnixszdo4.execute-api.us-east-2.amazonaws.com/test/visitcount')

request.send()                    
request.onload = function () {
    var data = JSON.parse(this.response)
    console.log(data)

}