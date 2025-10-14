// --------------Opdracht 2 t/m 5 --------------

const userInput = prompt('Over welke afdeling wil je meer informatie?\n' +
    'Kies uit: [marketing / sales / customer-service]');

if (userInput === "marketing" || userInput === "sales" || userInput === "customer-service") {
} else {
    errorMessage = "Ongeldige keuze. Probeer het opnieuw door de pagina te verversen."
    console.error(errorMessage);
    document.getElementById('error-message').textContent = errorMessage;
}

const userInputDepartment = prompt(
    `Je koos ${userInput}. Over welke functie wil je meer weten?\nVoer een getal tussen 0 en 3 in:
0: ${departments[userInput].jobs[0].title}  
1: ${departments[userInput].jobs[1].title}
2: ${departments[userInput].jobs[2].title}
3: ${departments[userInput].jobs[3].title}\n`);

if (userInputDepartment === "0" || userInputDepartment === "1" || userInputDepartment === "2" || userInputDepartment === "3") {
} else {
    errorMessage = "Ongeldige keuze. Probeer het opnieuw door de pagina te verversen."
    console.error(errorMessage);
    document.getElementById('error-message').textContent = errorMessage;
}

document.getElementById('role-title').textContent = departments[userInput].jobs[userInputDepartment].title;
document.getElementById('department-description').textContent = departments[userInput].description;
document.getElementById('role-description').textContent = departments[userInput].jobs[userInputDepartment].description;