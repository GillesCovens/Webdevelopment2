let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();



    // valideer alle input data en controleer of er geen errors meer zijn


    var x = document.getElementById("lstPersonen");
    var option = document.createElement("option");
    let voornaam = document.getElementById("txtVoornaam").value;
    let achternaam = document.getElementById("txtFamilienaam").value;


    option.value = voornaam +  achternaam;
    console.log(option.value);
    option.text = voornaam  + " " +  achternaam;
    x.add(option);


    let persoon ={
        voornaam : document.getElementById("txtVoornaam").value,
        achternaam : document.getElementById("txtFamilienaam").value,
        geboorteDatum: new Date(document.getElementById("txtGeboorteDatum").value),
        email: document.getElementById("txtEmail").value,
        aantalKinderen: document.getElementById("txtAantalKinderen").value
    }
    personen.push(persoon);

        // een bestaande persoon in de lijst passen we aan


    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    let voornaam = document.getElementById("txtVoornaam");
    let achternaam = document.getElementById("txtFamilienaam");
    let geboortedatum = document.getElementById("txtGeboorteDatum");
    let email = document.getElementById("txtEmail");
    let kinderen = document.getElementById("txtAantalKinderen");

    voornaam.value = "";
    achternaam.value = "";
    geboortedatum.value = "";
    email.value = "";
    kinderen.value = "";
    console.log("Klik op de knop nieuw");

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);