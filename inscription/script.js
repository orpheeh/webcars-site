const url = "https://webcars-master.pivot40.tech";

async function postUser() {

    feedback("Veuillez patienter ...");

    const nom = document.querySelector('input[name="nom"]').value;
    const prenom = document.querySelector('input[name="prenom"]').value;
    const telephone = document.querySelector('input[name="telephone"]').value;
    const email = document.querySelector('input[name="email"]').value;

    document.querySelector('label[for="email"]').innerHTML = "";
    document.querySelector('label[for="telephone"]').innerHTML = "";

    let isCorrect = true;
    if (!validatePhoneNumberFromGabon(telephone)) {
        document.querySelector('label[for="telephone"]').innerHTML = "Numéro de téléhone incorrecte"
        isCorrect = false;
    }
    if (!validateEmail(email)) {
        document.querySelector('label[for="email"]').innerHTML = "Adresse email incorrecte"
        isCorrect = false;
    }

    if (isCorrect) {
        const isSave = await register({ nom, prenom, telephone, email });

        if (isSave) {
            //Afficher la page de demande de code
            feedback("");
            displaySuccess();
        } else {
            //Informations incorrecte
            feedback("Cet utilisateur ne peut être créé, veuillez reéssayer", 'red');
        }
    }
}

async function register(data) {
    const res = await fetch(url + "/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data)
    });

    if (res.status == 204) {
        console.log("Success");
        return true;
    } else {
        console.log("Error");
        return false;
    }
}

function feedback(message, color) {
    document.querySelector('.feedback').innerHTML = message;
    if (color) {
        document.querySelector('.feedback').style.color = color;
    }
}

function displaySuccess() {
    document.querySelector('.form').classList.add('hide');
    document.querySelector('.title').classList.add('hide');
    document.querySelector('.success').classList.remove('hide');
}