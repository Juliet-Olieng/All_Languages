class Recipe{
    constructor(ingredients,preparation_time,cooking_method,_nutritional_info){
        this.ingredients=ingredients
        this.preparation_time=preparation_time
        this.cooking_method=cooking_method
        this.nutritional_info=_nutritional_info
    }
    recipes(){
        console.log(`to prepare food you need ${this.ingredients}, it takes a duration of ${this.preparation_time}`)

    }

}
const species=new Species('pillau','30min','boil','carbohydrates')
species.recipes()


class Moraccan extends Recipe{
    super(ingredients,preparation_time,cooking_method,nutritional_info)

    
    recipes() {
        console.log(`to prepare morocco food you need ${this.ingredients}, it takes a duration of ${this.preparation_time}`)
        
    }
}


const morocco=new Moraccan('pillau','30min','boil','carbohydrates')
ethiopian.recipes()

class Ethiopian extends Recipe{
    super(ingredients,preparation_time,cooking_method,nutritional_info)

    recipes() {
        console.log(`to prepare ethiopian food you need ${this.ingredients}, it takes a duration of ${this.preparation_time}`)
        
    }

}
const ethiopian=new Ethiopian('munjera','30min','stirring','carbohydrates')
ethiopian.recipes()


class Nigerian extends Recipe{
    super(ingredients,preparation_time,cooking_method,nutritional_info)
   
    recipes() {
        console.log(`to prepare nigeria food you need ${this.ingredients}, it takes a duration of ${this.preparation_time}`)
        
    }

}
const nigeria=new Nigerian('rice','30min','stirring','carbohydrates')
ethiopian.recipes()

// 
class Species{
    constructor(diet,lifespan,migrationPattern){
        this.diet=diet
        this.lifespan=lifespan
        this.migrationPattern=migrationPattern
    }

}
class Predactor extends Species{
    super(diet,lifespan,migrationPattern)
    constructor(diet,lifespan,migrationPattern,name){
        this.diet=diet
        this.lifespan=lifespan
        this.migrationPattern=migrationPattern
        this.name=name

    }

    
    track() {
        console.log(`this animal eats ${this.diet},lives for ${this.lifespan}and moves ${this.migrationPattern}`)
    
    }
}


const predactor=new Predactor("meat","20years","for food","lion")
predactor.lifespan()
class Prey extends Species{
    super(diet,lifespan,migrationPattern)
    constructor(diet,lifespan,migrationPattern,name){
        this.diet=diet
        this.lifespan=lifespan
        this.migrationPattern=migrationPattern
        this.name=name

    }
    

    
    track() {
        console.log(`this animal eats ${this.diet},lives for ${this.lifespan}and moves ${this.migrationPattern}`)
    
    }
}


const prey=new Prey("vegatables","20years","for shelter","gazzel")
prey.lifespan()






