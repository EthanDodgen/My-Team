module.exports = generatePage = (managerInfo, internInfo, engineerInfo) => {
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./dist/style.css">

    <title>My-Team</title>
</head>
<body>
    <header id="team">My Team</header>
    <main>
        <div class="card" style="width: 18rem">
            <ul class="list-group list-group-flush">
                <li class="card-header">Manager</li>
                <li class="list-group-item">name:${managerInfo.name}</li>
                <li class="list-group-item">id:${managerInfo.id}</li>
                <li class="list-group-item">email:${managerInfo.email}</li>
                <li class="list-group-item">${managerInfo.office}</li>
            </ul>
        </div>
        <div class="card" style="width: 18rem">
            <ul class="list-group list-group-flush">
                <li class="card-header">Engineer</li>
                <li class="list-group-item">name:${engineerInfo.name}</li>
                <li class="list-group-item">id:${engineerInfo.id}</li>
                <li class="list-group-item">email:${engineerInfo.email}</li>
                <li class="list-group-item">github:${engineerInfo.github}</li>
            </ul>
        </div>
        <div class="card" style="width: 18rem">
            <ul class="list-group list-group-flush">
                <li class="card-header">Intern</li>
                <li class="list-group-item">name:${internInfo.name}</li>
                <li class="list-group-item">id:${internInfo.id}</li>
                <li class="list-group-item">email:${internInfo.email}</li>
                <li class="list-group-item">school:${internInfo.school}</li>
            </ul>
        </div>
    </main>
</body>
</html>
`
}

