const setup = () => {

    let sliders = document.getElementsByClassName("components")


 for(let i = 0; i<sliders.length; i++)
 {
     sliders[i].addEventListener("change", update);
     sliders[i].addEventListener("input", update);
 }

}


const update = () =>
{
    let slider1 = document.getElementById("slider1");
    let slider2 = document.getElementById("slider2");
    let slider3 = document.getElementById("slider3");

    let value1 = slider1.value;
    let value2 = slider2.value;
    let value3 = slider3.value;

    let vierkant = document.getElementsByClassName("swatch");
    vierkant[0].style.backgroundColor="rgb(" + value1 +" ,"+ value2 + " ,"+ value3+ ")";


}
window.addEventListener("load", setup);