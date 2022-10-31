// ici je vais commencer a mettre mon algorithme en place.





export default function searchRecipe(lettre, recipesFiltered){
    // alors ici, je met en place une constante, qui contient mes conditions(qui filtre le resultat de la recherche et va chercher dans le tableau les element correspondant), et retourne les recettes correspondante a la valeur de l'input. je met des || (ou) pour tout comparer directement.

    const recipesFiltre = recipesFiltered.filter((recipe) => recipe.name.toLowerCase().includes(lettre) || recipe.description.toLowerCase().includes(lettre) ||
    recipe.ingredients.some((ingObj) => {
        ingObj.ingredient.toLowerCase().includes(lettre)
    }) )
    // const recipesFiltre = recipesFiltered.filter((recipe) => recipe.name.toLowerCase().includes(lettre) || recipe.description.toLowerCase().includes(lettre) ||
    // recipesFiltered.filter((ingObj) => {
    //     console.log(ingObj);
    // //  ingObj.ingredient.toLowerCase().includes(lettre)
    // }) )
    // ici j'appel une fonction me permettant de "supprimé" l'html présent et correspondant bien sur
    // cleanHtml();
    
    return recipesFiltre;
}