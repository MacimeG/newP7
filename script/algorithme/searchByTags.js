// ici mettre en place la fonction qui va permettre de faire la recherche par tag.


// export function searchByTags(recipesFiltered, tagSelected){
//     // remplir la fonction.
//     // const tagFiltre = recipesFiltered.filter((element)=> element.ingredients.some((ing)=> ing.ingredient.includes(...tagSelected)))

    
//     return tagFiltre
// }
export function searchByTags(recipesFiltered, tagSelected){

    tagSelected.forEach(tag =>{

        recipesFiltered = recipesFiltered.filter((element)=> element.ingredients.some((ing)=> ing.ingredient.includes(tag)))

    })

    
    return recipesFiltered
}

export function searchByApp(recipesFiltered, tagSelected){
    tagSelected.forEach(tag =>{
        recipesFiltered = recipesFiltered.filter((recipe)=> recipe.appliance.includes(tag))
    })
    return recipesFiltered
}


export function searchByTagUstens(recipesFiltered, tagSelected){
    tagSelected.forEach(tag =>{
        recipesFiltered = recipesFiltered.filter((recipe)=> recipe.ustensils.some((ustens)=> ustens.includes(tag)))
    })
    return recipesFiltered
}