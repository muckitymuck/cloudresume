console.log(1+1)
async function fetchText() {
    let response = await fetch('https://4lnixszdo4.execute-api.us-east-2.amazonaws.com/test/visitcount');
    let data = await response.text();
    console.log(data);
}
async function getCount() {
    let url = 'https://4lnixszdo4.execute-api.us-east-2.amazonaws.com/test/visitcount';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (errror) {
        console.log(error);
    }
}
async function renderCount() {
    let count = await getCount();
    let html = '';
    count.map(count => {
        let htmlSegment = '<div class="Visits"><p>ok+${console.log(data)}</p></div>';
        html += htmlSegment;
    });
    let container = document.querySelector('.container');
    container.innerHTML = html;
}
renderCount();