// ici je vais commencer a mettre mon algorithme en place.





// export default function searchRecipe(lettre, recipesFiltered){
//     // alors ici, je met en place une constante, qui contient mes conditions(qui filtre le resultat de la recherche et va chercher dans le tableau les element correspondant), et retourne les recettes correspondante a la valeur de l'input. je met des || (ou) pour tout comparer directement.

//     const recipesFiltre = recipesFiltered.filter((recipe) => recipe.name.toLowerCase().includes(lettre) || recipe.description.toLowerCase().includes(lettre) ||
//     recipe.ingredients.some((ingObj) => {
//         ingObj.ingredient.toLowerCase().includes(lettre)
//     }) )
   
    
//     return recipesFiltre;
// }
// ici faire pareil mais avec des boucles nativ, test push sur la 2eme branche

export default function searchRecipe(lettre, recipesFiltered){
    const result = []
   
    // console.log(recipes);
    // ici commencé la v2 de l'algorithme, avec uniquement des boucles for.
    for (let i = 0; i < recipesFiltered.length; i++) {
  
        const element = recipesFiltered[i]
    
        for (let j = 0; j < element.ingredients.length; j++) {
            const ingredient = element.ingredients[j];
       
            if(element.name.toLowerCase().includes(lettre) || element.description.toLowerCase().includes(lettre) || ingredient.ingredient.toLowerCase().includes(lettre)){
                result.push(recipesFiltered[i])
            }
        }
    }
    const newSet = [... new Set(result)]

    return newSet
}