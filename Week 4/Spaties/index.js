const setup = () => {
    let button = document.getElementById("button")
    button.addEventListener("click", geefWoordTerugMs)

    let buttonzs = document.getElementById("buttonzs")
    buttonzs.addEventListener("click", buttonClickZonderSpatie)
}

const geefWoordTerugMs=()=>
{
    let text = document.getElementById("text").value
    console.log(MetSpaties(text))
}


    const MetSpaties = (inputText) => {
    let result = ""

    for (let i = 0; i < inputText.length; i++) {
        const letter = inputText.charAt(i);
        result += `${letter} `;
    }
    return result

}


const buttonClickZonderSpatie = () =>
{
    let text = document.getElementById("text")
    let result = text.value.split(" ").join("")
    console.log(result)
    return result;

}
window.addEventListener("load", setup);