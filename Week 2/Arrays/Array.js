const setup = () => {
let famillieLeden = ["Michiel", "Milan", "Yassin", 'bertje', 'gertjan']
let aantal = 0;
for(let i = 0; i< famillieLeden.length; i++)
{
    aantal++;
}
console.log(aantal);

console.log(famillieLeden[0]);
console.log(famillieLeden[2]);
console.log(famillieLeden[4]);


const voegNaamToe = () =>
{
    famillieLeden.unshift(prompt('pls enter a name'));
    console.log(famillieLeden);
}

voegNaamToe();

console.log(famillieLeden.join(", "));


}
window.addEventListener("load", setup);


