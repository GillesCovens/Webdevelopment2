const setup = () => {
    let woord = document.getElementById("btnWoord")
    woord.addEventListener("click", verander)
}
const verander = () =>
{
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}
window.addEventListener("load", setup);