# ancestrol
# african cuisine
class Recipe:
    def __init__(self,ingredients,preparation_time,cooking_method,_nutritional_info):
        self.ingredients=ingredients
        self.preparation_time=preparation_time
        self.cooking_method=cooking_method
        self.nutritional_info=_nutritional_info
    def recipe(self):
        print (f"to prepare food you need {self.ingredients},it takes {self.preparation_time}")

           

class MoroccanRecipe:
    def __init__(self,ingredients,preparation_time,cooking_method,_nutritional_info):
        self.ingredients=ingredients
        self.preparation_time=preparation_time
        self.cooking_method=cooking_method
        self.nutritional_info=_nutritional_info
    def recipe(self):
        print (f"to prepare  morocco food you need {self.ingredients},it takes {self.preparation_time}")
class NigerianRecipe:
    def __init__(self,ingredients,preparation_time,cooking_method,_nutritional_info):
        self.ingredients=ingredients
        self.preparation_time=preparation_time
        self.cooking_method=cooking_method
        self.nutritional_info=_nutritional_info
    def recipe(self):
        print (f"to prepare nigeria food you need {self.ingredients},it takes {self.preparation_time}")
       