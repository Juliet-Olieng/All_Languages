fun main(args: Array<String>) {
    var recipe=Recipe("flour","30mins","stirring","carbohydrate")
    println(recipe.recipes("ugali"))
    var morroco=Recipe.MoroccanRecipe("rice","30min","boilling","carbohydates")
    println(morroco.recipes("rice"))
    var nigeria=Recipe.NigerianRecipe("stew","30min","boilling","carbohydates")
    println(morroco.recipes("meat"))

//
    var species=Species("meat","2years","for food")
    println(species.track("cheater"))
    var predator=Predator("meat","20years","for meat")
    println(predator.track("lion"))
    var prey=Predator.Prey("leaf","3years","run from the lion")
    println(prey.track("gazzel"))





}
//recipes
open class Recipe(var ingredient:String,var preparationTime:String,var cookingMethod:String,var nutritionalInfo:String ) {
    open fun recipes(food: String): String {
        return "to cook $food it take $preparationTime by $cookingMethod and it gives you $nutritionalInfo "

    }

    class MoroccanRecipe(ingredient: String,preparationTime: String,cookingMethod: String,nutritionalInfo: String ) : Recipe(ingredient, preparationTime, cookingMethod, nutritionalInfo){

       override fun recipes(food: String): String {
            return "to cook $food it take $preparationTime by $cookingMethod and it gives you $nutritionalInfo "
        }



    }
    class NigerianRecipe(ingredient: String,preparationTime: String,cookingMethod: String,nutritionalInfo: String ) : Recipe(ingredient, preparationTime, cookingMethod, nutritionalInfo){

        override fun recipes(food: String): String {
            return "to cook  $food it take $preparationTime by $cookingMethod and it gives you $nutritionalInfo "
        }

        }
}
//wildlife
open class Species(var diet:String,var lifespan:String,var migrationPattern:String ) {
    open fun track(animal: String): String {
        return "this $animal eats $diet ,lives for $lifespan and moves $migrationPattern "

    }
}

    class Predator(diet: String,lifespan: String,migrationPattern: String ) : Species(diet, lifespan, migrationPattern) {

        override fun track(animal: String): String {
            return "this $animal eats $diet ,lives for $lifespan and moves $migrationPattern "


        }

        class Prey(diet: String, lifespan: String, migrationPattern: String) :Species(diet, lifespan, migrationPattern) {

            override fun track(animal: String): String {
                return "this $animal eats $diet ,lives for $lifespan and moves $migrationPattern "


            }
        }
    }
