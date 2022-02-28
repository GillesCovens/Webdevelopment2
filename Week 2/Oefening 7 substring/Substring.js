const setup = () => {
    let btnSubstring = document.getElementById("btnSubstring")
    btnSubstring.addEventListener("click", substring)

}

const substring = () =>
{
    let txtInput = document.getElementById("txtInput");
    let text = txtInput.value;
    let output = document.getElementById("output")
    let beginSubstring = document.getElementById("begin").value;
    let eindeSubstring = document.getElementById("einde").value;

if(text === "")
{
    output.value = "(geen output)"
}

else {
    output.value = text.substring(beginSubstring, eindeSubstring);
}

}

window.addEventListener("load", setup);