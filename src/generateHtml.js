const generateHtml = (teamArray) => {
    const cardsArray = []

    managersCard = (managers) => {
        return `
            <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header">${managers.name}</div>
                <div class="card-body">
                    <h5 class="card-role">${managers.role}</h5>
                    <p class="card-text">Employee ID: ${managers.id}</p>
                    <p class="card-text">Email: ${managers.email}</p>
                    <p class="card-text">Office Number: ${managers.officeNumber}</p>
                </div>
            </div>
        `
    }

    engineersCard = (engineers) => {
        return `
        <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
            <div class="card-header">${engineers.name}</div>
            <div class="card-body">
                <h5 class="card-role">${engineers.role}</h5>
                <p class="card-text">Employee ID: ${engineers.id}</p>
                <p class="card-text">Email: ${engineers.email}</p>
                <p class="card-text">Github Link: http://github.com/${engineers.github}</p>
             </div>
        </div>
        `
    }

    internsCard = (interns) => {
        return `
        <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
            <div class="card-header">${interns.name}</div>
            <div class="card-body">
                <h5 class="card-role">${interns.role}</h5>
                <p class="card-text">Employee ID: ${interns.id}</p>
                <p class="card-text">Email: ${interns.email}</p>
                <p class="card-text">School: ${interns.school}</p>
            </div>
        </div>  
        `
    }

    //push role into cards 
    teamArray.forEach(function(teamRole) {
        if (teamRole.getRole() === "Manager") {
            cardsArray.push(managersCard(teamRole))
        } else if (teamRole.getRole() === "Engineer") {
            cardsArray.push(engineersCard(teamRole))
        } else if (teamRole.getRole() === "Intern") {
            cardsArray.push(internsCard(teamRole))
        }
    })
    return cardsArray.join('')
}
//export code above into html 
module.exports = (teamArray) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <title>Welcome to My Team's Profile</title>
</head>
<body>
    <header class=title> My Team's Profile </header> 
    <div class= team-cards>
        ${generateHtml(teamArray)}
    </div>
    
</body>
</html>
    `
}
