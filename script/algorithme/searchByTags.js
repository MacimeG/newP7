// ici mettre en place la fonction qui va permettre de faire la recherche par tag.

export function searchByAllTags(recipesFiltered, tagSelected){

    tagSelected.forEach(tag =>{
        recipesFiltered = recipesFiltered.filter((recipe)=> recipe.ingredients.some((ing)=> ing.ingredient.includes(tag)) || recipe.appliance.includes(tag) || recipe.ustensils.some((ustens)=> ustens.includes(tag)))
        return recipesFiltered
    })
    return recipesFiltered
}

// export function searchByAllTags(recipesFiltered, tagSelected){
//     // ici faire la meme fonction qu'au dessus, mais en boucle native.
//     const result = []
//     for (let i = 0; i < tagSelected.length; i++) {
//         const tag = tagSelected[i];

//         console.log(recipesFiltered);

//         for (let j = 0; j < recipesFiltered.length; j++) {

//             let recipes = recipesFiltered[j];

//             for (let k = 0; k < recipes.ingredients.length; k++) {

//                 const ingredients = recipes.ingredients[k];

//                 if (ingredients.ingredient.includes(tag)) {
//                     result.push(recipesFiltered[j])
//                     console.log(recipesFiltered[j]);
//                     // return recipesFiltered[j]
                    
//                 }
                
//             }
            
//             // result.push(recipesFiltered[j])
            
//         }
    
//     }
//     console.log(result);
//     // return result
// }







// export function searchByTags(recipesFiltered, tagSelected){
//     // remplir la fonction.
//     const tagFiltre = recipesFiltered.filter((element)=> element.ingredients.some((ing)=> ing.ingredient.includes(tagSelected)))

    
//     return tagFiltre
// }
// export function searchByTags(recipesFiltered, tagSelected){
 
//     tagSelected.forEach(tag =>{
//     console.log("tagIngredient:",tag);
//      recipesFiltered = recipesFiltered.filter((element)=> element.ingredients.some((ing)=> ing.ingredient.includes(tag)))
        
//     })
//     console.log(recipesFiltered);
//     // recipesFiltered = recipesFiltered.filter((element)=> element.ingredients.some((ing)=> ing.ingredient.includes(tagSelected)))
//     // console.log(recipesFiltered);
//     return recipesFiltered


//     // const tagFiltre = recipesFiltered.filter((recipe)=> recipe.ingredients.some((ing)=> ing.ingredient.toLowerCase().includes(tagSelected)));
//     // // tagFiltre = recipes.filter(tag => !tagFiltre.includes(tag))
//     // console.log(tagFiltre);
//     // return tagFiltre;
 
// }

// export function searchByApp(recipesFiltered, tagSelected){
 
//     console.log(recipesFiltered);
//     tagSelected.forEach(tag =>{
//         console.log("tagAppareil:",tag);
//         recipesFiltered = recipesFiltered.filter((recipe)=> recipe.appliance.includes(tag))
//     })
  

//     return recipesFiltered

// }


// export function searchByTagUstens(recipesFiltered, tagSelected){
   

//     tagSelected.forEach(tag =>{
//         console.log("tagUstensils:",tag);
//         recipesFiltered = recipesFiltered.filter((recipe)=> recipe.ustensils.some((ustens)=> ustens.includes(tag)))
//     })
//     console.log(recipesFiltered);

//     return recipesFiltered


// }

