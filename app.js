// API à utiliser pour le travail: https://randomuser.me/api/?results=5

function showUser() {
    fetch('https://randomuser.me/api/?results=5')
.then(response => {
    if(!response.ok){
        throw new Error('Erreur de la requête ' + response.status);
    }
    return response.json();
})
.then(data => {
    (console.log(data))
    let user = data.results;
    let output = "<h2>Utilisateurs</h2>";

    user.forEach(lists => {
        output += `
        <div class="card">
                <h3 class="list-group-item"><img src="${lists.picture.large}"></h3>
                <h4 class="list-group-item">Name: ${lists.name.first} ${lists.name.last}</h4>
                <h5 class="list-group-item">Email: ${lists.email} </h5>
        </div>
            `;
        });
        document.getElementById('output').innerHTML = output;
    }) 
    .catch(error => console.error(error))
    .finally(console.log('C\'est terminé'));
}
showUser();


// const userData = [
//    {name: {title: 'Ms', first: 'Melody', last: 'Eikelboom'},
//     email: "angie.phillips@example.com",
//     picture: 'https://randomuser.me/api/portraits/med/women/22.jpg',
//     id: {name: 'BSN', value: '76430897'}},
// {   
//     name: {title: 'Mr', first: 'Giuseppe', last: 'Blümel'},
//     email: "giuseppe.blumel@example.com",
//     picture: "https://randomuser.me/api/portraits/med/men/38.jpg",
//     id: {name: 'SVNR', value: '74 080984 B 361'}},
// {   
//     name: {title: 'Mr', first: 'Eetu', last: 'Waara'},
//     email: "eetu.waara@example.com",
//     picture: 'https://randomuser.me/api/portraits/med/men/33.jpg',
//     id: {name: 'HETU', value: 'NaNNA665undefined'}},
// {   
//     name: {title: 'Mrs', first: 'Ilse', last: 'Rodríguez'},
//     email: "ilse.rodriguez@example.com",
//     picture: "https://randomuser.me/api/portraits/med/women/24.jpg",
//     id: {name: 'NSS', value: '79 46 65 9254 6'}},
// {   
//     name: {title: 'Mrs', first: 'Eleanor', last: 'Morgan'},
//     email: "eleanor.morgan@example.com",
//     picture: 'https://randomuser.me/api/portraits/med/women/91.jpg',
//     id: {name: 'SSN', value: '523-59-5682'}},
// ]   


// fetch('https://randomuser.me/api/?results=5',{
//     method: 'POST',
//     body: JSON.stringify(userData),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
// .then((response) => response.json())
// .then((json) => console.log(json));