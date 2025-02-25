elmDec = document.querySelector("main section:nth-of-type(2)");
logo = document.querySelector(".logoSite");

function mtrInter() {
    espaceAvChang = window.innerHeight * 0.25;
    posElmDec = elmDec.getBoundingClientRect().top;

    if (posElmDec < espaceAvChang) {
        logo.classList.add("logoSiteAnim");
    }
    if (posElmDec > espaceAvChang) {
        logo.classList.remove("logoSiteAnim");
    }
}

window.addEventListener("scroll", mtrInter);





txtSem0 = "";
txtSem1 = "";
txtSem2 = "";
txtSem3 = "";
txtSem4 = "";
txtSem5 = "";
txtSem6 = "";

lesBtnSem = document.querySelectorAll(".btnjdb");
lesidSem = 0;
txtSem = document.querySelector(".semInt p");
imgSem = document.querySelector(".semInt img");
btnPrec = "";
btnActuel = "";
premUti = true;

for (let btnSem of lesBtnSem){
    let idSem = lesidSem

    btnSem.addEventListener("click",function(){ mettreAjourSem(idSem, btnSem); });
    //SOLUTION TROUVÉE ICI : https://www.w3schools.com/js/js_htmldom_eventlistener.asp#:~:text=Passing%20Parameters
    
    lesidSem ++;
}


function mettreAjourSem(idSem, btnUtilise) {
    if (premUti == false) {
        console.log("oki");
        btnPrec = btnActuel;
        btnPrec.id = "";
    }
    else{
        premUti = false;
    }
    btnActuel = btnUtilise;
    btnUtilise.id = "btnUtilise";
    console.log(idSem);
    txtSem.innerHTML = txtSem0;
    imgSem.src = "images/img" + idSem + ".png";
}




lesImg = document.querySelectorAll(".image");
bkg = document.querySelector(".contenuZoomImg");
imgZoom = document.querySelector(".contenuZoomImg img")
btnFermeture = document.querySelector(".btnFermeture");

for (let img of lesImg) {
    img.addEventListener("click", function(){ zoomerImg(img.src); });
}

btnFermeture.addEventListener("click", fermerZoom);

function zoomerImg(src){
    bkg.id = "ouvert";
    imgZoom.src = src;
}

function fermerZoom() {
    bkg.id = "";
}




