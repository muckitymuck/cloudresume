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
        let htmlSegment = '<div class="Visits"></div>';
        html +=htmlSegment;
    });
    let container = document.querySelector('.container');
    container.innerHTML = html;
}
renderCount();