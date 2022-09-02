/*
Create a function named changeMode:

    It accepts 5 arguments size (number), weight (string), transform (string), background (string), color (string)
    Using closure, it changes the style of the entire page and set the font-size, font-weight, text-transform, background-color, and color
Write a function named main:

    Set a variable named spooky that passes the arguments 9, bold, uppercase, pink, green to changeMode
    Set a variable named darkMode that passes the arguments 12, bold, capitalize, black, white to changeMode
    Set a variable named screamMode that passes the arguments 12, normal, lowercase, white, black to changeMode
    Add a paragraph to the body of the page with the text Welcome Holberton!
    Add a button to the body with the text Spooky
    Add a button to the body with the text Dark mode
    Add a button to the body with the text Scream mode
    When clicking on each button, the page CSS should change to the different themes you created previously
Call the main function
*/
function changeMode(size, weight, transform, background, color){
    return () => (
        document.body.style.fontSize = size,
        document.body.style.fontWeight = weight,
        document.body.style.textTransform = transform,
        document.body.style.backgroundColor = background,
        document.body.style.color = color
    )
}

function main(){
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green")
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white")
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black")

    const para = document.createElement('p');
    const node = document.createTextNode('Welcome Holberton!')
    para.appendChild(node);
    document.body.appendChild(para);

    const button_spooky = document.createElement('button');
    const node_spooky = document.createTextNode('spooky')
    button_spooky.appendChild(node_spooky);
    document.body.appendChild(button_spooky);
    button_spooky.onclick = () => (spooky());

    const button_darkmode = document.createElement('button');
    const node_darkmode = document.createTextNode('Dark mode')
    button_darkmode.appendChild(node_darkmode);
    document.body.appendChild(button_darkmode);
    button_darkmode.onclick = () => (darkMode());

    const button_scream = document.createElement('button');
    const node_scream = document.createTextNode('Dark mode')
    button_scream.appendChild(node_scream);
    document.body.appendChild(button_scream);
    button_scream.onclick = () => (screamMode());
}
