const setup = () => {
    let lijst = document.getElementsByTagName('li')
    let newimg = document.createElement('img' )
    newimg.setAttribute('src', "Gilles.jpg")
    document.body.appendChild(newimg)
    for(let i = 0; i<lijst.length; i++ )
    {
        lijst[i].setAttribute('class', 'listitem')
        lijst[i].style.color = "red";
    }

}
window.addEventListener("load", setup);