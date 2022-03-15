const setup = () => {
    let belangrijke = document.getElementsByClassName("belangrijk");

    for(let i = 0; i< belangrijke.length; i++) {
        belangrijke[i].className = "opvallend belangrijk";
    }
}
window.addEventListener("load", setup);