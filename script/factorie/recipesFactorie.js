// je met en place ma factory, qui va crée les card qui vas contenir toute les recettes.
export default function factoryRecipe(recipesFiltered){
    const {id, name, servings, ingredients, time, description, appliance, ustensils} = recipesFiltered;
    
        const article = document.createElement('article');
        const pictureCard= document.createElement('div');
        const card_alldetail = document.createElement('div')
        const card_header = document.createElement('div');
        const titleRecette = document.createElement('h2');
        const recette_time = document.createElement('p');
        const icon = document.createElement('i');
        const card_main = document.createElement('div');
        const ul = document.createElement('ul');
        const descriptionRecette = document.createElement('p');
        

        article.className="card";
        pictureCard.className="picturecard";
        icon.setAttribute('class', 'fa-regular fa-clock');
        card_alldetail.className="allDetail"
        card_header.className="card_header";
        titleRecette.className="title_recette";
        recette_time.className="card_recette_time";
        card_main.className="card_main";
        ul.className="list_ingredient";
        descriptionRecette.className="card_recette_description";

        titleRecette.textContent= name;
        recette_time.textContent= time + 'min';
        descriptionRecette.textContent= description;


        // ici je vais mettre en place une boucle foreach pour pouvoir récupéré les ingredients, et les faires affichers dans mes cards. (voir si je peux mettre cette boucle foreach dans une fonction apar et si je peux la rappeler dans cette fonction la / cardRecipe.)
        // faire la meme chose avec une boucle for pour la v2, NE SURTOUT PAS SUPPRIMER CELLE CI !!!!!!!!
        ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            const b = document.createElement('b');
            b.textContent= `${ingredient.ingredient}`;
            li.appendChild(b);
            ul.appendChild(li);
            // mettre en place une condition pour verifier si les quantiter et les unité sont vides ou undefini.
            if(ingredient.quantity !== null && ingredient.quantity !== undefined){
                const span = document.createElement('span');
                span.textContent = `: ${ingredient.quantity}`;
                if(ingredient.unit !== null && ingredient.unit !== undefined){
                    span.textContent= `: ${ingredient.quantity} ${ingredient.unit}`
                }
                li.appendChild(span);
            }
        });

        // ici la v2
        // for (let i = 0; i < ingredients.length; i++) {
        //     const ingredient = ingredients[i];
        //     const li = document.createElement('li');
        //     const b = document.createElement('b');
        //     b.textContent= ingredient.ingredient;
        //     li.appendChild(b);
        //     ul.appendChild(li);
        //     // mettre en place une condition pour verifier si les quantiter et les unité sont vides ou undefini.
        //     if(ingredient.quantity !== null && ingredient.quantity !== undefined){
        //         const span = document.createElement('span');
        //         span.textContent = `: ${ingredient.quantity}`;
        //         if(ingredient.unit !== null && ingredient.unit !== undefined){
        //             span.textContent= `: ${ingredient.quantity} ${ingredient.unit}`
        //         }
        //         li.appendChild(span);
        //     }
            
        // }

        article.appendChild(pictureCard);
        article.appendChild(card_alldetail);
        card_alldetail.appendChild(card_header)
        card_header.appendChild(titleRecette);
        card_header.appendChild(recette_time);
        recette_time.appendChild(icon);
        card_main.appendChild(ul);
        card_main.appendChild(descriptionRecette);
        card_alldetail.appendChild(card_main)
       

        return(article);
    }
