const inp = document.querySelector('#input');
let db = []
inp.addEventListener('change', (e) => {
    db.push(e.target.value);
})



const res = db[0];

function handleSubmit() {
    const data = fetch('http://localhost:4000/', { method: 'POST', body: JSON.stringify(res), headers: { 'Content-Type': 'application/json' }, })
        .then(res => res.json())
        .then(res => document.querySelector('h1').innerHTML = res)
        .catch(err => console.log(err));
}


let tab = `<tr>
<td></td>      
</tr>`

let tb = document.querySelector('table');
function getData() {
    const data = fetch('https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json')
        .then(res => res.json())
        .then(res => res.map(ele => ele.name))
        .then(res => res.slice(0, 10))
        .then(res => {
            for (let item of res) {
                tab += `<tr><td>${item}</td></tr>`
            }
            console.log(tab);
            tb.innerHTML = tab;
            return tab;
        })
        .catch(err => console.log(err))
}

getData();
console.log(tab);

async function handleLogin() {
    if (localStorage.getItem("token")) {
        let resData = await fetch("http://localhost:8080/api/getUserFromToken", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
    }
}