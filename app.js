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
