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





txtSems = [];
txtSems[0] = "La première semaine! Je viens de commencer à travailler sur le projet d'une semaine en avance. Pusique je me sens intimider par l'ampleur du projet (retapper plus d'une centaine de frames) me fait plutôt peur. Je commence un peu donc lentement petit à petit. Je pense faire le site web le plus vite possible pour ne pas m'inquiéter de cette partie et la mettre à jour à chaque semaine dans cette partie que vous lisez actuellement.";
txtSems[1] = "En rentrant dans la première semaine de la session (qui est en réalité ma deuxième semaine de travail dans ce projet), je commencais à être plus dans le bain des choses. J'ai justement déjà fait le design pas mal complet du site. Les choses avancent à un bon rythme.";
txtSems[2] = "On commence la 2e semaine de la session d'un pas avec un meilleur rythme mais aussi un peu pressé. J'ai eu un rappel de commencer à expérimenter bien plus avec mon logiciel que je devais apprendre, BLENDER, un logiciel de 3D. Ça m'a fait tout un choc. J'arrivais presque pas à utiliser le logiciel, au point que je n'arrivais pas à manipuler la caméra. Ma douce zone de confort avec Maya me manquait lol. Mais j'ai repris le dessus rapidement. Mon premier exercice était de tester mon hypothèse en imitant une simple animation 2D.";
txtSems[3] = "La 3e semaine était la révision de ma méthode et les débuts de mon application finale. Ma méthode fonctionnait mais elle prenait trop de temps et cela devenait contre productif. Les corrections prenaient beaucoup de temps et inconsistantes. Il fallait donc que je trouve un moyen d'automatiser le processus. J'ai donc expérimenter avec l'outil grease pencil pour arriver à mes fins. J'ai également commencé à modéliser mon personnage.";
txtSems[4] = "La 4e semaine j'ai trainé un peu de la patte. Un rendez vous médical m'empêchait d'être productif et je devais terminer un gros travail d'école. J'ai donc avancé tranquilement dans le site web dans cette semaine.";
txtSems[5] = "La 5e semaine j'ai continuer à avancer dans mon application finale en terminant mon personnage 3D dans la modélisation, textures et riggin. J'ai terminer mon apprentissage actuel dans la modélisation et dans le dépliage des UV. Finalement j'ai appris comment modifier un rig automatique de Blender. Faire un rig sur blender nous donne beaucoup de liberté mais aussi beaucoup de choses à arranger. Puisque le temps n'était pas de mon coté, il fallait que je trouve une solution rapidement.";
txtSems[6] = "Finalement, la dernière semaine! Je suis encore un peu préoccupé de voir comment mon projet va se finir mais j'ai hâte de voir le résulat. Les derniers que j'écris actuellement sont rempli d'excitations et de stress ha ha. Je suis en train de terminer mon animation et je fais les dernières retouches du site web.";

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
        btnPrec = btnActuel;
        btnPrec.id = "";
    }
    else{
        premUti = false;
    }
    btnActuel = btnUtilise;
    btnUtilise.id = "btnUtilise";
    console.log(idSem);
    console.log(txtSems);
    console.log(txtSems[idSem]);
    txtSem.innerHTML = txtSems[idSem];
    imgSem.src = "images/sem" + idSem + ".png";
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




