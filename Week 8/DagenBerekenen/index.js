const setup = () => {
    let datum = new Date();
    let verjaardag = new Date("2003-02-07");


    let verschil =new Date(datum -verjaardag)

    console.log(Math.round(verschil.getTime() / (24*60*60*1000)))
}
window.addEventListener("load", setup);