// Pete Likes to bake some cakes. He has some recipes and ingredients. Unfortunately, he is not good at Maths. 
// Can you help him to find out how many cakes he could bake considering his recipes?
// Write a fuction cakes(), which takes the recipe(object) and the available ingredients(also an object) and returns
// the maximum number of cakes Pete can bake(integer). For simplicity, there are no units for the amounts
// (e.g 1 lb of flour or 200g of sugar are simply 1 or 200). Ingredients  that are not present in the objects, can be
// considered as 0. Examples:
// cakes({flour: 500, sugar:200, eggs:1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}) //must return 2
// cakes({apples: 3, flour:300, sugar:150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}) //must return 0

                                             //SOLUTION1
function cakes(recipe, available){
    let maxCakes;
    for(let ingredients in recipe){
        if(available[ingredients]){
            const possibleCakes = Math.floor(available[ingredients] / recipe[ingredients] || 0)
 
            if(!maxCakes || possibleCakes < maxCakes){
                maxCakes = possibleCakes
            }
        }else{
            return 0
        }
    }
    return maxCakes
}
alert( cakes({flour: 500, sugar:200, eggs:1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))
