import { recipes } from "../data/recipes.js";
import factoryRecipe from "./factorie/recipesFactorie.js";
import searchRecipe from "./algorithme/algo.js";
import {
  // searchByApp,
  // searchByTags,
  // searchByTagUstens,
  searchByAllTags
} from "./algorithme/searchByTags.js";
import {
  openAppareil,
  openIngredient,
  openUstens,
  selectTag,
  selectAppareil,
  selectUstens,
  searchInList,
} from "./event.js";
// ici je fais une const, qui prend le tableau recipes, et c'est sur ce tableau que je vais effectué les recherches, et changement.
export const recipesFiltered = [...recipes];

// ici je crée un tableau vide qui va me servir a la selections des items (ingredient appareil ustensiles)
export const selectedItems = [];

// ici je met en place un tableau, qui va contenir tout les ingredients.
let arrayIng = [];
recipesFiltered.map((ingredients) =>
  ingredients.ingredients.forEach((element) => {
    arrayIng.push(element.ingredient);
  })
);
// je me sert de new Set pour enlever les doublons, et de .sort() pour trié les elements dans l'ordre alphabétique.
arrayIng = [...new Set(arrayIng)];
arrayIng.sort();
// pareil pour les appareils
let arrayApp = [];
recipesFiltered.map((app) => {
  arrayApp.push(app.appliance);
});
arrayApp = [...new Set(arrayApp)];
arrayApp.sort();
// pareil pour les ustensiles.
let arrayUstens = [];
recipesFiltered.map((ustensiles) =>
  ustensiles.ustensils.forEach((ustensil) => {
    arrayUstens.push(ustensil);
  })
);
arrayUstens = [...new Set(arrayUstens)];
arrayUstens.sort();
// ici je vais crée les fonctions qui vont me permettre de remplir mes 3 boutons présent dans html
export function triIngredient(arrayIng) {
  // ici je récupere les elements html dont j'ai besoin
  let ulIngredient = document.querySelector(".ingredient");
  let ulAppareil = document.querySelector(".appareil");
  let ulUstensils = document.querySelector(".ustens");

  arrayIng.forEach((ing) => {
    const liIngredient = document.createElement("li");

    liIngredient.className = "ingredient_item";
    liIngredient.innerText = ing.toLowerCase();


    liIngredient.addEventListener("click", (e) => {
      selectedItems.push(ing);
    

      // j'appel ma fonction qui me permet d'afficher le tag (le petit bouton)
      selectTag(ing);
      // j'appel ma fonction searchByTags, ou le resultat et stocké dans la const research.
   
        const research = searchByAllTags(recipesFiltered, selectedItems);
  
        console.log(research);
        // ici je crée un tableau vide dans lequel je vais inséré les ingredients restant par rapport a la recherche.
        let arrayIngFiltreByRecipe = [];
        // ici je fais un .map sur le resultat de la recherche pour récupéré les ingredients
        // research.map((ingredients) =>
        //   ingredients.ingredients.forEach((ele) => {
        //     // je push les ingredients dans mon tableau vide
        //     arrayIngFiltreByRecipe.push(ele.ingredient);
        //   })
        // );
        // ici je fais une boucle for pour la v2
        for (let i = 0; i < research.length; i++) {
          const element = research[i];
          for (let j = 0; j < element.ingredients.length; j++) {
            const ingredients = element.ingredients[j];
            arrayIngFiltreByRecipe.push(ingredients.ingredient);
          }
        }
        // je fais un newSet de mon tableau pour enelever les doublons.
        arrayIngFiltreByRecipe = [...new Set(arrayIngFiltreByRecipe)];
        arrayIngFiltreByRecipe.sort();
          // ici je filtre mon tableau, pour pouvoir supprimé le doublons (l'element cliqué)
        let filtrerarrayIng = arrayIngFiltreByRecipe.filter(
          (ingr) => !selectedItems.includes(ingr)
        );
       
          // je fais pareil pour les appareils
        let arrayAppFiltre = [];
        // research.map((appareil) => {
        //   arrayAppFiltre.push(appareil.appliance);
        // });
        // ici v2 en boucle for
        for (let i = 0; i < research.length; i++) {
          const element = research[i];
          arrayAppFiltre.push(element.appliance);
          
        }
        arrayAppFiltre = [...new Set(arrayAppFiltre)];
        arrayAppFiltre.sort();
        // pareil pour les ustensiles
        let arrayUstFiltre = [];
        // research.map((ustensil) =>
        //   ustensil.ustensils.forEach((element) => {
        //     arrayUstFiltre.push(element);
        //   })
        // );
        // ici v2 en boucle for
        for (let i = 0; i < research.length; i++) {
          const element = research[i];
          for (let j = 0; j < element.ustensils.length; j++) {
            const ele = element.ustensils[j];
            arrayUstFiltre.push(ele);
          }
        }
        arrayUstFiltre = [...new Set(arrayUstFiltre)];
        arrayUstFiltre.sort();
  
        // ici j'efface les contenus des listes.
        ulIngredient.innerText = "";
        ulAppareil.innerText = "";
        ulUstensils.innerText = "";
        // ici je rappel les fonctions qui affiche mes listes d'ingredient, app et ustensiles
        triIngredient(filtrerarrayIng);
        triAppliance(arrayAppFiltre);
        triUstens(arrayUstFiltre);
        // ici j'appel ma fonction qui efface les recettes
        deleteRecipe();
        // ici j'appel ma fonction qui affiche mes recettes, avec le tableau qui contient les resultats.
        displayRecipe(research);

      
    });
    ulIngredient.appendChild(liIngredient);
  });
  return;
}
// pareil pour les appareils

export function triAppliance(arrayApp) {
  let ulIngredient = document.querySelector(".ingredient");
  let ulAppareil = document.querySelector(".appareil");
  let ulUstensils = document.querySelector(".ustens");
  arrayApp.forEach((app) => {
    const liAppareil = document.createElement("li");
    liAppareil.className = "appareil_item";
    liAppareil.innerText = app.toLowerCase();

    liAppareil.addEventListener("click", (e) => {
      selectedItems.push(app);


      selectAppareil(app);


      const research = searchByAllTags(recipesFiltered, selectedItems);

      console.log(research);


      let arrayAppFiltre = [];
      research.map((appareil) => {
        arrayAppFiltre.push(appareil.appliance);
      });
      let filtrerarrayApp = arrayAppFiltre.filter(
        (appa) => !selectedItems.includes(appa)
      );
    

      let arrayIngFiltreByRecipe = [];
      research.map((ingredients) =>
        ingredients.ingredients.forEach((element) => {
          arrayIngFiltreByRecipe.push(element.ingredient);
        })
      );

      arrayIngFiltreByRecipe = [...new Set(arrayIngFiltreByRecipe)];
      arrayIngFiltreByRecipe.sort();

      let arrayUstFiltre = [];
      research.map((ustensil) =>
        ustensil.ustensils.forEach((element) => {
          arrayUstFiltre.push(element);
        })
      );
      arrayUstFiltre = [...new Set(arrayUstFiltre)];
      arrayUstFiltre.sort();

      ulIngredient.innerText = "";
      ulAppareil.innerText = "";
      ulUstensils.innerText = "";

      triAppliance(filtrerarrayApp);
      triIngredient(arrayIngFiltreByRecipe);
      triUstens(arrayUstFiltre);

      deleteRecipe();
      displayRecipe(research);
    });
    ulAppareil.appendChild(liAppareil);
  });
}
// pareil pour les ustensils

export function triUstens(arrayUstens) {
  let ulUstensils = document.querySelector(".ustens");
  let ulIngredient = document.querySelector(".ingredient");
  let ulAppareil = document.querySelector(".appareil");
  arrayUstens.forEach((ust) => {
    const liUst = document.createElement("li");
    liUst.className = "ustens_item";
    liUst.innerText = ust.toLowerCase();

    liUst.addEventListener("click", (e) => {
      selectedItems.push(ust);


      selectUstens(ust);

   
      const research = searchByAllTags(recipesFiltered, selectedItems);

      
      console.log(research);

      let arrayUstFiltre = [];
      research.map((ustensil) =>
        ustensil.ustensils.forEach((element) => {
          arrayUstFiltre.push(element);
        })
      );
      let filtrerarrayUst = arrayUstFiltre.filter(
        (ust) => !selectedItems.includes(ust)
      );
  
      let arrayIngFiltreByRecipe = [];
      research.map((ingredients) =>
        ingredients.ingredients.forEach((element) => {
          arrayIngFiltreByRecipe.push(element.ingredient);
        })
      );
      arrayIngFiltreByRecipe = [...new Set(arrayIngFiltreByRecipe)];
      arrayIngFiltreByRecipe.sort();

      let arrayAppFiltre = [];
      research.map((appareil) => {
        arrayAppFiltre.push(appareil.appliance);
      });

      arrayAppFiltre = [...new Set(arrayAppFiltre)];
      arrayAppFiltre.sort();

      ulUstensils.innerText = "";
      ulIngredient.innerText = "";
      ulAppareil.innerText = "";

      triUstens(filtrerarrayUst);
      triIngredient(arrayIngFiltreByRecipe);
      triAppliance(arrayAppFiltre);

      deleteRecipe();
      displayRecipe(research);
    });

    ulUstensils.appendChild(liUst);
  });
}

// ici je fais la fonction qui vas me permettre d'afficher les recettes de base.
export function displayRecipe(recipesFiltered) {
  // recipesFiltered.forEach((element) => {
  //   const factorie = factoryRecipe(element);
  //   const contentRecetteCard = document.querySelector(".recette_card");
  //   contentRecetteCard.appendChild(factorie);
  // });
  for (let i = 0; i < recipesFiltered.length; i++) {
    const element = recipesFiltered[i];
    const factorie = factoryRecipe(element);
    const contentRecetteCard = document.querySelector(".recette_card");
    contentRecetteCard.appendChild(factorie); 
  }
  // ici je vais faire pareil , mais avec une boucle for, pour la v2
}
// ici je fais la fonction qui vas me supprimé toute les recettes de la page html.
export function deleteRecipe() {
  const containCards = document.querySelector(".recette_card");
  containCards.innerHTML = "";
}

// il faut que je mette en place un tableau pour chaque ingredient, appareil et ustensiles, et que je m'en serve pour l'affichage, et les recherches.
const btnIngredient = document.querySelector(".search_ingredients");
const btnAppareil = document.querySelector(".search_appareil");
const btnUstens = document.querySelector(".search_ustensiles");
btnIngredient.addEventListener("click", openIngredient);
btnAppareil.addEventListener("click", openAppareil);
btnUstens.addEventListener("click", openUstens);
// ici j'appelle displayRecipe, qui affiche donc toute les recettes de base.
displayRecipe(recipesFiltered);
triIngredient(arrayIng);
triAppliance(arrayApp);
triUstens(arrayUstens);

// ici je vais recupéré l'input présent dans ma page html.
const input = document.querySelector("#search");
// ici je met en place l'écouteur d'évenement qui executera ma fonction de recherche.
input.addEventListener("keyup", (e) => {
  let ulIngredient = document.querySelector(".ingredient");
  let ulAppareil = document.querySelector(".appareil");
  let ulUstensils = document.querySelector(".ustens");
  // mettre condition pour commencer la recherche a partir de 3 lettres entrées.
  if (e.target.value.length > 2) {
    // si 3 lettre entré alors commencé la recherche.
    const resultSearch = searchRecipe(e.target.value, recipesFiltered);
    // ici j'efface le contenu de base
    deleteRecipe();
    console.log(resultSearch);
    let arrayIngFiltreByRecipe = [];
    resultSearch.map((ingredients) =>
      ingredients.ingredients.forEach((element) => {
        arrayIngFiltreByRecipe.push(element.ingredient);
      })
    );
    arrayIngFiltreByRecipe = [...new Set(arrayIngFiltreByRecipe)];
    arrayIngFiltreByRecipe.sort();

    let arrayAppFiltre = [];
    resultSearch.map((appareil) => {
      arrayAppFiltre.push(appareil.appliance);
    });
    arrayAppFiltre = [...new Set(arrayAppFiltre)];

    let arrayUstFiltre = [];
    resultSearch.map((ustensil) =>
      ustensil.ustensils.forEach((element) => {
        arrayUstFiltre.push(element);
      })
    );
    arrayUstFiltre = [...new Set(arrayUstFiltre)];
    // pour pouvoir ici rappeler ma fonction qui affiche les recettes, mais cette fois avec le tableau contenant les résultat.
    displayRecipe(resultSearch);

    ulIngredient.innerText = "";
    ulAppareil.innerText = "";
    ulUstensils.innerText = "";
    triIngredient(arrayIngFiltreByRecipe);
    triAppliance(arrayAppFiltre);
    triUstens(arrayUstFiltre);
  } else {
    // ici je rappel displayRecipe comme elle est appelé de base.
    displayRecipe(recipesFiltered);
    triIngredient(arrayIng);
    triAppliance(arrayApp)
    triUstens(arrayUstens)
  }
});

// ici je met en place les ecouteur d'évenement qui dans la barre de recherches des ingredients appareil etc.. vas sortir les bons tags quand l'user cherche coco par exemple.
const inputIngredient = document.querySelector(".ingredient_btn");
const ingredientItem = document.querySelectorAll(".ingredient_item");

const inputAppareil = document.querySelector(".appareil_btn");
const appareilItem = document.querySelectorAll(".appareil_item");

const inputUstens = document.querySelector(".ustens_btn");
const ustensItem = document.querySelectorAll(".ustens_item");

inputIngredient.addEventListener("keyup", (e) => {
  searchInList(e.target.value, ingredientItem);
});

inputAppareil.addEventListener("keyup", (e) => {
  searchInList(e.target.value, appareilItem);
});

inputUstens.addEventListener("keyup", (e) => {
  searchInList(e.target.value, ustensItem);
});
