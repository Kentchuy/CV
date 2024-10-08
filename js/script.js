document.addEventListener("DOMContentLoaded", function(){

    // Fonction add/remove hidden sur clic de la nav
    document.body.addEventListener("click", function(e){
        console.log("Clic détecté");
        const txtDefaut = document.getElementById("txtDefaut");
        const allPop = document.body.querySelectorAll(".popContent");
        // Sur clic de la navigation (intégralement mise sous classe navClic)
        if(e.target.classList.contains("navClic")){
            console.log("Clic détecté sur navigation");
            console.log(e.target);
            // On récupère les classes de l'élément
            const classes = e.target.classList;
            // On boucle à travers ses classes
            classes.forEach(function(className) {
                // On ignore la classe navClic pour trouver l'autre classe en lien avec les textes (ex: txtContact, txtReglement ou autre)
                if(className !== "navClic") {
                    // On sélectionne l'élément qui possède popContent et cette classe
                    const getPopContent = document.body.querySelector(".popContent." + className);
                    // Et si l'élément existe et est caché alors
                    if(getPopContent.classList.contains("hidden")) {
                        // On cache tous les éléments en premier lieu, cela prévient d'afficher toute la navigation simultanément à la longue
                        allPop.forEach(element => element.classList.add("hidden"));
                        // On retire hidden de l'élément dont la classe est cliquée et en ajoute un au txtDefaut pour le cacher
                        getPopContent.classList.remove("hidden");
                        txtDefaut.classList.add("hidden");
                        // Appel avec délai de la fonction pour animer le podiumde l'onglet langues
                        setTimeout(function() {
                            animationPodium();
                        }, 10);
                    }
                    // Autrement si l'élément est déjà montré, inversement, le cacher et reafficher le txtDefaut
                    else if(!getPopContent.classList.contains("hidden")){
                        getPopContent.classList.add("hidden");
                        txtDefaut.classList.remove("hidden");
                        setTimeout(function() {
                            animationPodium();
                        }, 10);
                    }
                }
            });
        }
    });

function animationPodium(){
        console.log("anim function");
        const lang = document.getElementById("langues");
        const allPod = document.body.querySelectorAll(".pinAnimPodium");
        if (!lang.classList.contains("hidden")){
            allPod.forEach(element => element.classList.add("podiumAnimation"));
        }
        else if (lang.classList.contains("hidden")){
            allPod.forEach(element => element.classList.remove("podiumAnimation"));
        }
    };


});