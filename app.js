presskey = document.getElementById("presskey")

window.setTimeout((welcomeMsg)=> {
    alert(welcomeMsg);
}, 1000, "Welcome to my Keycode Generator");



window.addEventListener("keydown",(keypress)=>{
    console.log(keypress.code)
    console.log(keypress.key)
    console.log(keypress.which)
    
    document.getElementById("bigNum").innerHTML= keypress.which;
    document.getElementById("codeSection").innerHTML= keypress.code;
    document.getElementById("keySection").innerHTML= keypress.key;
    document.getElementById("whichSection").innerHTML= keypress.which;

    if(keypress.which === 32){keySection.innerText ="Space-bar";}
})


function keypress(event) {
    let code = event.code;
    let key = event.key;
    let which = event.which

    }