// This is the data store for our document. 

// data object used to store favorites
class favorites { 
	//creates a new instance of favorites 
	constructor() {
		this.dishes = {"Entrees": [], "Sides":[], "Vegetables":[], "Dessert":[]}
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

	// checkes if dishName is in Favorites for dishType 
	isIn(dishType, dishName) { 
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
hal = "halal"; gnFree = "gluten free"; vg = "vegan"; veg = "vegeterian"; kos = "kosher"
brk = "breakfast"; brh = "brunch"; lh = "lunch"; dr = "dinner"; ln = "late night"
mon = "05/07/2018"; tue = "05/08/2018"; wed = "05/09/2018"; tr = "05/10/2018"; fr = "05/11/2018"; sat = "05/12/2018"; sun = "05/13/2018";


//////////////////////////////////////////////////////////// MONDAY DISHES ////////////////////////////////////////////////////////////

// MONDAY BREAKFAST - ENTREES
tofuBowlBreakfastMon = {diet: [vg, veg, hal, kos], time: brk, date: mon, description: "Vegan scrambled eggs with tofu base"}
eggsBenedictMon = {diet: [hal], time: brk, date: mon, description: "Poached eggs, bacon, arugala on toasted english muffin with hollandaise sauce"}
fishTacoMon = {diet: [hal, kos], time: brk, date: mon, description: "Cajun-style talapia on corn tortilla"}
fruitParfaitMon = {diet: [veg, hal, kos], time: brk, date: mon, description: "Fresh fruit on plain yogurt, topped with crunchy granola"}


// MONDAY LUNCH - ENTREES 
vegetableStirfryMon = {diet: [veg], time: lh, date: mon, description: "stir fried veggies in a light brown sauce" }

// MONDAY LUNCH - SIDES
truffleFriesMon = {diet: [hal, gnFree, vg, veg], time: lh, date: mon, description: "French fries with truffle butter"}


// MONDAY DINNER - ENTREES 
roastedChickenMon = {diet: [hal, gnFree], time: dr, date:mon, description: "Herb Roasted Chicken with potatoes and zuccini on the side"}
vegetableMedleyMon = {diet: [veg, vg, kos, hal, gnFree], time: dr, date:mon, description: "Roasted Vegtable Medley with Rosmary"}
chickenFingersMon = {diet: [kos,hal], time: dr, date: mon, description: "Breaded Chicken Fingers"}
chickenBowlMon = {diet: [kos, hal], time: dr, date: mon, description: "Warm Hearty Chichen Noodle Bowl with an assortment of vegetables"}
shrimpBowlMon = {diet: [], time: dr, date: mon, description: "Shrimp Bowl with quinoa base and vegtable salad"}
grilledPorkOverRiceMon = {diet: [], time: dr, date: mon, description: "Grilled Pork served over Basmati Rice"}
jerkedChickenMon ={diet: [hal, gnFree], time:dr, date: mon, description: "Oven Baked Jerk Chicken served over white rice"}
chickenSoupMon = {diet: [gnFree], time:dr, date: mon, description: "Warm Hearty Chichen Soup with an assortment of vegetables"}
vegetableSoupMon = {diet: [veg, vg, gnFree], time:dr, date: mon, description: "Warm Soup with an assortment of vegetables"}
chickenCurryMon = {diet: [gnFree, hal], time: dr, date: mon, description: "Chicken Curry with basmati rice"}
pepperioniPizzaMon = {diet: [], time: dr, date: mon, description: "Pepperoni pizza with homemade tomato sauce"}

// MONDAY DINNER - SIDES 
mashedPotatoesMon = {diet: [veg, kos, hal], time: dr, date: mon, description: "Warm and freshly made mashed potatoes"}
roastedveggiesMon = {diet: [hal, gnFree, vg, kos, hal, veg], time: dr, date: mon, description: "Oven rosted vegetables with rosmary and garlic"}
steamedCornMon = {diet: [hal, gnFree, vg, kos, hal, veg], time: dr, date: mon, description: "Plain steamed corn"}
herbFriesMon = {diet: [gnFree, vg, veg], time: dr, date: mon, description: "French fries with oregano and thyme"}
bratwurstCorndogMon = {diet: [], time: dr, date: mon, description: "Bratwurst sausage in the center of a corn dog outside"}
meatloversChiliMon = {diet: [], time: dr, date: mon, description: "Chili with a hearty portion of beef mince"}

// MONDAY LATE NIGHT

//////////////////////////////////////////////////////////// TUESDAY DISHES ////////////////////////////////////////////////////////////

// TUESDAY BREAKFAST 
breakfastSandwichTue = {diet: [hal, kos], time: brk, date: tue, description: "Choice of sausage, egg, and cheese or bacon, egg, and cheese"}
chickenAndWafflesTue = {diet: [kos], time: brk, date: tue, description: "Crispy fried chicken with buttery waffles"}
blueberryPancakeTue = {diet: [vg, veg, hal, kos], time: brk, date: tue, description: "Fresh bluberries on regular pancakes"}

// TUESDAY LUNCH 

// TUESDAY LUNCH - SIDES
pigsInABlanketTue = {diet: [], time: lh, date: tue, description: "Mini bratwurst sausages in the center of a fluffy wrap"}

// TUESDAY DINNER - ENTREES 
vegetableMedleyTue = {diet: [veg, vg, kos, hal, gnFree], time: dr, date:tue, description: "Roasted Vegtable Medley with Rosmary"}
chickenBowlTue = {diet: [kos, hal], time: dr, date: tue, description: "Warm Hearty Chichen Noodle Bowl with an assortment of vegetables"}
tofuBowlTue = {diet: [vg, veg, hal, kos], time: dr, date: tue, description: "Tofu Bowl with quinoa base and vegtable salad"}
steamedMusselsTue = {diet: [], time: dr, date: tue, description: "Steamed Mussels with Garlic and Parsley"}
grilledPorkOverRiceTue = {diet: [], time: dr, date: tue, description: "Grilled Pork served over Basmati Rice"}
vegetableSoupTue = {diet: [veg, vg, gnFree], time:dr, date: tue, description: "Warm Soup with an assortment of vegetables"}
pineapplePorkCutletTue = {diet: [gnFree], time: dr, date: tue, description: "Pinapple Pork Cutlet served with rice"}
pepperioniPizzaTue = {diet: [], time: dr, date: tue, description: "Pepperoni pizza with homemade tomato sauce"}
hawaiianPizzaTue = {diet: [], time: dr, date: tue, description: "Ham and pineapple pizza with homemade tomato sauce"}


// TUESDAY DINNER - SIDES 
truffleFriesTue = {diet: [hal, gnFree, vg, veg], time: dr, date: tue, description: "French fries with truffle butter"}
taterTotsTue = {diet: [hal, gnFree, vg, kos, hal, veg], time: dr, date: tue, description: "Crispy tater tots with salt"}
chipsAndHummusTue = {diet: [hal, vg, kos, veg], time: dr, date: tue, description: "3 types of corn chips with different types of hummus choices"}
asianNoodleSaladTue = {diet: [hal, vg,hal, veg], time: dr, date: tue, description: "Soba noodles with fresh vegetables and a sweet and savory sauce"}

// TUESDAY LATE NIGHT

//////////////////////////////////////////////////////////// WEDNESDAY DISHES ////////////////////////////////////////////////////////////

// WEDNESDAY BREAKFAST 
bananaSmoothieWed = {diet: [hal, gnFree, veg, kos, hal], time: brk, date: wed, description: "Bananas, lowfat milk, and vanilla ice cream"}
pineappleSmoothieWed = {diet: [hal, gnFree, veg, kos, hal, vg], time: brk, date: wed, description: "Pineapples, coconut milk, and vegan ice cream"}
scrambledEggsWed = {diet: [veg, hal, kos], time: brk, date: wed, description: "Eggs made to order with fresh vegetables"}
oatmealWed = {diet: [veg, hal, kos], time: brk, date:wed, description: "Warm Oatmeal with raisens and sliced almonds. Perfect start to your day"}
fruitsWed = {diet: [vg, veg, hal, kos], time: brk, date:wed, description: "Large fruit assortment"}
eggsBenedictWed = {diet: [hal], time: brk, date: wed, description: "Poached eggs, bacon, arugala on toasted english muffin with hollandaise sauce"}
blueberryPancakeWed = {diet: [vg, veg, hal, kos], time: brk, date: wed, description: "Fresh bluberries on regular pancakes"}
fruitParfaitWed = {diet: [veg, hal, kos], time: brk, date: wed, description: "Fresh fruit on plain yogurt, topped with crunchy granola"}
tofuBowlBreakfastWed = {diet: [vg, veg, hal, kos], time: brk, date: wed, description: "Vegan scrambled eggs with tofu base"}


// WEDNESDAY LUNCH - ENTREES
tofuBowlLunchWed = {diet: [vg, veg, hal, kos], time: lh, date: wed, description: "Tofu Bowl with quinua base and vegtable salad"}

// WEDNESDAY LUNCH - SIDES 
roastedveggiesWed = {diet: [hal, gnFree, vg, kos, hal, veg], time: lh, date: wed, description: "Oven rosted vegetables with rosmary and garlic"}
pigsInABlanketWed = {diet: [], time: lh, date: wed, description: "Mini bratwurst sausages in the center of a fluffy wrap"}

// WEDNESDAY DINNER - ENTREES 
chickenFingersWed = {diet: [kos,hal], time: dr, date: wed, description: "Breaded Chicken Fingers"}
shrimpBowlWed = {diet: [], time: dr, date: wed, description: "Shrimp Bowl with quinoa base and vegtable salad"}
tofuBowlWed = {diet: [vg, veg, hal, kos], time: dr, date: wed, description: "Tofu Bowl with quinoa base and vegtable salad"}
chickenSoupWed = {diet: [gnFree], time:dr, date: wed, description: "Warm Hearty Chichen Soup with an assortment of vegetables"}
tofuWVeggiesWed = {diet: [veg, vg, gnFree], time: dr, date: wed, description: "Tofu Bowl with quinoa base and vegtable salad"}
chickenCurryWed = {diet: [gnFree, hal], time: dr, date: wed, description: "Chicken Curry with basmati rice"}
pineapplePorkCutletWed = {diet: [gnFree], time: dr, date: wed, description: "Pinapple Pork Cutlet served with rice"}
pepperioniPizzaWed = {diet: [], time: dr, date: wed, description: "Pepperoni pizza with homemade tomato sauce"}


// WEDNESDAY DINNER - SIDES
herbFriesWed = {diet: [gnFree, vg, veg], time: dr, date: wed, description: "French fries with oregano and thyme"}
cheesyTaterTotsWed = {diet: [gnFree], time: dr, date: wed, description: "Crispy tater tots with melted cheddar and spring onions"}
collardGreensWed = {diet: [gnFree, veg, hal], time: dr, date: wed, description: "Fresh collard greens with garlic"}
bratwurstCorndogWed = {diet: [], time: dr, date: wed, description: "Bratwurst sausage in the center of a corn dog outside"}

// WEDNESDAY LATE NIGHT

//////////////////////////////////////////////////////////// THURSDAY DISHES ////////////////////////////////////////////////////////////

// THURSDAY BREAKFAST 
breakfastSandwichTr = {diet: [hal, kos], time: brk, date: tr, description: "Choice of sausage, egg, and cheese or bacon, egg, and cheese"}
fruitParfaitTr = {diet: [veg, hal, kos], time: brk, date: tr, description: "Fresh fruit on plain yogurt, topped with crunchy granola"}
chickenAndWafflesTr = {diet: [kos], time: brk, date: tr, description: "Crispy fried chicken with buttery waffles"}
eggsBenedictTr = {diet: [hal], time: brk, date: tr, description: "Poached eggs, bacon, arugala on toasted english muffin with hollandaise sauce"}

// THURSDAY LUNCH - ENTREES

// THURSDAY LUNCH - SIDES
meatloversChiliTr = {diet: [], time: lh, date: tr, description: "Chili with a hearty portion of beef mince"}
asianNoodleSaladTr = {diet: [hal, vg, hal, veg], time: lh, date: tr, description: "Soba noodles with fresh vegetables and a sweet and savory sauce"}
taterTotsTr = {diet: [gnFree, vg, veg], time: lh, date: tr, description: "Crispy tater tots with salt"}


// THURSDAY DINNER - ENTREES 
shrimpBowlTr = {diet: [], time: dr, date: tr, description: "Shrimp Bowl with quinoa base and vegtable salad"}
roastedChickenTr = {diet: [hal, gnFree], time: dr, date:tr, description: "Herb Roasted Chicken with potatoes and zuccini on the side"}
steamedMusselsTr = {diet: [], time: dr, date: tr, description: "Steamed Mussels with Garlic and Parsley"}
grilledPorkOverRiceTr = {diet: [], time: dr, date: tr, description: "Grilled Pork served over Basmati Rice"}
vegetableSoupTr = {diet: [veg, vg, gnFree], time:dr, date: tr, description: "Warm Soup with an assortment of vegetables"}
chickenCurryTr = {diet: [gnFree, hal], time: dr, date: tr, description: "Chicken Curry with basmati rice"}
pineapplePorkCutletTr = {diet: [gnFree], time: dr, date: tr, description: "Pinapple Pork Cutlet served with rice"}
hawaiianPizzaTr = {diet: [], time: dr, date: tr, description: "Ham and pineapple pizza with homemade tomato sauce"}

// THURSDAY DINNER - SIDES
taterTotsTr = {diet: [hal, gnFree, vg, kos, hal, veg], time: dr, date: tr, description: "Crispy tater tots with salt"}
waffleFriesTr = {diet: [hal, vg, kos, veg], time: dr, date: tr, description: "Hand cut waffle fries"}
bratwurstCorndogTr = {diet: [], time: dr, date: tr, description: "Bratwurst sausage in the center of a corn dog outside"}


// THURSDAY LATE NIGHT


//////////////////////////////////////////////////////////// FRIDAY DISHES ////////////////////////////////////////////////////////////

// FRIDAY BREAKFAST 
pineappleSmoothieFr = {diet: [hal, gnFree, veg, kos, hal, vg], time: brk, date: fr, description: "Pineapples, coconut milk, and vegan ice cream"}
fishTacFr = {diet: [hal, kos], time: brk, date: fr, description: "Cajun-style talapia on corn tortilla"}
blueberryPancakeFr = {diet: [vg, veg, hal, kos], time: brk, date: fr, description: "Fresh bluberries on regular pancakes"}
chickenAndWafflesFr = {diet: [kos], time: brk, date: fr, description: "Crispy fried chicken with buttery waffles"}

// FRIDAY LUNCH - ENTREES 

// FRIDAY LUNCH - SIDES 
meatloversChiliFr = {diet: [], time: lh, date: fr, description: "Chili with a hearty portion of beef mince"}
pigsInABlankeFr = {diet: [], time: lh, date: fr, description: "Mini bratwurst sausages in the center of a fluffy wrap"}
waffleFriesFr = {diet: [hal, vg, kos, veg], time: lh, date: fr, description: "Hand cut waffle fries"}
steamedCornFr = {diet: [hal, gnFree, vg, kos, hal, veg], time: lh, date: fr, description: "Plain steamed corn"}

// FRIDAY DINNER - ENTREES 
vegetableMedleyFr = {diet: [veg, vg, kos, hal, gnFree], time: dr, date:fr, description: "Roasted Vegtable Medley with Rosmary"}
chickenBowlFr = {diet: [kos, hal], time: dr, date: fr, description: "Warm Hearty Chichen Noodle Bowl with an assortment of vegetables"}
tofuBowlFr = {diet: [vg, veg, hal, kos], time: dr, date: fr, description: "Tofu Bowl with quinoa base and vegtable salad"}
grilledPorkOverRiceFr = {diet: [], time: dr, date: fr, description: "Grilled Pork served over Basmati Rice"}
chickenSoupFr = {diet: [gnFree], time:dr, date: fr, description: "Warm Hearty Chichen Soup with an assortment of vegetables"}
vegetableSoupFr = {diet: [veg, vg, gnFree], time:dr, date: fr, description: "Warm Soup with an assortment of vegetables"}
chickenCurryFr = {diet: [gnFree, hal], time: dr, date: fr, description: "Chicken Curry with basmati rice"}
pepperioniPizzaFr = {diet: [], time: dr, date: fr, description: "Pepperoni pizza with homemade tomato sauce"}


// FRIDAY DINNER - SIDES
collardGreensFr = {diet: [gnFree, veg, hal], time: dr, date: fr, description: "Fresh collard greens with garlic"}
cheesyTaterTotsFr = {diet: [gnFree], time: dr, date: fr, description: "Crispy tater tots with melted cheddar and spring onions"}
steamedCornFr = {diet: [hal, gnFree, vg, kos, hal, veg], time: dr, date: tr, description: "Plain steamed corn"}
chipsAndHummusFr = {diet: [hal, vg, kos, veg], time: dr, date: fr, description: "3 types of corn chips with different types of hummus choices"}

//////////////////////////////////////////////////////////// SATURDAY DISHES ////////////////////////////////////////////////////////////

// SATURDAY BRUNCH
bananaSmoothieSat = {diet: [hal, gnFree, veg, kos, hal], time: brh, date: sat, description: "Bananas, lowfat milk, and vanilla ice cream"}
eggsBenedictSat = {diet: [hal], time: brh, date: sat, description: "Poached eggs, bacon, arugala on toasted english muffin with hollandaise sauce"}
fruitParfaitSat = {diet: [veg, hal, kos], time: brh, date: sat, description: "Fresh fruit on plain yogurt, topped with crunchy granola"}
tofuBowlBreakfastSat = {diet: [vg, veg, hal, kos], time: brh, date: sat, description: "Vegan scrambled eggs with tofu base"}

// SATURDAY LUNCH 

// SATURDAY LUNCH - SIDES
pigsInABlanketSat = {diet: [], time: lh, date: sun, description: "Mini bratwurst sausages in the center of a fluffy wrap"}
herbFriesSat = {diet: [gnFree, vg, veg], time: lh, date: sat, description: "French fries with oregano and thyme"}
meatloversChiliSat = {diet: [], time: lh, date: sat, description: "Chili with a hearty portion of beef mince"}
taterTotsSat = {diet: [ gnFree, vg, veg], time: lh, date: sat, description: "Crispy tater tots with salt"}


// SATURDAY DINNER - ENTREES 
chickenFingersSat = {diet: [kos,hal], time: dr, date: sat, description: "Breaded Chicken Fingers"}
jerkedChickenSat ={diet: [hal, gnFree], time:dr, date: sat, description: "Oven Baked Jerk Chicken served over white rice"}
tofuWVeggiesSat = {diet: [veg, vg, gnFree], time: dr, date: sat, description: "Tofu Bowl with quinoa base and vegtable salad"}
chickenBowlSat = {diet: [kos, hal], time: dr, date: sat, description: "Warm Hearty Chichen Noodle Bowl with an assortment of vegetables"}
pineapplePorkCutletSat = {diet: [gnFree], time: dr, date: sat, description: "Pinapple Pork Cutlet served with rice"}
pepperioniPizzaSat = {diet: [], time: dr, date: sat, description: "Pepperoni pizza with homemade tomato sauce"}
hawaiianPizzaSat = {diet: [], time: dr, date: sat, description: "Ham and pineapple pizza with homemade tomato sauce"}


// SATURDAY DINNER - SIDES
mashedPotatoesSat = {diet: [veg, kos, hal], time: dr, date: sat, description: "Warm and freshly made mashed potatoes"}
asianNoodleSaladSat = {diet: [hal, vg,  hal, veg], time: dr, date: sat, description: "Soba noodles with fresh vegetables and a sweet and savory sauce"}
bratwurstCorndogSat = {diet: [], time: dr, date: sat, description: "Bratwurst sausage in the center of a corn dog outside"}

//////////////////////////////////////////////////////////// SUNDAY DISHES ////////////////////////////////////////////////////////////

// SUNDAY BRUNCH
pineappleSmoothieSun = {diet: [hal, gnFree, veg, kos, hal, vg], time: brh, date: sun, description: "Pineapples, coconut milk, and vegan ice cream"}
chickenAndWafflesSun = {diet: [kos], time: brh, date: sun, description: "Crispy fried chicken with buttery waffles"}
fishTacoSun = {diet: [hal, kos], time: brh, date: sun, description: "Cajun-style talapia on corn tortilla"}
breakfastSandwichSun = {diet: [hal, kos], time: brh, date: sun, description: "Choice of sausage, egg, and cheese or bacon, egg, and cheese"}
blueberryPancakeSun = {diet: [vg, veg, hal, kos], time: brh, date: sun, description: "Fresh bluberries on regular pancakes"}

// SUNDAY LUNCH - ENTREES

// SUNDAY LUNCH - SIDES
mashedPotatoesSun = {diet: [veg, kos, hal], time: lh, date: sun, description: "Warm and freshly made mashed potatoes"}
meatloversChiliSun = {diet: [], time: lh, date: sun, description: "Chili with a hearty portion of beef mince"}


// SUNDAY DINNER - ENTREES 
roastedChickenSun = {diet: [hal, gnFree], time: dr, date:sun, description: "Herb Roasted Chicken with potatoes and zuccini on the side"}
chickenFingersSun = {diet: [kos,hal], time: dr, date: sun, description: "Breaded Chicken Fingers"}
shrimpBowlSun = {diet: [], time: dr, date: sun, description: "Shrimp Bowl with quinoa base and vegtable salad"}
tofuBowlSun = {diet: [vg, veg, hal, kos], time: dr, date: sun, description: "Tofu Bowl with quinoa base and vegtable salad"}
steamedMusselsSun = {diet: [], time: dr, date: sun, description: "Steamed Mussels with Garlic and Parsley"}
jerkedChickenSun ={diet: [hal, gnFree], time:dr, date: sun, description: "Oven Baked Jerk Chicken served over white rice"}
tofuWVeggiesSun = {diet: [veg, vg, gnFree], time: dr, date: sun, description: "Tofu Bowl with quinoa base and vegtable salad"}
hawaiianPizzaSun = {diet: [], time: dr, date: sun, description: "Ham and pineapple pizza with homemade tomato sauce"}


// SUNDAY DINNER - SIDES
roastedveggiesSun = {diet: [hal, gnFree, vg, kos, hal, veg], time: dr, date: sun, description: "Oven rosted vegetables with rosmary and garlic"}






// MONDAY BREAKFAST - ENTREES
tofuBowlBreakfastMon = {diet: [vg, veg, hal, kos], time: brk, date: mon, description: "Vegan scrambled eggs with tofu base"}
eggsBenedictMon = {diet: [hal], time: brk, date: mon, description: "Poached eggs, bacon, arugala on toasted english muffin with hollandaise sauce"}
fishTacoMon = {diet: [hal, kos], time: brk, date: mon, description: "Cajun-style talapia on corn tortilla"}
fruitParfaitMon = {diet: [veg, hal, kos], time: brk, date: mon, description: "Fresh fruit on plain yogurt, topped with crunchy granola"}
fruitsMon = {diet: [vg, veg, hal, kos], time: brk, date:mon, description: "Large fruit assortment"}


// MONDAY LUNCH - ENTREES 
vegetableStirfryMon = {diet: [veg], time: lh, date: mon, description: "stir fried veggies in a light brown sauce" }

// MONDAY LUNCH - SIDES
truffleFriesMon = {diet: [hal, gnFree, vg, veg], time: lh, date: mon, description: "French fries with truffle butter"}


// MONDAY DINNER - ENTREES 
roastedChickenMon = {diet: [hal, gnFree], time: dr, date:mon, description: "Herb Roasted Chicken with potatoes and zuccini on the side"}
vegetableMedleyMon = {diet: [veg, vg, kos, hal, gnFree], time: dr, date:mon, description: "Roasted Vegtable Medley with Rosmary"}
chickenFingersMon = {diet: [kos,hal], time: dr, date: mon, description: "Breaded Chicken Fingers"}
chickenBowlMon = {diet: [kos, hal], time: dr, date: mon, description: "Warm Hearty Chichen Noodle Bowl with an assortment of vegetables"}
shrimpBowlMon = {diet: [], time: dr, date: mon, description: "Shrimp Bowl with quinoa base and vegtable salad"}
grilledPorkOverRiceMon = {diet: [], time: dr, date: mon, description: "Grilled Pork served over Basmati Rice"}
jerkedChickenMon ={diet: [hal, gnFree], time:dr, date: mon, description: "Oven Baked Jerk Chicken served over white rice"}
chickenSoupMon = {diet: [gnFree], time:dr, date: mon, description: "Warm Hearty Chichen Soup with an assortment of vegetables"}
vegetableSoupMon = {diet: [veg, vg, gnFree], time:dr, date: mon, description: "Warm Soup with an assortment of vegetables"}
chickenCurryMon = {diet: [gnFree, hal], time: dr, date: mon, description: "Chicken Curry with basmati rice"}
pepperioniPizzaMon = {diet: [], time: dr, date: mon, description: "Pepperoni pizza with homemade tomato sauce"}

// MONDAY DINNER - SIDES 
mashedPotatoesMon = {diet: [veg, kos, hal], time: dr, date: mon, description: "Warm and freshly made mashed potatoes"}
roastedveggiesMon = {diet: [hal, gnFree, vg, kos, hal, veg], time: dr, date: mon, description: "Oven rosted vegetables with rosmary and garlic"}
steamedCornMon = {diet: [hal, gnFree, vg, kos, hal, veg], time: dr, date: mon, description: "Plain steamed corn"}
herbFriesMon = {diet: [gnFree, vg, veg], time: dr, date: mon, description: "French fries with oregano and thyme"}
bratwurstCorndogMon = {diet: [], time: dr, date: mon, description: "Bratwurst sausage in the center of a corn dog outside"}
meatloversChiliMon = {diet: [], time: dr, date: mon, description: "Chili with a hearty portion of beef mince"}





/////// DONT WORRY ABOUT THIS PART

// Dorm dishes format | DormDishes = {entree: {diet:["vegan", "halal"], time:"dinner", date:"date", calories: 500}}
bakerDishes = {"Entrees": {"Pepperoni Pizza":pepperioniPizzaMon, "Roasted Chicken": roastedChickenMon, "Vegetable Medley":vegetableMedleyMon, "Chicken Fingers":chickenFingersMon, "Chicken Curry": chickenCurryMon, "Shrimp Bowl":shrimpBowlMon,
						   "Vegetable Stir Fry":vegetableStirfryMon,
						   "Eggs Benedict": eggsBenedictMon, "Scrambled Tofu":tofuBowlBreakfastMon, "Fruit Parfait":fruitParfaitMon, "Fresh Fruits": fruitsMon,  
						   "Jerked Tofu With Veggies": tofuWVeggies, "Pineapple Pork Cutlet": pineapplePorkCutlet,	"Hawaiian Pizza":hawaiianPizza, 
						  }, 
				
				"Sides": {"Mashed Potatoes":mashedPotatoesMon, "Roasted Vegetables":roastedveggiesMon, "Steamed Corn":steamedCornMon, "Herb Fries":herbFriesMon,
						  "Truffle Fries": truffleFriesMon,
						  "Chicken Curry":chickenCurryTr, "Pineapple Pork Cutlet": pineapplePorkCutletTr, "Cheesy Tater Tots":cheesyTaterTotsFr, "Asian Noodle Salad": asianNoodleSaladTr, "Banana Smoothie":bananaSmoothieSat, "Collard Greens":collardGreensFr}}

maseehDishes = {"Entrees":{"Pepperioni Pizza":pepperioniPizzaMon, "Vegetable Soup":vegetableSoupMon, "Chicken Soup":chickenSoupMon, "Jerked Chicken":jerkedChickenMon, "Chicken Fingers":chickenFingersMon,
						   "Vegetable Stir Fry":vegetableStirfryMon,
						   "Fish Taco":fishTacoMon, "Eggs Benedict":eggsBenedictMon,
						   "Pepperoni Pizza":pepperioniPizzaTue, "Hawaiian Pizza":hawaiianPizzaTr,
							"Scrambled Tofu":tofuBowlBreakfastMon,"Shrimp Bowl": shrimpBowlMon, "Chicken Bowl":chickenBowlTue, "Shrimp Bowl":shrimpBowlTr, "Chicken Soup": chickenSoupFr, "Vegetable Soup": vegetableSoupMon, "Chicken Curry":chickenCurryWed, "Pineapple Pork Cutlet": pineapplePorkCutletSat}, 
				
				"Sides": {"Truffle Fries":truffleFriesMon, "Chips and Hummus":chipsAndHummusTue, "Tater Tots":taterTotsTr, "Pineapple Smoothie": pineappleSmoothieFr, "Bratwurst Corndog":bratwurstCorndogTr, "Meat Lover's Chili":meatloversChiliMon}}

nextDishes = {"Entrees":{"Pepperoni Pizza":pepperioniPizzaFr, "Eggs Benedict": eggsBenedictTr, "Breakfast Tofu":tofuBowlBreakfast,"Tofu Bowl": tofuBowlTue, "Steamed Mussels": steamedMusselsTr, "Grilled Pork Over Basmati Rice": grilledPorkOverRiceMon, "Chicken Curry": chickenCurryMon, "Jerked Tofu With Veggies": tofuWVeggiesSat, "Pineapple Pork Cutlet": pineapplePorkCutletTr}, 
				"Sides": {"Chicken Curry":chickenCurryFr,
				"Truffle Fries":truffleFries, "Tater Tots":taterTots, "Chips and Hummus":chipsAndHummus, "Pineapple Smoothie": pineappleSmoothie, "Bratwurst Corndog":bratwurstCorndog}}

mccormickDishes = {"Entrees":{"Breakfast Tofu":tofuBowlBreakfast,"Roasted Chicken": roastedChicken, "Vegetable Medley":vegetableMedley, "Chicken Fingers":chickenFingers, "Vegetable Soup": vegetableSoup, "Chicken Curry":chickenCurry, "Pineapple Pork Cutlet": pineapplePorkCutlet},
				"Sides": {"Pineapple Pork Cutlet": pineapplePorkCutlet,"Cheesy Tater Tots":cheesyTaterTots, "Waffle Fries":waffleFries, "Asian Noodle Salad":asianNoodleSalad, "Banana Smoothie":bananaSmoothie, "Collard Greens":collardGreens, "Pigs in a Blanket":pigsInABlanket, "Meat Lover's Chili":meatloversChili}}

simmonsDishes = {"Entrees":{"Pepperoni Pizza":pepperioniPizza, "Hawaiian Pizza":hawaiianPizza,"Breakfast Tofu":tofuBowlBreakfast,"Roasted Chicken": roastedChicken, "Vegetable Medley":vegetableMedley, "Chicken Fingers":chickenFingers, "Vegetable Soup": vegetableSoup, "Chicken Curry":chickenCurry, "Pineapple Pork Cutlet": pineapplePorkCutlet}, 
				"Sides": {"Herb Fries": herbFries, "Truffle Fries": truffleFries, "Chips and Hummus":chipsAndHummus, "Asian Noodle Salad": asianNoodleSalad, "Pineapple Smoothie": pineappleSmoothie, "Pigs in a Blanket":pigsInABlanket}}

// global variables used throughout the code    
const ALLDISHES = {"baker": bakerDishes, "next": nextDishes, "mccormick": mccormickDishes, "simmons":simmonsDishes, "maseeh": maseehDishes}
const SPECIALS = ["Sushi Night at Baker Dorm", "Soul Food in McCormick", "Pizza Night in Next House", "Vegan Friendly Food in Simmons", "There is Nothing Special in Maseeh"] 
const favoriteDishes = new favorites();
var dormList = ["baker", "maseeh", "mccormick", "next", "simmons", "specials"]; // dormList is the list of active dorms on the page
var dormCheckbox = {"baker": false, "mccormick": false, "simmons": false, "next": false, "maseeh": false} 







