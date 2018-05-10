// This is the data store for our document. 

// data object used to store favorites
class favorites { 
	//creates a new instance of favorites 
	constructor() {
		this.dishes = {"Entrees": [], "Sides":[]}
	}

	// add dish to favorites
	addDish(dishType, dishName) { 
		this.dishes[dishType].push(dishName)
	}

	// remove from favorites
	removeDish(dishType, dishName) {
		var indexOfRemove = this.dishes[dishType].indexOf(dishName);
        if (indexOfRemove !== -1) {
            this.dishes[dishType].splice(indexOfRemove, 1);
        }
	}

	// checks if dishName is in Favorites for dishType 
	isIn(dishType, dishName) { 
		//console.log(this.dishes[dishType])
		return this.dishes[dishType].includes(dishName)
	}

	// gets the favorites for that dishType
	favorites(dishType) { 
		return this.dishes[dishType]
	}

	// find all the dishes
	get dishTypes() { 
		return Object.keys(this.dishes) 
	}
}

// Dorms = Baker, Maseeh, McCormick, Next, Simmons, Special Events
// Dietary resitictions = Gluten Free, Halal, Kosher, Vegan, Vegeterian 
// time Type = breakfast, brunch, lunch, dinner, late Night
// Date = MM/DD/YYYY
// Dish = {diet:["vegan", "halal"], time:"dinner", date:"date", calories: 500}

// variables 
hal = "halal"; gnFree = "gluten"; vg = "vegan"; veg = "vegeterian"; kos = "kosher"
brk = "breakfast/brunch"; brh = "breakfast/brunch"; lh = "lunch"; dr = "dinner"
mon = "05/07/2018"; tue = "05/08/2018"; wed = "05/09/2018"; tr = "05/10/2018"; fr = "05/11/2018"; sat = "05/12/2018"; sun = "05/13/2018";


//////////////////////////////////////////////////////////// MONDAY DISHES ////////////////////////////////////////////////////////////

// MONDAY BREAKFAST - ENTREES
tofuBowlBreakfastMon = {diet: [vg, veg, hal, kos], time: brk, date: mon, description: "Vegan scrambled eggs with tofu base"}
fishTacoMon = {diet: [hal, kos], time: brk, date: mon, description: "Cajun-style tilapia on corn tortilla"}
fruitParfaitMon = {diet: [veg, hal, kos], time: brk, date: mon, description: "Fresh fruit on plain yogurt, topped with crunchy granola"}
scrambledEggsMon = {diet: [veg, hal, kos], time: brk, date: mon, description: "Eggs made to order with fresh vegetables"}
oatmealMon = {diet: [veg, hal, kos], time: brk, date:mon, description: "Warm Oatmeal with raisins and sliced almonds. Perfect start to your day"}
fruitsMon = {diet: [vg, veg, hal, kos], time: brk, date:mon, description: "Large fruit assortment"}
eggsBenedictMon = {diet: [hal], time:brk, date: mon, description:"Poached eggs, bacon, arugula on toasted English muffin with hollandaise sauce"}
blueberryPancakeMon = {diet: [vg, veg, hal, kos], time: brk, date: mon, description: "Fresh blueberries on regular pancakes"}
//fruitParfaitMon = {diet: [veg, hal, kos], time: brk, date: mon, description: "Fresh fruit on plain yogurt, topped with crunchy granola"}
tofuBowlBreakfastMon = {diet: [vg, veg, hal, kos], time: brk, date: mon, description: "Vegan scrambled eggs with tofu base"}


// MONDAY LUNCH - ENTREES 
vegetableStirfryMon = {diet: [veg], time: lh, date: mon, description: "Stir fried veggies in a light brown sauce" }
chickenParmMon = {diet: [], time: lh, date: mon, description: "Breaded chicken with mozzarella cheese and marinara sauce" }
grilledCheeseMon = {diet: [veg, hal, kos], time: lh, date: mon, description: "Toasted sandwich with melted cheese" }
salmonBurgerMon = {diet: [], time: lh, date: mon, description: "burger with grilled salmon, tomato, and lettuce"}

// MONDAY LUNCH - SIDES
truffleFriesMon = {diet: [hal, gnFree, vg, veg], time: lh, date: mon, description: "French fries with truffle butter"}
mozzarellaSticksMon = {diet: [veg, hal, kos], time: lh, date: mon, description: "Battered mozzarella served with marinara sauce"}
pigsInABlanketMon = {diet: [], time: lh, date: mon, description: "Mini bratwurst sausages in the center of a fluffy wrap"}
roastedveggiesMon = {diet: [hal, gnFree, vg, kos, hal, veg], time: lh, date: mon, description: "Oven roasted vegetables with rosemary and garlic"}
taterTotsMon = {diet: [gnFree, vg, veg], time: lh, date: mon, description: "Crispy tater tots with salt"}


// MONDAY DINNER - ENTREES 
roastedChickenMon = {diet: [hal, gnFree], time: dr, date:mon, description: "Herb Roasted Chicken with potatoes and zucchini on the side"}
vegetableMedleyMon = {diet: [veg, vg, kos, hal, gnFree], time: dr, date:mon, description: "Roasted Vegetable Medley with Rosemary"}
chickenFingersMon = {diet: [kos,hal], time: dr, date: mon, description: "Breaded Chicken Fingers"}
chickenBowlMon = {diet: [kos, hal], time: dr, date: mon, description: "Warm Hearty Chicken Noodle Bowl with an assortment of vegetables"}
shrimpBowlMon = {diet: [], time: dr, date: mon, description: "Shrimp Bowl with quinoa base and vegetable salad"}
grilledPorkOverRiceMon = {diet: [], time: dr, date: mon, description: "Grilled Pork served over Basmati Rice"}
jerkedChickenMon ={diet: [hal, gnFree], time:dr, date: mon, description: "Oven Baked Jerk Chicken served over white rice"}
chickenSoupMon = {diet: [gnFree], time:dr, date: mon, description: "Warm Hearty Chicken Soup with an assortment of vegetables"}
vegetableSoupMon = {diet: [veg, vg, gnFree], time:dr, date: mon, description: "Warm Soup with an assortment of vegetables"}
chickenCurryMon = {diet: [gnFree, hal], time: dr, date: mon, description: "Chicken Curry with basmati rice"}
pepperoniPizzaMon = {diet: [], time: dr, date: mon, description: "Pepperoni pizza with homemade tomato sauce"}

// MONDAY DINNER - SIDES 
mashedPotatoesMon = {diet: [veg, kos, hal], time: dr, date: mon, description: "Warm and freshly made mashed potatoes"}
roastedveggiesMon = {diet: [hal, gnFree, vg, kos, hal, veg], time: dr, date: mon, description: "Oven roasted vegetables with rosemary and garlic"}
steamedCornMon = {diet: [hal, gnFree, vg, kos, hal, veg], time: dr, date: mon, description: "Plain steamed corn"}
herbFriesMon = {diet: [gnFree, vg, veg], time: dr, date: mon, description: "French fries with oregano and thyme"}
bratwurstCorndogMon = {diet: [], time: dr, date: mon, description: "Bratwurst sausage in the center of a corn dog outside"}
meatloversChiliMon = {diet: [], time: dr, date: mon, description: "Chili with a hearty portion of beef mince"}

//////////////////////////////////////////////////////////// TUESDAY DISHES ////////////////////////////////////////////////////////////

// TUESDAY BREAKFAST 
breakfastSandwichTue = {diet: [hal, kos], time: brk, date: tue, description: "Choice of sausage, egg, and cheese or bacon, egg, and cheese"}
blueberryPancakeTue = {diet: [vg, veg, hal, kos], time: brk, date: tue, description: "Fresh blueberries on regular pancakes"}
pineappleSmoothieTue = {diet: [hal, gnFree, veg, kos, hal, vg], time: brh, date: tue, description: "Pineapples, coconut milk, and vegan ice cream"}
chickenAndWafflesTue = {diet: [kos], time: brh, date: tue, description: "Crispy fried chicken with buttery waffles"}
bananaSmoothieTue = {diet: [hal, gnFree, veg, kos, hal], time: brh, date: tue, description: "Bananas, low-fat milk, and vanilla ice cream"}
scrambledEggsTue = {diet: [veg, hal, kos], time: brk, date: tue, description: "Eggs made to order with fresh vegetables"}
oatmealTue = {diet: [veg, hal, kos], time: brk, date:tue, description: "Warm Oatmeal with raisins and sliced almonds. Perfect start to your day"}
fruitsTue = {diet: [vg, veg, hal, kos], time: brk, date:tue, description: "Large fruit assortment"}

// TUESDAY LUNCH 
chickenParmTue = {diet: [], time: lh, date: tue, description: "Breaded chicken with mozzarella cheese and marinara sauce" }
chickenQuesadillaTue = {diet: [], time: lh, date: tue, description: "Flour tortilla with cheese and chicken" }
grilledCheeseTue = {diet: [veg, hal, kos], time: lh, date: tue, description: "Toasted sandwich with melted cheese" }
salmonBurgerTue = {diet: [], time: lh, date: tue, description: "burger with grilled salmon, tomato, and lettuce"}

// TUESDAY LUNCH - SIDES
pigsInABlanketTue = {diet: [], time: lh, date: tue, description: "Mini bratwurst sausages in the center of a fluffy wrap"}
mozzarellaSticksTue = {diet: [veg, hal, kos], time: lh, date: tue, description: "Battered mozzarella served with marinara sauce"}
roastedveggiesTue = {diet: [hal, gnFree, vg, kos, hal, veg], time: lh, date: tue, description: "Oven roasted vegetables with rosemary and garlic"}
taterTotsTue = {diet: [gnFree, vg, veg], time: lh, date: tue, description: "Crispy tater tots with salt"}


// TUESDAY DINNER - ENTREES 
vegetableMedleyTue = {diet: [veg, vg, kos, hal, gnFree], time: dr, date:tue, description: "Roasted Vegetable Medley with Rosemary"}
chickenBowlTue = {diet: [kos, hal], time: dr, date: tue, description: "Warm Hearty Chicken Noodle Bowl with an assortment of vegetables"}
tofuBowlTue = {diet: [vg, veg, hal, kos], time: dr, date: tue, description: "Tofu Bowl with quinoa base and vegetable salad"}
steamedMusselsTue = {diet: [], time: dr, date: tue, description: "Steamed Mussels with Garlic and Parsley"}
grilledPorkOverRiceTue = {diet: [], time: dr, date: tue, description: "Grilled Pork served over Basmati Rice"}
vegetableSoupTue = {diet: [veg, vg, gnFree], time:dr, date: tue, description: "Warm Soup with an assortment of vegetables"}
pineapplePorkCutletTue = {diet: [gnFree], time: dr, date: tue, description: "Pineapple Pork Cutlet served with rice"}
pepperoniPizzaTue = {diet: [], time: dr, date: tue, description: "Pepperoni pizza with homemade tomato sauce"}
hawaiianPizzaTue = {diet: [], time: dr, date: tue, description: "Ham and pineapple pizza with homemade tomato sauce"}


// TUESDAY DINNER - SIDES 
truffleFriesTue = {diet: [hal, gnFree, vg, veg], time: dr, date: tue, description: "French fries with truffle butter"}
taterTotsTue = {diet: [hal, gnFree, vg, kos, hal, veg], time: dr, date: tue, description: "Crispy tater tots with salt"}
chipsAndHummusTue = {diet: [hal, vg, kos, veg], time: dr, date: tue, description: "3 types of corn chips with different types of hummus choices"}
asianNoodleSaladTue = {diet: [hal, vg,hal, veg], time: dr, date: tue, description: "Soba noodles with fresh vegetables and a sweet and savory sauce"}

//////////////////////////////////////////////////////////// WEDNESDAY DISHES ////////////////////////////////////////////////////////////

// WEDNESDAY BREAKFAST 
bananaSmoothieWed = {diet: [hal, gnFree, veg, kos, hal], time: brk, date: wed, description: "Bananas, low-fat milk, and vanilla ice cream"}
pineappleSmoothieWed = {diet: [hal, gnFree, veg, kos, hal, vg], time: brk, date: wed, description: "Pineapples, coconut milk, and vegan ice cream"}
scrambledEggsWed = {diet: [veg, hal, kos], time: brk, date: wed, description: "Eggs made to order with fresh vegetables"}
oatmealWed = {diet: [veg, hal, kos], time: brk, date:wed, description: "Warm Oatmeal with raisins and sliced almonds. Perfect start to your day"}
fruitsWed = {diet: [vg, veg, hal, kos], time: brk, date:wed, description: "Large fruit assortment"}
eggsBenedictWed = {diet: [hal], time: brk, date: wed, description: "Poached eggs, bacon, arugula on toasted English muffin with hollandaise sauce"}
blueberryPancakeWed = {diet: [vg, veg, hal, kos], time: brk, date: wed, description: "Fresh blueberries on regular pancakes"}
fruitParfaitWed = {diet: [veg, hal, kos], time: brk, date: wed, description: "Fresh fruit on plain yogurt, topped with crunchy granola"}
tofuBowlBreakfastWed = {diet: [vg, veg, hal, kos], time: brk, date: wed, description: "Vegan scrambled eggs with tofu base"}


// WEDNESDAY LUNCH - ENTREES
tofuBowlLunchWed = {diet: [vg, veg, hal, kos], time: lh, date: wed, description: "Tofu Bowl with quinoa base and vegetable salad"}
grilledCheeseWed = {diet: [veg, hal, kos], time: lh, date: wed, description: "Toasted sandwich with melted cheese" }
chickenParmWed = {diet: [], time: lh, date: wed, description: "Breaded chicken with mozzarella cheese and marinara sauce" }
chickenQuesadillaWed = {diet: [], time: lh, date: wed, description: "Flour tortilla with cheese and chicken" }

// WEDNESDAY LUNCH - SIDES 
roastedveggiesWed = {diet: [hal, gnFree, vg, kos, hal, veg], time: lh, date: wed, description: "Oven roasted vegetables with rosemary and garlic"}
pigsInABlanketWed = {diet: [], time: lh, date: wed, description: "Mini bratwurst sausages in the center of a fluffy wrap"}
mozzarellaSticksWed = {diet: [veg, hal, kos], time: lh, date: wed, description: "Battered mozzarella served with marinara sauce"}
taterTotsWed = {diet: [gnFree, vg, veg], time: lh, date: wed, description: "Crispy tater tots with salt"}


// WEDNESDAY DINNER - ENTREES 
chickenFingersWed = {diet: [kos,hal], time: dr, date: wed, description: "Breaded Chicken Fingers"}
shrimpBowlWed = {diet: [], time: dr, date: wed, description: "Shrimp Bowl with quinoa base and vegetable salad"}
tofuBowlWed = {diet: [vg, veg, hal, kos], time: dr, date: wed, description: "Tofu Bowl with quinoa base and vegetable salad"}
chickenSoupWed = {diet: [gnFree], time:dr, date: wed, description: "Warm Hearty Chicken Soup with an assortment of vegetables"}
tofuWVeggiesWed = {diet: [veg, vg, gnFree], time: dr, date: wed, description: "Tofu Bowl with quinoa base and vegetable salad"}
chickenCurryWed = {diet: [gnFree, hal], time: dr, date: wed, description: "Chicken Curry with basmati rice"}
pineapplePorkCutletWed = {diet: [gnFree], time: dr, date: wed, description: "Pineapple Pork Cutlet served with rice"}
pepperoniPizzaWed = {diet: [], time: dr, date: wed, description: "Pepperoni pizza with homemade tomato sauce"}


// WEDNESDAY DINNER - SIDES
herbFriesWed = {diet: [gnFree, vg, veg], time: dr, date: wed, description: "French fries with oregano and thyme"}
cheesyTaterTotsWed = {diet: [gnFree], time: dr, date: wed, description: "Crispy tater tots with melted cheddar and spring onions"}
collardGreensWed = {diet: [gnFree, veg, hal], time: dr, date: wed, description: "Fresh collard greens with garlic"}
bratwurstCorndogWed = {diet: [], time: dr, date: wed, description: "Bratwurst sausage in the center of a corn dog outside"}

//////////////////////////////////////////////////////////// THURSDAY DISHES ////////////////////////////////////////////////////////////

// THURSDAY BREAKFAST 
breakfastSandwichTr = {diet: [hal, kos], time: brk, date: tr, description: "Choice of sausage, egg, and cheese or bacon, egg, and cheese"}
fruitParfaitTr = {diet: [veg, hal, kos], time: brk, date: tr, description: "Fresh fruit on plain yogurt, topped with crunchy granola"}
chickenAndWafflesTr = {diet: [kos], time: brk, date: tr, description: "Crispy fried chicken with buttery waffles"}
eggsBenedictTr = {diet: [hal], time: brk, date: tr, description: "Poached eggs, bacon, arugula on toasted english muffin with hollandaise sauce"}
oatmealTr = {diet: [veg, hal, kos], time: brk, date:tr, description: "Warm Oatmeal with raisins and sliced almonds. Perfect start to your day"}
fruitsTr = {diet: [vg, veg, hal, kos], time: brk, date:tr, description: "Large fruit assortment"}
blueberryPancakeTr = {diet: [vg, veg, hal, kos], time: brk, date: tr, description: "Fresh blueberries on regular pancakes"}
fruitParfaitTr = {diet: [veg, hal, kos], time: brk, date: tr, description: "Fresh fruit on plain yogurt, topped with crunchy granola"}
tofuBowlBreakfastTr = {diet: [vg, veg, hal, kos], time: brk, date: tr, description: "Vegan scrambled eggs with tofu base"}

// THURSDAY LUNCH - ENTREES
salmonBurgerTr = {diet: [], time: lh, date: tr, description: "burger with grilled salmon, tomato, and lettuce"}
chickenParmTr = {diet: [], time: lh, date: tr, description: "Breaded chicken with mozzarella cheese and marinara sauce" }
chickenQuesadillaTr = {diet: [], time: lh, date: tr, description: "Flour tortilla with cheese and chicken" }
grilledCheeseTr = {diet: [veg, hal, kos], time: lh, date: tr, description: "Toasted sandwich with melted cheese" }

// THURSDAY LUNCH - SIDES
meatloversChiliTr = {diet: [], time: lh, date: tr, description: "Chili with a hearty portion of beef mince"}
asianNoodleSaladTr = {diet: [hal, vg, hal, veg], time: lh, date: tr, description: "Soba noodles with fresh vegetables and a sweet and savory sauce"}
taterTotsTr = {diet: [gnFree, vg, veg], time: lh, date: tr, description: "Crispy tater tots with salt"}


// THURSDAY DINNER - ENTREES 
shrimpBowlTr = {diet: [], time: dr, date: tr, description: "Shrimp Bowl with quinoa base and vegetable salad"}
roastedChickenTr = {diet: [hal, gnFree], time: dr, date:tr, description: "Herb Roasted Chicken with potatoes and zucchini on the side"}
steamedMusselsTr = {diet: [], time: dr, date: tr, description: "Steamed Mussels with Garlic and Parsley"}
grilledPorkOverRiceTr = {diet: [], time: dr, date: tr, description: "Grilled Pork served over Basmati Rice"}
vegetableSoupTr = {diet: [veg, vg, gnFree], time:dr, date: tr, description: "Warm Soup with an assortment of vegetables"}
chickenCurryTr = {diet: [gnFree, hal], time: dr, date: tr, description: "Chicken Curry with basmati rice"}
pineapplePorkCutletTr = {diet: [gnFree], time: dr, date: tr, description: "Pineapple Pork Cutlet served with rice"}
hawaiianPizzaTr = {diet: [], time: dr, date: tr, description: "Ham and pineapple pizza with homemade tomato sauce"}

// THURSDAY DINNER - SIDES
taterTotsTr = {diet: [hal, gnFree, vg, kos, hal, veg], time: dr, date: tr, description: "Crispy tater tots with salt"}
waffleFriesTr = {diet: [hal, vg, kos, veg], time: dr, date: tr, description: "Hand cut waffle fries"}
bratwurstCorndogTr = {diet: [], time: dr, date: tr, description: "Bratwurst sausage in the center of a corn dog outside"}
truffleFriesTr = {diet: [hal, gnFree, vg, veg], time: dr, date: tr, description: "French fries with truffle butter"}


//////////////////////////////////////////////////////////// FRIDAY DISHES ////////////////////////////////////////////////////////////

// FRIDAY BREAKFAST 
pineappleSmoothieFr = {diet: [hal, gnFree, veg, kos, vg], time: brk, date: fr, description: "Pineapples, coconut milk, and vegan ice cream"}
fishTacoFr = {diet: [hal, kos], time: brk, date: fr, description: "Cajun-style tilapia on corn tortilla"}
blueberryPancakeFr = {diet: [vg, veg, hal, kos], time: brk, date: fr, description: "Fresh blueberries on regular pancakes"}
chickenAndWafflesFr = {diet: [kos], time: brk, date: fr, description: "Crispy fried chicken with buttery waffles"}
breakfastSandwichFr = {diet: [hal, kos], time: brk, date: fr, description: "Choice of sausage, egg, and cheese or bacon, egg, and cheese"}
fruitParfaitFr = {diet: [veg, hal, kos], time: brk, date: fr, description: "Fresh fruit on plain yogurt, topped with crunchy granola"}
eggsBenedictFr = {diet: [hal], time: brk, date: fr, description: "Poached eggs, bacon, arugula on toasted english muffin with hollandaise sauce"}
oatmealFr = {diet: [veg, hal, kos], time: brk, date:fr, description: "Warm Oatmeal with raisins and sliced almonds. Perfect start to your day"}
fruitsFr = {diet: [vg, veg, hal, kos], time: brk, date:fr, description: "Large fruit assortment"}

// FRIDAY LUNCH - ENTREES 
pokeBowlFr = {diet: [], time: lh, date: fr, description: "Rice bowl topped with salmon sashimi, cucumber, tomatoes, and creamy avocado sauce"}
salmonBurgerFr = {diet: [], time: lh, date: fr, description: "burger with grilled salmon, tomato, and lettuce"}
chickenParmFr = {diet: [], time: lh, date: fr, description: "Breaded chicken with mozzarella cheese and marinara sauce" }
chickenQuesadillaFr = {diet: [], time: lh, date: fr, description: "Flour tortilla with cheese and chicken" }
grilledCheeseFr = {diet: [veg, hal, kos], time: lh, date: fr, description: "Toasted sandwich with melted cheese" }


// FRIDAY LUNCH - SIDES 
meatloversChiliFr = {diet: [], time: lh, date: fr, description: "Chili with a hearty portion of beef mince"}
pigsInABlankeFr = {diet: [], time: lh, date: fr, description: "Mini bratwurst sausages in the center of a fluffy wrap"}
waffleFriesFr = {diet: [hal, vg, kos, veg], time: lh, date: fr, description: "Hand cut waffle fries"}
steamedCornFr = {diet: [hal, gnFree, vg, kos, hal, veg], time: lh, date: fr, description: "Plain steamed corn"}


// FRIDAY DINNER - ENTREES 
vegetableMedleyFr = {diet: [veg, vg, kos, hal, gnFree], time: dr, date:fr, description: "Roasted Vegetable Medley with Rosemary"}
chickenBowlFr = {diet: [kos, hal], time: dr, date: fr, description: "Warm Hearty Chicken Noodle Bowl with an assortment of vegetables"}
tofuBowlFr = {diet: [vg, veg, hal, kos], time: dr, date: fr, description: "Tofu Bowl with quinoa base and vegetable salad"}
grilledPorkOverRiceFr = {diet: [], time: dr, date: fr, description: "Grilled Pork served over Basmati Rice"}
chickenSoupFr = {diet: [gnFree], time:dr, date: fr, description: "Warm Hearty Chicken Soup with an assortment of vegetables"}
vegetableSoupFr = {diet: [veg, vg, gnFree], time:dr, date: fr, description: "Warm Soup with an assortment of vegetables"}
chickenCurryFr = {diet: [gnFree, hal], time: dr, date: fr, description: "Chicken Curry with basmati rice"}
pepperoniPizzaFr = {diet: [], time: dr, date: fr, description: "Pepperoni pizza with homemade tomato sauce"}


// FRIDAY DINNER - SIDES
collardGreensFr = {diet: [gnFree, veg, hal], time: dr, date: fr, description: "Fresh collard greens with garlic"}
cheesyTaterTotsFr = {diet: [gnFree], time: dr, date: fr, description: "Crispy tater tots with melted cheddar and spring onions"}
steamedCornFr = {diet: [hal, gnFree, vg, kos, hal, veg], time: dr, date: tr, description: "Plain steamed corn"}
chipsAndHummusFr = {diet: [hal, vg, kos, veg], time: dr, date: fr, description: "3 types of corn chips with different types of hummus choices"}

//////////////////////////////////////////////////////////// SATURDAY DISHES ////////////////////////////////////////////////////////////

// SATURDAY BRUNCH
bananaSmoothieSat = {diet: [hal, gnFree, veg, kos, hal], time: brh, date: sat, description: "Bananas, low-fat milk, and vanilla ice cream"}
eggsBenedictSat = {diet: [hal], time: brh, date: sat, description: "Poached eggs, bacon, arugula on toasted english muffin with hollandaise sauce"}
fruitParfaitSat = {diet: [veg, hal, kos], time: brh, date: sat, description: "Fresh fruit on plain yogurt, topped with crunchy granola"}
tofuBowlBreakfastSat = {diet: [vg, veg, hal, kos], time: brh, date: sat, description: "Vegan scrambled eggs with tofu base"}
chickenQuesadillaSat = {diet: [], time: brh, date: sat, description: "Flour tortilla with cheese and chicken" }
pokeBowlSat = {diet: [], time: brh, date: sat, description: "Rice bowl topped with salmon sashimi, cucumber, tomatoes, and creamy avocado sauce"}

// SATURDAY BRUNCH - SIDES
pigsInABlanketSat = {diet: [], time: brh, date: sat, description: "Mini bratwurst sausages in the center of a fluffy wrap"}
herbFriesSat = {diet: [gnFree, vg, veg], time: brh, date: sat, description: "French fries with oregano and thyme"}
meatloversChiliSat = {diet: [], time: brh, date: sat, description: "Chili with a hearty portion of beef mince"}
taterTotsSat = {diet: [ gnFree, vg, veg], time: brh, date: sat, description: "Crispy tater tots with salt"}


// SATURDAY DINNER - ENTREES 
chickenFingersSat = {diet: [kos,hal], time: dr, date: sat, description: "Breaded Chicken Fingers"}
jerkedChickenSat ={diet: [hal, gnFree], time:dr, date: sat, description: "Oven Baked Jerk Chicken served over white rice"}
tofuWVeggiesSat = {diet: [veg, vg, gnFree], time: dr, date: sat, description: "Tofu Bowl with quinoa base and vegetable salad"}
chickenBowlSat = {diet: [kos, hal], time: dr, date: sat, description: "Warm Hearty Chicken Noodle Bowl with an assortment of vegetables"}
pineapplePorkCutletSat = {diet: [gnFree], time: dr, date: sat, description: "Pineapple Pork Cutlet served with rice"}
pepperoniPizzaSat = {diet: [], time: dr, date: sat, description: "Pepperoni pizza with homemade tomato sauce"}
hawaiianPizzaSat = {diet: [], time: dr, date: sat, description: "Ham and pineapple pizza with homemade tomato sauce"}


// SATURDAY DINNER - SIDES
mashedPotatoesSat = {diet: [veg, kos, hal], time: dr, date: sat, description: "Warm and freshly made mashed potatoes"}
asianNoodleSaladSat = {diet: [hal, vg,  hal, veg], time: dr, date: sat, description: "Soba noodles with fresh vegetables and a sweet and savory sauce"}
bratwurstCorndogSat = {diet: [], time: dr, date: sat, description: "Bratwurst sausage in the center of a corn dog outside"}

//////////////////////////////////////////////////////////// SUNDAY DISHES ////////////////////////////////////////////////////////////

// SUNDAY BRUNCH
pineappleSmoothieSun = {diet: [hal, gnFree, veg, kos, hal, vg], time: brh, date: sun, description: "Pineapples, coconut milk, and vegan ice cream"}
chickenAndWafflesSun = {diet: [kos], time: brh, date: sun, description: "Crispy fried chicken with buttery waffles"}
fishTacoSun = {diet: [hal, kos], time: brh, date: sun, description: "Cajun-style tilapia on corn tortilla"}
breakfastSandwichSun = {diet: [hal, kos], time: brh, date: sun, description: "Choice of sausage, egg, and cheese or bacon, egg, and cheese"}
blueberryPancakeSun = {diet: [vg, veg, hal, kos], time: brh, date: sun, description: "Fresh blueberries on regular pancakes"}
bananaSmoothieSun = {diet: [hal, gnFree, veg, kos, hal], time: brh, date: sun, description: "Bananas, low-fat milk, and vanilla ice cream"}
eggsBenedictSun = {diet: [hal], time: brh, date: sun, description: "Poached eggs, bacon, arugula on toasted english muffin with hollandaise sauce"}
fruitParfaitSun = {diet: [veg, hal, kos], time: brh, date: sun, description: "Fresh fruit on plain yogurt, topped with crunchy granola"}


// SUNDAY BRUNCH - SIDES
mashedPotatoesSun = {diet: [veg, kos, hal], time: brh, date: sun, description: "Warm and freshly made mashed potatoes"}
meatloversChiliSun = {diet: [], time: brh, date: sun, description: "Chili with a hearty portion of beef mince"}
mozzarellaSticksSun = {diet: [veg, hal, kos], time: brh, date: sun, description: "battered mozzarella served with marinara sauce"}
pigsInABlanketSun = {diet: [], time: brh, date: sun, description: "Mini bratwurst sausages in the center of a fluffy wrap"}
herbFriesSun = {diet: [gnFree, vg, veg], time: brh, date: sun, description: "French fries with oregano and thyme"}


// SUNDAY DINNER - ENTREES 
roastedChickenSun = {diet: [hal, gnFree], time: dr, date:sun, description: "Herb Roasted Chicken with potatoes and zucchini on the side"}
chickenFingersSun = {diet: [kos,hal], time: dr, date: sun, description: "Breaded Chicken Fingers"}
shrimpBowlSun = {diet: [], time: dr, date: sun, description: "Shrimp Bowl with quinoa base and vegetable salad"}
tofuBowlSun = {diet: [vg, veg, hal, kos], time: dr, date: sun, description: "Tofu Bowl with quinoa base and vegetable salad"}
steamedMusselsSun = {diet: [], time: dr, date: sun, description: "Steamed Mussels with Garlic and Parsley"}
jerkedChickenSun ={diet: [hal, gnFree], time:dr, date: sun, description: "Oven Baked Jerk Chicken served over white rice"}
tofuWVeggiesSun = {diet: [veg, vg, gnFree], time: dr, date: sun, description: "Tofu Bowl with quinoa base and vegetable salad"}
hawaiianPizzaSun = {diet: [], time: dr, date: sun, description: "Ham and pineapple pizza with homemade tomato sauce"}


// SUNDAY DINNER - SIDES
roastedveggiesSun = {diet: [hal, gnFree, vg, kos, hal, veg], time: dr, date: sun, description: "Oven roasted vegetables with rosemary and garlic"}


/////// DONT WORRY ABOUT THIS PART

// Dorm dishes format | DormDishes = {entree: {diet:["vegan", "halal"], time:"dinner", date:"date", calories: 500}}
bakerDishes = {"Entrees": {"Eggs Benedict Mon":eggsBenedictMon, "Scrambled Tofu Mon":tofuBowlBreakfastMon, "Fruit Parfait Mon":fruitParfaitMon, "Scrambled Eggs Mon":scrambledEggsMon,
							"Breakfast Sandwich Tue":breakfastSandwichTue, "Blueberry Pancake Tue":blueberryPancakeTue, "Pineapple Smoothie Tue":pineappleSmoothieTue, "Banana Smoothie Tue":bananaSmoothieTue, 
							"Scrambled Eggs Wed":scrambledEggsWed, "Oatmeal Wed":oatmealWed, "Eggs Benedict Wed":eggsBenedictWed, "Tofu Bowl Breakfast Wed": tofuBowlBreakfastWed, 
							"Breakfast Sandwich Thr": breakfastSandwichTr, "Fruit Parfait Thr":fruitParfaitTr, "Chicken and Waffles Thr":chickenAndWafflesTr, "Eggs Benedict Thr":eggsBenedictTr, 
							"Pineapple Smoothie Fri":pineappleSmoothieFr, "Fish Taco Fri":fishTacoFr, "Chicken and Waffles Fri":chickenAndWafflesFr, 
							"Banana Smoothie Sat":bananaSmoothieSat, "Eggs Benedict Sat":eggsBenedictSat, "Fruit Parfait Sat":fruitParfaitSat,"Tofu Bowl Breakfast Sat":tofuBowlBreakfastSat,
							"Pineapple Smoothie Sun": pineappleSmoothieSun, "Chicken And Waffles Sun": chickenAndWafflesSun, "Fish Taco Sun":fishTacoSun, "Breakfast Sandwich Sun":breakfastSandwichSun, 

							"Roasted Chicken Mon":roastedChickenMon, "Vegetable Medley Mon":vegetableMedleyMon, "Chicken Fingers Mon":chickenFingersMon, "Chicken Bowl Mon":chickenBowlMon, "Shrimp Bowl Mon":shrimpBowlMon, 
						 	"Vegetable Medley Tue":vegetableMedleyTue, "Chicken Bowl Tue":chickenBowlTue, "Tofu Bowl Tue":tofuBowlTue, "Steamed Mussels Tue":steamedMusselsTue, "Grilled Pork OverRice Tue":grilledPorkOverRiceTue, 
						  	"Chicken Fingers Wed":chickenFingersWed, "Shrimp Bowl Wed":shrimpBowlWed, "Tofu Bowl Wed":tofuBowlWed, "Chicken Soup Wed":chickenSoupWed, 
						  	"Shrimp Bowl Thr":shrimpBowlTr, "Roasted Chicken Thr":roastedChickenTr, "Steamed Mussels Thr":steamedMusselsTr, "Grilled Pork OverRice Thr":grilledPorkOverRiceTr, 
						  	"Vegetable Medley Fri":vegetableMedleyFr, "Chicken Bowl Fri":chickenBowlFr, "Tofu Bowl Fri":tofuBowlFr, "Grilled Pork Over Rice Fri":grilledPorkOverRiceFr, 
						  	"Chicken Fingers Sat": chickenFingersSat, "Jerked Chicken Sat":jerkedChickenSat, "Tofu with Veggies Sat":tofuWVeggiesSat,"Chicken Bowl Sat":chickenBowlSat, 
						  	"Roasted Chicken Sun":roastedChickenSun, "Chicken Fingers Sun":chickenFingersSun, "Shrimp Bowl Sun":shrimpBowlSun, "Tofu Bowl Sun":tofuBowlSun
						  }, 
				
				"Sides": { "Pigs in a Blanket Sat":pigsInABlanketSat, "Herb Fries Sat":herbFriesSat, "Meat Lovers Chili Sat":meatloversChiliSat, "Tater Tots Sat":taterTotsSat, 
						   "Mashed Potatoes Sun":mashedPotatoesSun, "Meat lovers Chili Sun":meatloversChiliSun, "Mozzarella Sticks Sun":mozzarellaSticksSun, "Pigs In A Blanket Sun":pigsInABlanketSun, "Herb Fries Sun":herbFriesSun, 

						   "Mashed Potatoes Mon":mashedPotatoesMon, "Roasted Veggies Mon":roastedveggiesMon, "Steamed Corn Mon":steamedCornMon, "Herb Fries Mon":herbFriesMon, 
						   "Truffle Fries Tue":truffleFriesTue, "Tater Tots Tue":taterTotsTue, "Chips and Hummus Tue":chipsAndHummusTue, "Asian Noodle Salad Tue":asianNoodleSaladTue,
						   "Herb Fries Wed":herbFriesWed, "Cheesy Tater Tots Wed":cheesyTaterTotsWed, "Collard Greens Wed":collardGreensWed, "Bratwurst Corndog Wed":bratwurstCorndogWed, 
						   "Tater Tots Thr":taterTotsTr, "Waffle Fries Thr":waffleFriesTr, "Bratwurst Corndog Thr":bratwurstCorndogTr, "Truffle Fries Thr":truffleFriesTr, 
						   "Collard Greens Fri":collardGreensFr, "Cheesy Tater Tots Fri":cheesyTaterTotsFr,"Steamed Corn Fri":steamedCornFr,"Chips And Hummus Fri":chipsAndHummusFr, 
						   "Mashed Potatoes Sat":mashedPotatoesSat, "Asian Noodle Salad Sat":asianNoodleSaladSat, "Bratwurst Corndog Sat":bratwurstCorndogSat,
						   "Roasted Veggies Sun":roastedveggiesSun 
						 }
				}

maseehDishes = {"Entrees":{ "Fish Taco Mon":fishTacoMon, "Eggs Benedict Mon":eggsBenedictMon, "Fruit Parfait Mon":fruitParfaitMon,  "Scrambled Eggs Mon":scrambledEggsMon,
							"Breakfast Sandwich Tue":breakfastSandwichTue, "Chicken And Waffles Tue":chickenAndWafflesTue, "Scrambled Eggs Tue":scrambledEggsTue, "Banana Smoothie Tue":bananaSmoothieTue, 
							"Oatmeal Wed":oatmealWed, "Scrambled Eggs Wed":scrambledEggsWed, "Fruits Wed":fruitsWed, "Eggs Benedict Wed":eggsBenedictWed, "Blueberry Pancake Wed":blueberryPancakeWed, 
							"Oatmeal Thr":oatmealTr, "Fruits Thr":fruitsTr, "Blueberry Pancake Thr":blueberryPancakeTr, "Fruit Parfait Thr":fruitParfaitTr, 
							"Breakfast Sandwich Fri":breakfastSandwichFr, "Fruit Parfait Fri":fruitParfaitFr, "Eggs Benedict Fri":eggsBenedictFr, "Oatmeal Fri":oatmealFr,
							"Chicken Quesadilla Sat":chickenQuesadillaSat, "Poke Bowl Sat":pokeBowlSat, "Banana Smoothie Sat":bananaSmoothieSat, "Eggs Benedict Sat":eggsBenedictSat, 
							"Blueberry Pancake Sun":blueberryPancakeSun, "Banana Smoothie Sun":bananaSmoothieSun, "Eggs Benedict Sun":eggsBenedictSun, "Fruit Parfait Sun":fruitParfaitSun, 

							"Vegetable Stirfry Mon":vegetableStirfryMon, "Chicken Parm Mon":chickenParmMon, "Crilled Cheese Mon":grilledCheeseMon, "Salmon Burger Mon":salmonBurgerMon, 
							"Chicken Parm Tue":chickenParmTue, "Chicken Quesadilla Tue":chickenQuesadillaTue, "Grilled Cheese Tue":grilledCheeseTue, "Salmon Burger Tue":salmonBurgerTue, 
							"Tofu Bowl Lunch Wed":tofuBowlLunchWed, "Grilled Cheese Wed":grilledCheeseWed, "Chicken Parm Wed":chickenParmWed, "Chicken Quesadilla Wed":chickenQuesadillaWed, 
							"Salmon Burger Thr":salmonBurgerTr, "Chicken Parm Thr":chickenParmTr, "Chicken Quesadilla Thr":chickenQuesadillaTr, "Grilled Cheese Thr":grilledCheeseTr, 
							"Poke Bowl Fri":pokeBowlFr, "Salmon Burger Fri":salmonBurgerFr, "Chicken Parm Fri":chickenParmFr, "Chicken Quesadilla Fri":chickenQuesadillaFr, "Grilled Cheese Fri":grilledCheeseFr, 

							"Grilled Pork Over Rice Mon":grilledPorkOverRiceMon, "Jerked Chicken Mon":jerkedChickenMon, "Chicken Soup Mon":chickenSoupMon, "Vegetable Soup Mon":vegetableSoupMon,"Chicken Curry Mon":chickenCurryMon, 
							"Vegetable Soup Tue":vegetableSoupTue, "Pineapple Pork Cutlet Tue":pineapplePorkCutletTue, "Pepperoni Pizza Tue":pepperoniPizzaTue, "Hawaiian Pizza Tue":hawaiianPizzaTue, 
							"Tofu W Veggies Wed":tofuWVeggiesWed, "Chicken Curry Wed":chickenCurryWed, "Pineapple Pork Cutlet Wed":pineapplePorkCutletWed, "Pepperoni Pizza Wed":pepperoniPizzaWed, 
							"Grilled Pork OverRice Thr":grilledPorkOverRiceTr, "Vegetable Soup Thr":vegetableSoupTr,"Chicken Curry Thr":chickenCurryTr, "Pineapple PorkCutlet Thr":pineapplePorkCutletTr, 
							"Chicken Soup Fri":chickenSoupFr, "Vegetable Soup Fri":vegetableSoupFr, "Chicken Curry Fri":chickenCurryFr, "Pepperoni Pizza Fri":pepperoniPizzaFr,
							"Pineapple Pork Cutlet Sat":pineapplePorkCutletSat, "Pepperoni Pizza Sat":pepperoniPizzaSat,"Hawaiian Pizza Sat":hawaiianPizzaSat, "Chicken Fingers Sat": chickenFingersSat, 
							"Steamed Mussels Sun":steamedMusselsSun, "Jerked Chicken Sun":jerkedChickenSun,  "Tofu with Veggies Sun":tofuWVeggiesSun, "Hawaiian Pizza Sun":hawaiianPizzaSun
							}, 
				
				"Sides": { 	"Pigs in a Blanket Sat":pigsInABlanketSat, "Herb Fries Sat":herbFriesSat, "Meat Lovers Chili Sat":meatloversChiliSat, "Tater Tots Sat":taterTotsSat, 
						   	"Mashed Potatoes Sun":mashedPotatoesSun, "Meat lovers Chili Sun":meatloversChiliSun, "Mozzarella Sticks Sun":mozzarellaSticksSun, "Pigs In A Blanket Sun":pigsInABlanketSun, "Herb Fries Sun":herbFriesSun, 
						 
						   	"Truffle Fries Mon":truffleFriesMon, "Mozzarella Sticks Mon":mozzarellaSticksMon, "Pigs In A Blanket Mon":pigsInABlanketMon,"Roasted Veggies Mon":roastedveggiesMon, "Tater Tots Mon":taterTotsMon, 
							"Pigs In A Blanket Tue":pigsInABlanketTue, "Mozzarella Sticks Tue":mozzarellaSticksTue, "Roasted Veggies Tue":roastedveggiesTue, "Tater Tots Tue":taterTotsTue, 
							"Roasted Veggies Wed":roastedveggiesWed, "Pigs In A Blanket Wed":pigsInABlanketWed, "Mozzarella Sticks Wed":mozzarellaSticksWed, "Tater Tots Wed":taterTotsWed, 
							"Meat Lovers Chili Thr":meatloversChiliTr, "Asian Noodle Salad Thr":asianNoodleSaladTr, "Tater Tots Thr":taterTotsTr, 
							"Meat Lovers Chili Fri":meatloversChiliFr, "Pigs In A Blanke Fri":pigsInABlankeFr, "Waffle Fries Fri":waffleFriesFr, "Steamed Corn Fri":steamedCornFr, 

							"Steamed Corn Mon":steamedCornMon, "Herb Fries Mon":herbFriesMon, "Bratwurst Corndog Mon":bratwurstCorndogMon, "Meatlovers Chili Mon":meatloversChiliMon, 
							"Truffle Fries Tue":truffleFriesTue, "Tater Tots Tue":taterTotsTue, "Chips and Hummus Tue":chipsAndHummusTue, "Asian Noodle Salad Tue":asianNoodleSaladTue,
						 	"Herb Fries Wed":herbFriesWed, "Cheesy Tater Tots Wed":cheesyTaterTotsWed, "Collard Greens Wed":collardGreensWed, "Bratwurst Corndog Wed":bratwurstCorndogWed, 
						 	"Tater Tots Thr":taterTotsTr, "Waffle Fries Thr":waffleFriesTr, "Bratwurst Corndog Thr":bratwurstCorndogTr, "Truffle Fries Thr":truffleFriesTr, 
						 	"Collard Greens Fri":collardGreensFr, "Cheesy Tater Tots Fri":cheesyTaterTotsFr,"Steamed Corn Fri":steamedCornFr,"Chips And Hummus Fri":chipsAndHummusFr, 
						 	"Mashed Potatoes Sat":mashedPotatoesSat, "Asian Noodle Salad Sat":asianNoodleSaladSat, "Bratwurst Corndog Sat":bratwurstCorndogSat,
						 	"Roasted Veggies Sun":roastedveggiesSun 
						 }
				}

nextDishes = {"Entrees":{ "Fruit Parfait Mon":fruitParfaitMon, "Fish Taco Mon":fishTacoMon, "Tofu Bowl Breakfast Mon":tofuBowlBreakfastMon, "Eggs Benedict Mon":eggsBenedictMon, 
						  "Oatmeal Tue":oatmealTue, "Breakfast Sandwich Tue":breakfastSandwichTue, "Scrambled Eggs Tue":scrambledEggsTue, "Fruits Tue":fruitsTue,
						  "Banana Smoothie Wed": bananaSmoothieWed, "Pineapple Smoothie Wed":pineappleSmoothieWed, "Scrambled Eggs Wed":scrambledEggsWed, "Oatmeal Wed":oatmealWed,
						  "Tofu Bowl Breakfast Thr":tofuBowlBreakfastTr, "Breakfast Sandwich Thr": breakfastSandwichTr, "Fruit Parfait Thr":fruitParfaitTr, "Chicken and Waffles Thr":chickenAndWafflesTr, 
						  "Fruits Fri":fruitsFr, "Pineapple Smoothie Fri":pineappleSmoothieFr, "Fish Taco Fri":fishTacoFr, "Blueberry Pancake Fri":blueberryPancakeFr, 
						  "Fruit Parfait Sat":fruitParfaitSat,"Tofu Bowl Breakfast Sat":tofuBowlBreakfastSat, "Chicken Quesadilla Sat":chickenQuesadillaSat, "Poke Bowl Sat":pokeBowlSat, 
						  "Fish Taco Sun":fishTacoSun, "Breakfast Sandwich Sun":breakfastSandwichSun, "Blueberry Pancake Sun":blueberryPancakeSun, "Banana Smoothie Sun":bananaSmoothieSun, 

						  "Chicken Fingers Mon":chickenFingersMon, "Chicken Bowl Mon":chickenBowlMon, "Shrimp Bowl Mon":shrimpBowlMon, "Grilled Pork Over Rice Mon":grilledPorkOverRiceMon, "Jerked Chicken Mon":jerkedChickenMon, 
						  "Tofu Bowl Tue":tofuBowlTue, "Steamed Mussels Tue":steamedMusselsTue, "Grilled Pork OverRice Tue":grilledPorkOverRiceTue, "Vegetable Soup Tue":vegetableSoupTue, 
						  "Shrimp Bowl Wed":shrimpBowlWed, "Tofu Bowl Wed":tofuBowlWed, "Chicken Soup Wed":chickenSoupWed, "Tofu W Veggies Wed":tofuWVeggiesWed, 
						  "Steamed Mussels Thr":steamedMusselsTr, "Grilled Pork OverRice Thr":grilledPorkOverRiceTr, "Vegetable Soup Thr":vegetableSoupTr,"Chicken Curry Thr":chickenCurryTr, 							
						  "Chicken Bowl Fri":chickenBowlFr, "Tofu Bowl Fri":tofuBowlFr, "Grilled Pork Over Rice Fri":grilledPorkOverRiceFr, "Chicken Soup Fri":chickenSoupFr, 
						  "Tofu with Veggies Sat":tofuWVeggiesSat, "Chicken Bowl Sat":chickenBowlSat, "Pineapple Pork Cutlet Sat":pineapplePorkCutletSat, "Pepperoni Pizza Sat":pepperoniPizzaSat,
						  "Shrimp Bowl Sun":shrimpBowlSun, "Tofu Bowl Sun":tofuBowlSun, "Steamed Mussels Sun":steamedMusselsSun, "Jerked Chicken Sun":jerkedChickenSun
						},
				
				"Sides": { 	"Pigs in a Blanket Sat":pigsInABlanketSat, "Herb Fries Sat":herbFriesSat, "Meat Lovers Chili Sat":meatloversChiliSat, "Tater Tots Sat":taterTotsSat, 
						   	"Mashed Potatoes Sun":mashedPotatoesSun, "Meat lovers Chili Sun":meatloversChiliSun, "Mozzarella Sticks Sun":mozzarellaSticksSun, "Pigs In A Blanket Sun":pigsInABlanketSun, "Herb Fries Sun":herbFriesSun, 
						 
						   	"Roasted Veggies Mon":roastedveggiesMon, "Steamed Corn Mon":steamedCornMon, "Herb Fries Mon":herbFriesMon, "Bratwurst Corndog Mon":bratwurstCorndogMon, 
						 	"Truffle Fries Tue":truffleFriesTue, "Tater Tots Tue":taterTotsTue, "Chips and Hummus Tue":chipsAndHummusTue, "Asian Noodle Salad Tue":asianNoodleSaladTue,
						 	"Herb Fries Wed":herbFriesWed, "Cheesy Tater Tots Wed":cheesyTaterTotsWed, "Collard Greens Wed":collardGreensWed, "Bratwurst Corndog Wed":bratwurstCorndogWed, 
						 	"Tater Tots Thr":taterTotsTr, "Waffle Fries Thr":waffleFriesTr, "Bratwurst Corndog Thr":bratwurstCorndogTr, "Truffle Fries Thr":truffleFriesTr, 
						 	"Collard Greens Fri":collardGreensFr, "Cheesy Tater Tots Fri":cheesyTaterTotsFr,"Steamed Corn Fri":steamedCornFr,"Chips And Hummus Fri":chipsAndHummusFr, 
						 	"Mashed Potatoes Sat":mashedPotatoesSat, "Asian Noodle Salad Sat":asianNoodleSaladSat, "Bratwurst Corndog Sat":bratwurstCorndogSat,
						 	"Roasted Veggies Sun":roastedveggiesSun 
						 }
				}

mccormickDishes = {"Entrees":{"Blueberry Pancake Mon":blueberryPancakeMon, "Oatmeal Mon":oatmealMon, "Fish Taco Mon":fishTacoMon, "Eggs Benedict Mon":eggsBenedictMon, 
							  "Fruits Tue":fruitsTue, "Blueberry Pancake Tue":blueberryPancakeTue, "Banana Smoothie Tue":bananaSmoothieTue, "Pineapple Smoothie Tue":pineappleSmoothieTue,
							  "Fruits Wed":fruitsWed, "Eggs Benedict Wed":eggsBenedictWed, "Blueberry Pancake Wed":blueberryPancakeWed, "Fruit Parfait Wed":fruitParfaitWed, 
							  "Eggs Benedict Thr":eggsBenedictTr, "Oatmeal Thr":oatmealTr, "Fruits Thr":fruitsTr, "Blueberry Pancake Thr":blueberryPancakeTr,
							  "Chicken and Waffles Fri":chickenAndWafflesFr, "Breakfast Sandwich Fri":breakfastSandwichFr, "Fruit Parfait Fri":fruitParfaitFr, "Eggs Benedict Fri":eggsBenedictFr, 
							  "Banana Smoothie Sat":bananaSmoothieSat, "Eggs Benedict Sat":eggsBenedictSat, "Fruit Parfait Sat":fruitParfaitSat,"Tofu Bowl Breakfast Sat":tofuBowlBreakfastSat, 
							  "Eggs Benedict Sun":eggsBenedictSun, "Fruit Parfait Sun":fruitParfaitSun, "Pineapple Smoothie Sun": pineappleSmoothieSun, "Chicken And Waffles Sun": chickenAndWafflesSun, 

							  "Grilled Pork Over Rice Mon":grilledPorkOverRiceMon, "Jerked Chicken Mon":jerkedChickenMon, "Chicken Soup Mon":chickenSoupMon, "Vegetable Soup Mon":vegetableSoupMon, "Chicken Curry Mon":chickenCurryMon, 
							  "Pineapple Pork Cutlet Tue":pineapplePorkCutletTue, "Pepperoni Pizza Tue":pepperoniPizzaTue, "Hawaiian Pizza Tue":hawaiianPizzaTue, "Vegetable Medley Tue":vegetableMedleyTue,
							  "Chicken Curry Wed":chickenCurryWed, "Pineapple Pork Cutlet Wed":pineapplePorkCutletWed, "Pepperoni Pizza Wed":pepperoniPizzaWed, "Chicken Fingers Wed":chickenFingersWed, 
							  "Grilled Pork OverRice Thr":grilledPorkOverRiceTr, "Vegetable Soup Thr":vegetableSoupTr,"Chicken Curry Thr":chickenCurryTr, "Pineapple PorkCutlet Thr":pineapplePorkCutletTr,
							  "Vegetable Soup Fri":vegetableSoupFr, "Chicken Curry Fri":chickenCurryFr, "Pepperoni Pizza Fri":pepperoniPizzaFr, "Tofu Bowl Fri":tofuBowlFr, 
							  "Jerked Chicken Sat":jerkedChickenSat, "Tofu with Veggies Sat":tofuWVeggiesSat, "Pepperoni Pizza Sat":pepperoniPizzaSat,"Hawaiian Pizza Sat":hawaiianPizzaSat
							  },
				"Sides": { 	"Pigs in a Blanket Sat":pigsInABlanketSat, "Herb Fries Sat":herbFriesSat, "Meat Lovers Chili Sat":meatloversChiliSat, "Tater Tots Sat":taterTotsSat, 
						    "Mashed Potatoes Sun":mashedPotatoesSun, "Meat lovers Chili Sun":meatloversChiliSun, "Mozzarella Sticks Sun":mozzarellaSticksSun, "Pigs In A Blanket Sun":pigsInABlanketSun, "Herb Fries Sun":herbFriesSun, 
							
							"Mashed Potatoes Mon":mashedPotatoesMon, "Roasted Veggies Mon":roastedveggiesMon, "Steamed Corn Mon":steamedCornMon, "Herb Fries Mon":herbFriesMon, 
							"Truffle Fries Tue":truffleFriesTue, "Tater Tots Tue":taterTotsTue, "Chips and Hummus Tue":chipsAndHummusTue, "Asian Noodle Salad Tue":asianNoodleSaladTue,	
						 	"Herb Fries Wed":herbFriesWed, "Cheesy Tater Tots Wed":cheesyTaterTotsWed, "Collard Greens Wed":collardGreensWed, "Bratwurst Corndog Wed":bratwurstCorndogWed, 
						 	"Tater Tots Thr":taterTotsTr, "Waffle Fries Thr":waffleFriesTr, "Bratwurst Corndog Thr":bratwurstCorndogTr, "Truffle Fries Thr":truffleFriesTr, 
						 	"Collard Greens Fri":collardGreensFr, "Cheesy Tater Tots Fri":cheesyTaterTotsFr,"Steamed Corn Fri":steamedCornFr,"Chips And Hummus Fri":chipsAndHummusFr, 
						 	"Mashed Potatoes Sat":mashedPotatoesSat, "Asian Noodle Salad Sat":asianNoodleSaladSat, "Bratwurst Corndog Sat":bratwurstCorndogSat,
						 	"Roasted Veggies Sun":roastedveggiesSun 
						 }
				}

simmonsDishes = {"Entrees":{"Eggs Benedict Mon":eggsBenedictMon, "Blueberry Pancake Mon":blueberryPancakeMon, "Fruit Parfait Mon":fruitParfaitMon, "Tofu Bowl Breakfast Mon":tofuBowlBreakfastMon,
							"Scrambled Eggs Tue":scrambledEggsTue,"Oatmeal Tue":oatmealTue, "Breakfast Sandwich Tue":breakfastSandwichTue, "Chicken And Waffles Tue":chickenAndWafflesTue,
							"Tofu Bowl Breakfast Wed": tofuBowlBreakfastWed, "Banana Smoothie Wed": bananaSmoothieWed, "Pineapple Smoothie Wed":pineappleSmoothieWed, "Scrambled Eggs Wed":scrambledEggsWed, 
							"Fruit Parfait Thr":fruitParfaitTr, "Tofu Bowl Breakfast Thr":tofuBowlBreakfastTr, "Breakfast Sandwich Thr": breakfastSandwichTr,"Fruit Parfait Thr":fruitParfaitTr, 
							"Oatmeal Fri":oatmealFr, "Fruits Fri":fruitsFr, "Pineapple Smoothie Fri":pineappleSmoothieFr, "Fish Taco Fri":fishTacoFr, 
							"Chicken Quesadilla Sat":chickenQuesadillaSat, "Poke Bowl Sat":pokeBowlSat, "Banana Smoothie Sat":bananaSmoothieSat, "Eggs Benedict Sat":eggsBenedictSat, 
							"Pineapple Smoothie Sun": pineappleSmoothieSun, "Chicken And Waffles Sun": chickenAndWafflesSun, "Fish Taco Sun":fishTacoSun, "Breakfast Sandwich Sun":breakfastSandwichSun, "Blueberry Pancake Sun":blueberryPancakeSun, 

							"Jerked Chicken Mon":jerkedChickenMon, "Chicken Soup Mon":chickenSoupMon, "Vegetable Soup Mon":vegetableSoupMon,"Chicken Curry Mon":chickenCurryMon, "Pepperoni Pizza Mon":pepperoniPizzaMon, 
							"Vegetable Soup Tue":vegetableSoupTue, "Pineapple Pork Cutlet Tue":pineapplePorkCutletTue, "Pepperoni Pizza Tue":pepperoniPizzaTue, "Hawaiian Pizza Tue":hawaiianPizzaTue, 
							"Tofu W Veggies Wed":tofuWVeggiesWed, "Chicken Curry Wed":chickenCurryWed, "Pineapple Pork Cutlet Wed":pineapplePorkCutletWed, "Pepperoni Pizza Wed":pepperoniPizzaWed, 
							"Pineapple PorkCutlet Thr":pineapplePorkCutletTr, "Hawaiian Pizza Thr":hawaiianPizzaTr, "Shrimp Bowl Thr":shrimpBowlTr, "Roasted Chicken Thr":roastedChickenTr, 
							"Grilled Pork Over Rice Fri":grilledPorkOverRiceFr, "Chicken Soup Fri":chickenSoupFr, "Vegetable Soup Fri":vegetableSoupFr, "Chicken Curry Fri":chickenCurryFr, 
							"Tofu with Veggies Sat":tofuWVeggiesSat,"Chicken Bowl Sat":chickenBowlSat, "Pineapple Pork Cutlet Sat":pineapplePorkCutletSat, "Pepperoni Pizza Sat":pepperoniPizzaSat,
							"Roasted Chicken Sun":roastedChickenSun, "Chicken Fingers Sun":chickenFingersSun, "Tofu with Veggies Sun":tofuWVeggiesSun, "Hawaiian Pizza Sun":hawaiianPizzaSun
							},
				"Sides": { "Pigs in a Blanket Sat":pigsInABlanketSat, "Herb Fries Sat":herbFriesSat, "Meat Lovers Chili Sat":meatloversChiliSat, "Tater Tots Sat":taterTotsSat, 
				           "Mashed Potatoes Sun":mashedPotatoesSun, "Meat lovers Chili Sun":meatloversChiliSun, "Mozzarella Sticks Sun":mozzarellaSticksSun, "Pigs In A Blanket Sun":pigsInABlanketSun, "Herb Fries Sun":herbFriesSun, 
						 	
						 	"Steamed Corn Mon":steamedCornMon, "Herb Fries Mon":herbFriesMon, "Bratwurst Corndog Mon":bratwurstCorndogMon, "Meatlovers Chili Mon":meatloversChiliMon,
						 	"Truffle Fries Tue":truffleFriesTue, "Tater Tots Tue":taterTotsTue, "Chips and Hummus Tue":chipsAndHummusTue, "Asian Noodle Salad Tue":asianNoodleSaladTue, 
						 	"Herb Fries Wed":herbFriesWed, "Cheesy Tater Tots Wed":cheesyTaterTotsWed, "Collard Greens Wed":collardGreensWed, "Bratwurst Corndog Wed":bratwurstCorndogWed, 
						 	"Tater Tots Thr":taterTotsTr, "Waffle Fries Thr":waffleFriesTr, "Bratwurst Corndog Thr":bratwurstCorndogTr, "Truffle Fries Thr":truffleFriesTr, 
						 	"Collard Greens Fri":collardGreensFr, "Cheesy Tater Tots Fri":cheesyTaterTotsFr,"Steamed Corn Fri":steamedCornFr,"Chips And Hummus Fri":chipsAndHummusFr, 
						 	"Mashed Potatoes Sat":mashedPotatoesSat, "Asian Noodle Salad Sat":asianNoodleSaladSat, "Bratwurst Corndog Sat":bratwurstCorndogSat,
						 	"Roasted Veggies Sun":roastedveggiesSun 
						 }
				}

// global variables used throughout the code    
const ALLDISHES = {"baker": bakerDishes, "next": nextDishes, "mccormick": mccormickDishes, "simmons":simmonsDishes, "maseeh": maseehDishes}
const SPECIALS = ["Sushi Night at Baker Dorm", "Soul Food in McCormick", "Pizza Night in Next House", "Vegan Friendly Food in Simmons", "There is Nothing Special in Maseeh"] 
const favoriteDishes = new favorites();
var dormList = ["baker", "maseeh", "mccormick", "next", "simmons","specials"]; // dormList is the list of active dorms on the page
var dormCheckbox = {"baker": false, "mccormick": false, "simmons": false, "next": false, "maseeh": false} 
// sessionStorage.setItem("profileDormStorage", JSON.stringify(["specials"]));

