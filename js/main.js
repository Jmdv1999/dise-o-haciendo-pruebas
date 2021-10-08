const info = document.querySelector(".textos-header");
const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");

window.addEventListener("load",()=>{
    nav.style.transform = "translateY(0)";
    logo.style.transform = "translateX(0)";
    setTimeout(()=>{
        info.style.transform = "translateY(0)";
        info.style.opacity = "1";
    },800);
});
window.addEventListener("scroll", () => {
    const scrollVal = window.scrollY;
    info.style.marginTop = scrollVal * 1.1 + "px";
});
window.addEventListener("scroll",function(){
    let servicios = document.getElementById('servicios');
    let posicionsec = servicios.getBoundingClientRect().top;
    let sizepantalla = window.innerHeight/5;
    /*Animación de la seecion de servicios*/   
    const contlogo1 = document.getElementById('cont-animado1');
    const contlogo2 = document.getElementById('cont-animado2');
    const contlogo3 = document.getElementById('cont-animado3');
    const contlogo4 = document.getElementById('cont-animado4');
    const contlogo5 = document.getElementById('cont-animado5');

    const contlogo6 = document.getElementById('cont-animado6');
    const contlogo7 = document.getElementById('cont-animado7');
    const contlogo8 = document.getElementById('cont-animado8');
    const contlogo9 = document.getElementById('cont-animado9');
    const contlogo10 = document.getElementById('cont-animado10');
    if(posicionsec < sizepantalla){
        servicios.style.opacity = "1";
        servicios.classList.add("mostrar-arriba");
        setTimeout(()=>{
            contlogo1.style.transform = "translateX(0px)";
            contlogo1.style.opacity = "1";
            contlogo6.style.transform = "translateX(0px)";
            contlogo6.style.opacity = "1";
            contlogo4.style.transform = "translateX(0px)";
            contlogo4.style.opacity = "1";
            contlogo5.style.transform = "translateX(0px)";
            contlogo5.style.opacity = "1";
        }, 500);
        setTimeout(()=>{
            contlogo2.style.transform = "translateX(0px)";
            contlogo2.style.opacity = "1";
            contlogo7.style.transform = "translateX(0px)";
            contlogo7.style.opacity = "1";
            contlogo9.style.transform = "translateX(0px)";
            contlogo9.style.opacity = "1";
            contlogo10.style.transform = "translateX(0px)";
            contlogo10.style.opacity = "1";
        }, 600);
        setTimeout(()=>{
            contlogo3.style.transform = "translateX(0px)";
            contlogo3.style.opacity = "1";
            contlogo8.style.transform = "translateX(0px)";
            contlogo8.style.opacity = "1";
        }, 700);
    }
})
window.addEventListener("scroll",function(){
    let nosotros = document.querySelector('.sobre-nosotros');
    let posicionos = nosotros.getBoundingClientRect().top;
    let sizepantallan = window.innerHeight/5; 
    const nro1 = document.getElementById('nro1');
    const nro2 = document.getElementById('nro2');
    const nro3 = document.getElementById('nro3');
    const nro4 = document.getElementById('nro4');
    let textoright1 = document.getElementById('texto1')
    let textoright2 = document.getElementById('texto2')
    let textoleft1 = document.getElementById('texto3')
    let textoleft2 = document.getElementById('texto4')
    if(posicionos < sizepantallan){
        nro3.style.opacity = "1";
        nro4.style.opacity = "1";
        setTimeout(()=>{
            nro1.style.opacity = "1";
            textoright1.style.transform = "translateX(0)";
        }, 300);
        setTimeout(()=>{
            nro2.style.opacity = "1";
            textoright2.style.transform = "translateX(0)";

        }, 500);
        setTimeout(()=>{
            nro3.style.opacity = "1";
            textoleft1.style.transform = "translateX(0)";
        }, 700);
        setTimeout(()=>{
            nro4.style.opacity = "1";
            textoleft2.style.transform = "translateX(0)";

        }, 900);
    }
})

let circulo = new CircleType(document.getElementById('circulo'));
circulo.raduis(380);