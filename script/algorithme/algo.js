// ici je vais commencer a mettre mon algorithme en place.

// ici je met en place ma fonction de recherche, avec des boucles native.

export default function searchRecipe(lettre, recipesFiltered){
    const result = []
   
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