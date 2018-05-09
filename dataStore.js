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
eggsBenedictMon = {diet: [hal], time: brk, date: mon, description: "Poached eggs, bacon, arugula on toasted English muffin with hollandaise sauce"}
fishTacoMon = {diet: [hal, kos], time: brk, date: mon, description: "Cajun-style tilapia on corn tortilla"}
fruitParfaitMon = {diet: [veg, hal, kos], time: brk, date: mon, description: "Fresh fruit on plain yogurt, topped with crunchy granola"}


// MONDAY LUNCH - ENTREES 
vegetableStirfryMon = {diet: [veg], time: lh, date: mon, description: "Stir fried veggies in a light brown sauce" }
chickenParmMon = {diet: [], time: lh, date: mon, description: "Breaded chicken with mozzarella cheese and marinara sauce" }
grilledCheeseMon = {diet: [veg, hal, kos], time: lh, date: mon, description: "Toasted sandwich with melted cheese" }
salmonBurgerMon = {diet: [], time: lh, date: mon, description: "burger with grilled salmon, tomato, and lettuce"}

// MONDAY LUNCH - SIDES
truffleFriesMon = {diet: [hal, gnFree, vg, veg], time: lh, date: mon, description: "French fries with truffle butter"}


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
chickenAndWafflesTue = {diet: [kos], time: brk, date: tue, description: "Crispy fried chicken with buttery waffles"}
blueberryPancakeTue = {diet: [vg, veg, hal, kos], time: brk, date: tue, description: "Fresh blueberries on regular pancakes"}

// TUESDAY LUNCH 
chickenParmTue = {diet: [], time: lh, date: tue, description: "Breaded chicken with mozzarella cheese and marinara sauce" }
chickenQuesadillaTue = {diet: [], time: lh, date: tue, description: "Flour tortilla with cheese and chicken" }

// TUESDAY LUNCH - SIDES
pigsInABlanketTue = {diet: [], time: lh, date: tue, description: "Mini bratwurst sausages in the center of a fluffy wrap"}
mozzarellaSticksTue = {diet: [veg, hal, kos], time: lh, date: tue, description: "Battered mozzarella served with marinara sauce"}


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

// WEDNESDAY LUNCH - SIDES 
roastedveggiesWed = {diet: [hal, gnFree, vg, kos, hal, veg], time: lh, date: wed, description: "Oven roasted vegetables with rosemary and garlic"}
pigsInABlanketWed = {diet: [], time: lh, date: wed, description: "Mini bratwurst sausages in the center of a fluffy wrap"}

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

// THURSDAY LUNCH - ENTREES
salmonBurgerTr = {diet: [], time: lh, date: tr, description: "burger with grilled salmon, tomato, and lettuce"}

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
fishTacFr = {diet: [hal, kos], time: brk, date: fr, description: "Cajun-style tilapia on corn tortilla"}
blueberryPancakeFr = {diet: [vg, veg, hal, kos], time: brk, date: fr, description: "Fresh blueberries on regular pancakes"}
chickenAndWafflesFr = {diet: [kos], time: brk, date: fr, description: "Crispy fried chicken with buttery waffles"}

// FRIDAY LUNCH - ENTREES 
pokeBowlFr = {diet: [], time: lh, date: fr, description: "Rice bowl topped with salmon sashimi, cucumber, tomatoes, and creamy avocado sauce"}
salmonBurgerFr = {diet: [], time: lh, date: fr, description: "burger with grilled salmon, tomato, and lettuce"}


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
pigsInABlanketSat = {diet: [], time: brh, date: sun, description: "Mini bratwurst sausages in the center of a fluffy wrap"}
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


// SUNDAY BRUNCH - SIDES
mashedPotatoesSun = {diet: [veg, kos, hal], time: brh, date: sun, description: "Warm and freshly made mashed potatoes"}
meatloversChiliSun = {diet: [], time: brh, date: sun, description: "Chili with a hearty portion of beef mince"}
mozzarellaSticksSun = {diet: [veg, hal, kos], time: brh, date: sun, description: "battered mozzarella served with marinara sauce"}


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
bakerDishes = {"Entrees": {"Pepperoni Pizza":pepperoniPizzaMon, "Roasted Chicken": roastedChickenMon, "Vegetable Medley":vegetableMedleyMon, "Chicken Fingers":chickenFingersMon, "Chicken Curry": chickenCurryMon, "Shrimp Bowl":shrimpBowlMon,
						   "Vegetable Stir Fry":vegetableStirfryMon,
						   "Eggs Benedict": eggsBenedictMon, "Scrambled Tofu":tofuBowlBreakfastMon, "Fruit Parfait":fruitParfaitMon, "Fresh Fruits": fruitsWed,  
						   "Jerked Tofu With Veggies": tofuWVeggiesSat, "Pineapple Pork Cutlet": pineapplePorkCutletTue,	"Hawaiian Pizza":hawaiianPizzaTue, 

						  }, 
				
				"Sides": {"Mashed Potatoes":mashedPotatoesMon, "Roasted Vegetables":roastedveggiesMon, "Steamed Corn":steamedCornMon, "Herb Fries":herbFriesMon, "Meat Lovers Chili":meatloversChiliMon,
						  "Truffle Fries": truffleFriesMon,

						  "Chicken Curry":chickenCurryTr, "Pineapple Pork Cutlet": pineapplePorkCutletTr, "Cheesy Tater Tots":cheesyTaterTotsFr, "Asian Noodle Salad": asianNoodleSaladTr, "Banana Smoothie":bananaSmoothieSat, "Collard Greens":collardGreensFr}}

maseehDishes = {"Entrees":{"Pepperoni Pizza":pepperoniPizzaMon, "Vegetable Soup":vegetableSoupMon, "Chicken Soup":chickenSoupMon, "Jerked Chicken":jerkedChickenMon, "Chicken Fingers":chickenFingersMon,
						   "Vegetable Stir Fry":vegetableStirfryMon,
						   "Fish Taco":fishTacoMon, "Eggs Benedict":eggsBenedictMon, "Fruit Parfait":fruitParfaitMon,

						   "Pepperoni Pizza":pepperoniPizzaTue, "Hawaiian Pizza":hawaiianPizzaTr,
						   "Scrambled Tofu":tofuBowlBreakfastMon,"Shrimp Bowl": shrimpBowlMon, "Chicken Bowl":chickenBowlTue, "Shrimp Bowl":shrimpBowlTr, "Chicken Soup": chickenSoupFr, "Vegetable Soup": vegetableSoupMon, "Chicken Curry":chickenCurryWed, "Pineapple Pork Cutlet": pineapplePorkCutletSat}, 
				
				"Sides": {"Truffle Fries":truffleFriesMon, "Chips and Hummus":chipsAndHummusTue, "Tater Tots":taterTotsTr, "Pineapple Smoothie": pineappleSmoothieFr, "Bratwurst Corndog":bratwurstCorndogTr, "Meat Lover's Chili":meatloversChiliMon}}

nextDishes = {"Entrees":{"Chicken Fingers":chickenFingersMon, "Grilled Pork Over Rice":grilledPorkOverRiceMon, "Vegetable Medley":vegetableMedleyMon, "Shrimp Bowl":shrimpBowlMon, "Roasted Chicken":roastedChickenMon, "Chicken Curry":chickenCurryMon, 
						 "Vegetable Stir Fry":vegetableStirfryMon, 
						 "Fruit Parfait":fruitParfaitMon, "Fish Taco":fishTacoMon,  
						 "Eggs Benedict":eggsBenedictMon, "Fruit Parfait":fruitParfaitMon, "Scrambled Tofu":tofuBowlBreakfastMon, 
						 "Pepperoni Pizza":pepperoniPizzaFr, "Eggs Benedict": eggsBenedictTr, "Breakfast Tofu":tofuBowlBreakfastSat,"Tofu Bowl": tofuBowlTue, "Steamed Mussels": steamedMusselsTr, "Grilled Pork Over Basmati Rice": grilledPorkOverRiceMon, "Chicken Curry": chickenCurryMon, "Jerked Tofu With Veggies": tofuWVeggiesSat, "Pineapple Pork Cutlet": pineapplePorkCutletTr}, 
				"Sides": {"Chicken Curry":chickenCurryFr,
				"Truffle Fries":truffleFriesTue, "Tater Tots":taterTotsTue, "Chips and Hummus":chipsAndHummusTue, "Pineapple Smoothie": pineappleSmoothieFr, "Bratwurst Corndog":bratwurstCorndogTr}}

mccormickDishes = {"Entrees":{"Chicken Bowl":chickenBowlMon, "Jerked Chicken":jerkedChickenMon,
							  
							  "Breakfast Tofu":tofuBowlBreakfastSat,"Roasted Chicken": roastedChickenTr, "Vegetable Medley":vegetableMedleyTue, "Chicken Fingers":chickenFingersSat, "Vegetable Soup": vegetableSoupTr, "Chicken Curry":chickenCurryTr, "Pineapple Pork Cutlet": pineapplePorkCutletSat},
				"Sides": {"Pineapple Pork Cutlet": pineapplePorkCutletSat,"Cheesy Tater Tots":cheesyTaterTotsFr, "Waffle Fries":waffleFriesTr, "Asian Noodle Salad":asianNoodleSaladTr, "Banana Smoothie":bananaSmoothieSat, "Collard Greens":collardGreensFr, "Pigs in a Blanket":pigsInABlanketTue, "Meat Lover's Chili":meatloversChiliTr}}

simmonsDishes = {"Entrees":{"Chicken Parm": chickenParmTue, "Truffle Fries": truffleFriesTue, "Meat Chili": meatloversChiliTr,"Chicken and Waffles":chickenAndWafflesTr, "Salmon Burger": salmonBurgerTr, "Blueberry Pancakes": blueberryPancakeFr, "Chicken Curry": chickenCurryFr, "Tofu Bowl": tofuBowlFr, "Fruit Parfait": fruitParfaitSat, "Eggs Benedict" : eggsBenedictSat, 
				"Tofu and Veggies": tofuWVeggiesSat, "Chicken Bowl": chickenBowlSat, "Pineapple Smoothie": pineappleSmoothieSun , "Fish Tacos": fishTacoSun, "Pepperoni Pizza":pepperoniPizzaTue, "Chicken Fingers": chickenFingersSun, "Jerk Chicken": jerkedChickenSun, "Hawaiian Pizza":hawaiianPizzaTue,"Breakfast Tofu":tofuBowlBreakfastSat,"Roasted Chicken": roastedChickenTr, "Vegetable Medley":vegetableMedleyTue, 
				"Chicken Fingers":chickenFingersSat, "Vegetable Soup": vegetableSoupTr, "Chicken Curry":chickenCurryTr, "Pineapple Pork Cutlet": pineapplePorkCutletSat}, 
				"Sides": {"Herb Fries": herbFriesSat, "Truffle Fries": truffleFriesTue, "Chips and Hummus":chipsAndHummusTue, "Asian Noodle Salad": asianNoodleSaladTr, "Pineapple Smoothie": pineappleSmoothieFr, "Pigs in a Blanket":pigsInABlanketTue}}

// global variables used throughout the code    
const ALLDISHES = {"baker": bakerDishes, "next": nextDishes, "mccormick": mccormickDishes, "simmons":simmonsDishes, "maseeh": maseehDishes}
const SPECIALS = ["Sushi Night at Baker Dorm", "Soul Food in McCormick", "Pizza Night in Next House", "Vegan Friendly Food in Simmons", "There is Nothing Special in Maseeh"] 
const favoriteDishes = new favorites();
var dormList = ["baker", "maseeh", "mccormick", "next", "simmons","specials"]; // dormList is the list of active dorms on the page
var dormCheckbox = {"baker": false, "mccormick": false, "simmons": false, "next": false, "maseeh": false} 
// sessionStorage.setItem("profileDormStorage", JSON.stringify(["specials"]));

