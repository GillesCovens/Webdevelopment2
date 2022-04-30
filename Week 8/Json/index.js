const setup = () => {
    let student = {
        voornaam: "Gilles",
        familienaam: "Covens",
        geboorteDatum: new Date("2003‐02‐07")
    }

    console.log(JSON.stringify(student))
    }

   let tekst1 = JSON.parse( '{"voornaam":"Gilles","familienaam":"Covens","geboorteDatum":null}')

    console.log(tekst1.voornaam.toString())

window.addEventListener("load", setup);