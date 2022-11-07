// ici mettre en place la fonction qui va permettre de faire la recherche par tag.

export function searchByAllTags(recipesFiltered, tagSelected){

    tagSelected.forEach(tag =>{
        recipesFiltered = recipesFiltered.filter((recipe)=> recipe.ingredients.some((ing)=> ing.ingredient.includes(tag)) || recipe.appliance.includes(tag) || recipe.ustensils.some((ustens)=> ustens.includes(tag)))
        return recipesFiltered
    })
    return recipesFiltered
}

