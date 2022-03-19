const setup = () => {
    let text = "De man van An geeft geen hand aan ambetante verwanten"
    let aantal = 0;
    for(let i= 0; i<text.length;i++) {
    if(text.indexOf("an") !==-1)
    {
        aantal++
    }
    }
    if(aantal ===0)
    {
        console.log("geen an in de text")
    }
    console.log(aantal);
}
window.addEventListener("load", setup);