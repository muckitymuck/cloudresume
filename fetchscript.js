const Url='https://4lnixszdo4.execute-api.us-east-2.amazonaws.com/test/visitcount';

fetch(Url)
.then(data=>{return data.json()})
.then(res=>{console.log(res)})