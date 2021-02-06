const url = "https://webcars-master.pivot40.tech";

async function postUser() {

    showModal()
    
    const nom = document.querySelector('input[name="nom"]').value;
    const prenom = document.querySelector('input[name="prenom"]').value;
    let telephone = document.querySelector('input[name="telephone"]').value;
    const email = document.querySelector('input[name="email"]').value;

    if(nom == '' || prenom == '' || (isNaN(telephone) || telephone.length > 9 || telephone.length < 8) || email == ''){
        hideModal()
        alert("Veuillez vérifier les informations que vous avez saisi.");
        return;
    }
    
    telephone = ("+241" + telephone).replace(/ /g, "");
    const isSave = await register({ nom, prenom, telephone, email });
    hideModal()
    if (isSave) {
        //Afficher la page de demande de code
        displaySuccess();
    } else {
        //Informations incorrecte
        alert("Cet utilisateur ne peut être créé, veuillez reéssayer");
    }
}

async function register(data) {
    console.log(data);
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

function verifyNumber(e) {
    if (isNaN(e.value)) {
        e.value = '';
    } else if (e.value.length > 9) {
        e.value = '';
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

function showModal(){
    document.getElementById('modal').classList.add('show-modal');
}

function hideModal(){
    document.getElementById('modal').classList.remove('show-modal');
}