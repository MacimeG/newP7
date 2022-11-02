// ici faire la fonction d'ouverture du bouton ingrédient, et l'appeler sur l'add event listener situé sur la page index. 
import { selectedItems, recipesFiltered, displayRecipe, deleteRecipe, triIngredient, triAppliance, triUstens } from "./index.js";
import {  searchByAllTags } from "./algorithme/searchByTags.js";
// je met en place ma fonction qui vas m'ouvrir la liste des ingredients, appareil et ustensils 
export function openIngredient(){
    //ici je récupere les elements dont j'ai besoin.
    const ul = document.querySelector('.ingredient');
    const btn = document.querySelector('.search_ingredients');
    const iconIng = document.querySelector('.btnIcon');
    
    // ici je met en place mes toggles qui vont permettre l'ouverture de mon bouton.
    ul.classList.toggle('ingredient_list_open');
    btn.classList.toggle('ingredientOpen');
    iconIng.classList.toggle('ing');
    
}
// ici pareil mais pour l'ouverture du bouton appareil
export function openAppareil(){
    const ul = document.querySelector('.appareil')
    const btn = document.querySelector('.search_appareil');
    const iconApp = document.querySelector('.btnIconAppareil');

    ul.classList.toggle('ulAppareilOpen');
    btn.classList.toggle('appareilOpen')
    iconApp.classList.toggle('appareil_icon')
}

//ici pareil mais pour l'ouverture du bouton ustens

export function openUstens(){
    const ul = document.querySelector('.ustens');
    const btn = document.querySelector('.search_ustensiles');
    const icon = document.querySelector('.btnIconUstens');

    ul.classList.toggle('ustensOpen')
    btn.classList.toggle('ustensiles_open')
    icon.classList.toggle('iconUstensOpen')
}
// ici je met en place la fonction qui permet de rechercher un ingredient dans la liste.
export function searchInList(input, item){
    // item correspond a tout mes li (voir avec index ligne 352)
    item.forEach(li => {
        if (!li.textContent.toLowerCase().includes(input)) {
            li.style.display="none"
        }
        else{
            li.style.display="list-item"
        }
    });
}
// ici je met en place la fonction qui va me permettre d'afficher le tag, au clique d'un ingredient.
export function selectTag(oneTag){
    const divTagSelect = document.querySelector('.tagSelect');
    const tagAfficher = document.createElement('button');
    const tagTitle = document.createElement('p');
    const iconClose = document.createElement('i');

    tagTitle.textContent = oneTag;
    tagTitle.className="ingredientTitle"
    iconClose.className="iconCloseTag fa-regular fa-circle-xmark"
    tagAfficher.className="tagShowUpIngredient"

    iconClose.addEventListener('click', ()=>{
        let ulIngredient = document.querySelector(".ingredient");
        let ulAppareil = document.querySelector(".appareil");
        let ulUstensils = document.querySelector(".ustens");

        removeTag(tagAfficher);
        console.log(selectedItems);
        for (let i = 0; i < selectedItems.length; i++) {
            const element = selectedItems[i];
            if(element === tagTitle.textContent){
                selectedItems.splice(i, 1)
                console.log(selectedItems);
                const newSearching = searchByAllTags(recipesFiltered, selectedItems)

                let arrayIngFiltreByRecipe = [];
                newSearching.map((ingredients) =>
                  ingredients.ingredients.forEach((element) => {
                    arrayIngFiltreByRecipe.push(element.ingredient);
                  })
                );
                arrayIngFiltreByRecipe = [...new Set(arrayIngFiltreByRecipe)];
                arrayIngFiltreByRecipe.sort();

                let arrayAppFiltre = []
                newSearching.map((appareil)=>{
                    arrayAppFiltre.push(appareil.appliance)
                })
                arrayAppFiltre = [...new Set(arrayAppFiltre)]
                arrayAppFiltre.sort()

                let arrayUstFiltre = []
                newSearching.map((ustensil) =>
                    ustensil.ustensils.forEach((element) => {
                        arrayUstFiltre.push(element)
                    })
                );
                arrayUstFiltre = [...new Set(arrayUstFiltre)]
                arrayUstFiltre.sort()

                ulIngredient.innerText=""
                ulAppareil.innerText=""
                ulUstensils.innerText=""

                triIngredient(arrayIngFiltreByRecipe)
                triAppliance(arrayAppFiltre)
                triUstens(arrayUstFiltre)   

                deleteRecipe()
                displayRecipe(newSearching)
             
            }
            
        }
    })


    divTagSelect.style.display="flex"
    tagAfficher.appendChild(tagTitle);
    tagAfficher.appendChild(iconClose);
    divTagSelect.appendChild(tagAfficher);
}
// pareil pour les appareil
export function selectAppareil(oneTag){
    //mettre en place cette fonction, comme au dessus.
    const divTagSelect = document.querySelector('.tagSelect');
    const tagAfficher = document.createElement('button');
    const tagTitle = document.createElement('p');
    const iconClose = document.createElement('i');

    tagTitle.textContent = oneTag;
    tagTitle.className="AppareilTitle"
    iconClose.className="iconCloseTag fa-regular fa-circle-xmark"
    tagAfficher.className="tagShowUpAppareil"

    iconClose.addEventListener('click', ()=>{
        let ulIngredient = document.querySelector(".ingredient");
        let ulAppareil = document.querySelector(".appareil");
        let ulUstensils = document.querySelector(".ustens");

        removeTag(tagAfficher);
        console.log(selectedItems);
        for (let i = 0; i < selectedItems.length; i++) {
            const element = selectedItems[i];
            if(element === tagTitle.textContent){
                
                selectedItems.splice(i, 1)
                // selectedApp.splice(i, 1)

                const newSearching = searchByAllTags(recipesFiltered, selectedItems)

                let arrayIngFiltreByRecipe = [];
                newSearching.map((ingredients) =>
                  ingredients.ingredients.forEach((element) => {
                    arrayIngFiltreByRecipe.push(element.ingredient);
                  })
                );
                arrayIngFiltreByRecipe = [...new Set(arrayIngFiltreByRecipe)];
                arrayIngFiltreByRecipe.sort();

                let arrayAppFiltre = []
                newSearching.map((appareil)=>{
                    arrayAppFiltre.push(appareil.appliance)
                })
                arrayAppFiltre = [...new Set(arrayAppFiltre)]
                arrayAppFiltre.sort()

                let arrayUstFiltre = []
                newSearching.map((ustensil) =>
                    ustensil.ustensils.forEach((element) => {
                        arrayUstFiltre.push(element)
                    })
                );
                arrayUstFiltre = [...new Set(arrayUstFiltre)]
                arrayUstFiltre.sort()

                ulIngredient.innerText=""
                ulAppareil.innerText=""
                ulUstensils.innerText=""

                triIngredient(arrayIngFiltreByRecipe)
                triAppliance(arrayAppFiltre)
                triUstens(arrayUstFiltre)   

                deleteRecipe()
                displayRecipe(newSearching)
             
            }
            
        }
    })
 

    tagAfficher.appendChild(tagTitle);
    tagAfficher.appendChild(iconClose);
    divTagSelect.appendChild(tagAfficher);
}
// pareil pour les ustensils.
export function selectUstens(oneTag){
    //mettre en place cette fonction, comme au dessus.
    const divTagSelect = document.querySelector('.tagSelect');
    const tagAfficher = document.createElement('button');
    const tagTitle = document.createElement('p');
    const iconClose = document.createElement('i');

    tagTitle.textContent = oneTag;
    tagTitle.className="AppareilTitle"
    iconClose.className="iconCloseTag fa-regular fa-circle-xmark"
    tagAfficher.className="tagShowUpUstens"

    iconClose.addEventListener('click', ()=>{
        let ulIngredient = document.querySelector(".ingredient");
        let ulAppareil = document.querySelector(".appareil");
        let ulUstensils = document.querySelector(".ustens");

        removeTag(tagAfficher);
        for (let i = 0; i < selectedItems.length; i++) {
            const element = selectedItems[i];
            if(element === tagTitle.textContent){
                selectedItems.splice(i, 1)
                // selectedUst.splice(i, 1)
               
                const newSearching = searchByAllTags(recipesFiltered, selectedItems)

                let arrayIngFiltreByRecipe = [];
                newSearching.map((ingredients) =>
                  ingredients.ingredients.forEach((element) => {
                    arrayIngFiltreByRecipe.push(element.ingredient);
                  })
                );
                arrayIngFiltreByRecipe = [...new Set(arrayIngFiltreByRecipe)];
                arrayIngFiltreByRecipe.sort();

                let arrayAppFiltre = []
                newSearching.map((appareil)=>{
                    console.log(appareil.appliance);
                    arrayAppFiltre.push(appareil.appliance)
                })
                arrayAppFiltre = [...new Set(arrayAppFiltre)]
                arrayAppFiltre.sort()

                let arrayUstFiltre = []
                newSearching.map((ustensil) =>
                    ustensil.ustensils.forEach((element) => {
                        arrayUstFiltre.push(element)
                    })
                );
                arrayUstFiltre = [...new Set(arrayUstFiltre)]
                arrayUstFiltre.sort()

                ulIngredient.innerText=""
                ulAppareil.innerText=""
                ulUstensils.innerText=""

                triIngredient(arrayIngFiltreByRecipe)
                triAppliance(arrayAppFiltre)
                triUstens(arrayUstFiltre)   

                deleteRecipe()
                displayRecipe(newSearching)
             
            }
            
        }
    })
  

    tagAfficher.appendChild(tagTitle);
    tagAfficher.appendChild(iconClose);
    divTagSelect.appendChild(tagAfficher);
}
// la je met en place la fonction qui va enlever le tag.
function removeTag(button){
    // je me sert de remove pour supprimé l'élement html, beaucoup plus simple pour ce cas la plutot que de jouer avec le style, sa fonctionne a moitié vu que sa m'enleve le premiere element html
    
    button.remove();

}