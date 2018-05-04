// This is the data store for our document. 

// Dorms = Baker, Maseeh, McCormick, Next, Simmons, Special Events
// Dietary resitictions = Gluten Free, Halal, Kosher, Vegan, Vegeterian 
// time Type = breakfast, brunch, lunch, dinner, late Night
// Date = MM/DD/YYYY

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


// variables 
hal = "halal"; gnFree = "gluten free"; vg = "vegan"; veg = "vegeterian"; kos = "kosher"
brk = "breakfast"; brh = "brunch"; lh = "lunch"; dr = "dinner"; ln = "late night"
mon = "05/02/2018"; tue = "04/24/2018"; wed = "04/25/2018"; tr = "04/26/2018"; fr = "04/27/2018"; sat = "04/28/2018"; sun = "04/29/2018";


//Dishes dinner mon
//format | dish = {diet:["vegan", "halal"], time:"dinner", date:"date", calories: 500}
roastedChicken = {diet: [hal, gnFree], time: dr, date:mon, description: "Herb Roasted Chicken with potatoes and zuccini on the side"}
roastedChicken = {diet: [hal, gnFree], time: dr, date:tr, description: "Herb Roasted Chicken with potatoes and zuccini on the side"}
roastedChicken = {diet: [hal, gnFree], time: dr, date:sun, description: "Herb Roasted Chicken with potatoes and zuccini on the side"}
vegetableMedley = {diet: [veg, vg, kos, hal, gnFree], time: dr, date:mon, description: "Roasted Vegtable Medley with Rosmary"}
vegetableMedley = {diet: [veg, vg, kos, hal, gnFree], time: dr, date:tue, description: "Roasted Vegtable Medley with Rosmary"}
vegetableMedley = {diet: [veg, vg, kos, hal, gnFree], time: dr, date:fr, description: "Roasted Vegtable Medley with Rosmary"}
chickenFingers = {diet: [kos,hal], time: dr, date: mon, description: "Breaded Chicken Fingers"}
chickenFingers = {diet: [kos,hal], time: dr, date: wed, description: "Breaded Chicken Fingers"}
chickenFingers = {diet: [kos,hal], time: dr, date: sat, description: "Breaded Chicken Fingers"}
chickenFingers = {diet: [kos,hal], time: dr, date: sun, description: "Breaded Chicken Fingers"}
chickenBowl = {diet: [kos, hal], time: dr, date: mon, description: "Warm Hearty Chichen Noodle Bowl with an assortment of vegetables"}
chickenBowl = {diet: [kos, hal], time: dr, date: tue, description: "Warm Hearty Chichen Noodle Bowl with an assortment of vegetables"}
chickenBowl = {diet: [kos, hal], time: dr, date: fr, description: "Warm Hearty Chichen Noodle Bowl with an assortment of vegetables"}
chickenBowl = {diet: [kos, hal], time: dr, date: sat, description: "Warm Hearty Chichen Noodle Bowl with an assortment of vegetables"}
shrimpBowl = {diet: [], time: dr, date: mon, description: "Shrimp Bowl with quinoa base and vegtable salad"}
shrimpBowl = {diet: [], time: dr, date: wed, description: "Shrimp Bowl with quinoa base and vegtable salad"}
shrimpBowl = {diet: [], time: dr, date: tr, description: "Shrimp Bowl with quinoa base and vegtable salad"}
shrimpBowl = {diet: [], time: dr, date: sun, description: "Shrimp Bowl with quinoa base and vegtable salad"}
tofuBowl = {diet: [vg, veg, hal, kos], time: dr, date: tue, description: "Tofu Bowl with quinoa base and vegtable salad"}
tofuBowl = {diet: [vg, veg, hal, kos], time: dr, date: wed, description: "Tofu Bowl with quinoa base and vegtable salad"}
tofuBowl = {diet: [vg, veg, hal, kos], time: dr, date: fr, description: "Tofu Bowl with quinoa base and vegtable salad"}
tofuBowl = {diet: [vg, veg, hal, kos], time: dr, date: sun, description: "Tofu Bowl with quinoa base and vegtable salad"}
steamedMussels = {diet: [], time: dr, date: tue, description: "Steamed Mussels with Garlic and Parsley"}
steamedMussels = {diet: [], time: dr, date: tr, description: "Steamed Mussels with Garlic and Parsley"}
steamedMussels = {diet: [], time: dr, date: sun, description: "Steamed Mussels with Garlic and Parsley"}
grilledPorkOverRice = {diet: [], time: dr, date: mon, description: "Grilled Pork served over Basmati Rice"}
grilledPorkOverRice = {diet: [], time: dr, date: tue, description: "Grilled Pork served over Basmati Rice"}
grilledPorkOverRice = {diet: [], time: dr, date: tr, description: "Grilled Pork served over Basmati Rice"}
grilledPorkOverRice = {diet: [], time: dr, date: fr, description: "Grilled Pork served over Basmati Rice"}

jerkedChicken ={diet: [hal, gnFree], time:dr, date: mon, description: "Oven Baked Jerk Chicken served over white rice"}
jerkedChicken ={diet: [hal, gnFree], time:dr, date: sat, description: "Oven Baked Jerk Chicken served over white rice"}
jerkedChicken ={diet: [hal, gnFree], time:dr, date: sun, description: "Oven Baked Jerk Chicken served over white rice"}
chickenSoup = {diet: [gnFree], time:dr, date: mon, description: "Warm Hearty Chichen Soup with an assortment of vegetables"}
chickenSoup = {diet: [gnFree], time:dr, date: wed, description: "Warm Hearty Chichen Soup with an assortment of vegetables"}
chickenSoup = {diet: [gnFree], time:dr, date: fr, description: "Warm Hearty Chichen Soup with an assortment of vegetables"}
vegetableSoup = {diet: [veg, vg, gnFree], time:dr, date: mon, description: "Warm Soup with an assortment of vegetables"}
vegetableSoup = {diet: [veg, vg, gnFree], time:dr, date: tue, description: "Warm Soup with an assortment of vegetables"}
vegetableSoup = {diet: [veg, vg, gnFree], time:dr, date: tr, description: "Warm Soup with an assortment of vegetables"}
vegetableSoup = {diet: [veg, vg, gnFree], time:dr, date: fr, description: "Warm Soup with an assortment of vegetables"}
tofuWVeggies = {diet: [veg, vg, gnFree], time: dr, date: sat, description: "Tofu Bowl with quinoa base and vegtable salad"}
tofuWVeggies = {diet: [veg, vg, gnFree], time: dr, date: sun, description: "Tofu Bowl with quinoa base and vegtable salad"}
tofuWVeggies = {diet: [veg, vg, gnFree], time: dr, date: wed, description: "Tofu Bowl with quinoa base and vegtable salad"}
chickenCurry = {diet: [gnFree, hal], time: dr, date: mon, description: "Chicken Curry with basmati rice"}
chickenCurry = {diet: [gnFree, hal], time: dr, date: wed, description: "Chicken Curry with basmati rice"}
chickenCurry = {diet: [gnFree, hal], time: dr, date: tr, description: "Chicken Curry with basmati rice"}
chickenCurry = {diet: [gnFree, hal], time: dr, date: fr, description: "Chicken Curry with basmati rice"}
pineapplePorkCutlet = {diet: [gnFree], time: dr, date: tue, description: "Pinapple Pork Cutlet served with rice"}
pineapplePorkCutlet = {diet: [gnFree], time: dr, date: wed, description: "Pinapple Pork Cutlet served with rice"}
pineapplePorkCutlet = {diet: [gnFree], time: dr, date: tr, description: "Pinapple Pork Cutlet served with rice"}
pineapplePorkCutlet = {diet: [gnFree], time: dr, date: sat, description: "Pinapple Pork Cutlet served with rice"}
pepperioniPizza = {diet: [], time: dr, date: sat, description: "Pepperoni pizza with homemade tomato sauce"}
pepperioniPizza = {diet: [], time: dr, date: mon, description: "Pepperoni pizza with homemade tomato sauce"}
pepperioniPizza = {diet: [], time: dr, date: tue, description: "Pepperoni pizza with homemade tomato sauce"}
pepperioniPizza = {diet: [], time: dr, date: wed, description: "Pepperoni pizza with homemade tomato sauce"}
pepperioniPizza = {diet: [], time: dr, date: fr, description: "Pepperoni pizza with homemade tomato sauce"}
hawaiianPizza = {diet: [], time: dr, date: sat, description: "Ham and pineapple pizza with homemade tomato sauce"}
hawaiianPizza = {diet: [], time: dr, date: tue, description: "Ham and pineapple pizza with homemade tomato sauce"}
hawaiianPizza = {diet: [], time: dr, date: tr, description: "Ham and pineapple pizza with homemade tomato sauce"}
hawaiianPizza = {diet: [], time: dr, date: sun, description: "Ham and pineapple pizza with homemade tomato sauce"}


//Dishes lunch mon
vegetableStirfry = {diet: [veg], time: lh, date: mon, description: "stir fried veggies in a light brown sauce" }


//Sides 
mashedPotatoes = {diet: [veg, kos, hal], time: dr, date: mon, description: "Warm and freshly made mashed potatoes"}
mashedPotatoes = {diet: [veg, kos, hal], time: dr, date: sat, description: "Warm and freshly made mashed potatoes"}
mashedPotatoes = {diet: [veg, kos, hal], time: lh, date: sun, description: "Warm and freshly made mashed potatoes"}
roastedveggies = {diet: [hal, gnFree, vg, kos, hal, veg], time: dr, date: sun, description: "Oven rosted vegetables with rosmary and garlic"}
roastedveggies = {diet: [hal, gnFree, vg, kos, hal, veg], time: lh, date: wed, description: "Oven rosted vegetables with rosmary and garlic"}
roastedveggies = {diet: [hal, gnFree, vg, kos, hal, veg], time: dr, date: mon, description: "Oven rosted vegetables with rosmary and garlic"}
steamedCorn = {diet: [hal, gnFree, vg, kos, hal, veg], time: dr, date: mon, description: "Plain steamed corn"}
steamedCorn = {diet: [hal, gnFree, vg, kos, hal, veg], time: lh, date: fr, description: "Plain steamed corn"}
steamedCorn = {diet: [hal, gnFree, vg, kos, hal, veg], time: dr, date: tr, description: "Plain steamed corn"}
herbFries = {diet: [gnFree, vg, veg], time: dr, date: mon, description: "French fries with oregano and thyme"}
herbFries = {diet: [gnFree, vg, veg], time: dr, date: wed, description: "French fries with oregano and thyme"}
herbFries = {diet: [gnFree, vg, veg], time: lh, date: sat, description: "French fries with oregano and thyme"}
truffleFries = {diet: [hal, gnFree, vg, veg], time: dr, date: tue, description: "French fries with truffle butter"}
truffleFries = {diet: [hal, gnFree, vg, veg], time: lh, date: mon, description: "French fries with truffle butter"}
taterTots = {diet: [hal, gnFree, vg, kos, hal, veg], time: dr, date: tue, description: "Crispy tater tots with salt"}
taterTots = {diet: [hal, gnFree, vg, kos, hal, veg], time: dr, date: tr, description: "Crispy tater tots with salt"}
cheesyTaterTots = {diet: [gnFree], time: dr, date: wed, description: "Crispy tater tots with melted cheddar and spring onions"}
cheesyTaterTots = {diet: [gnFree], time: dr, date: fr, description: "Crispy tater tots with melted cheddar and spring onions"}
chipsAndHummus = {diet: [hal, vg, kos, veg], time: dr, date: tue, description: "3 types of corn chips with different types of hummus choices"}
chipsAndHummus = {diet: [hal, vg, kos, veg], time: dr, date: fr, description: "3 types of corn chips with different types of hummus choices"}
waffleFries = {diet: [hal, vg, kos, veg], time: dr, date: tr, description: "Hand cut waffle fries"}
waffleFries = {diet: [hal, vg, kos, veg], time: lh, date: fr, description: "Hand cut waffle fries"}
asianNoodleSalad = {diet: [hal, vg,hal, veg], time: dr, date: tue, description: "Soba noodles with fresh vegetables and a sweet and savory sauce"}
asianNoodleSalad = {diet: [hal, vg, hal, veg], time: lh, date: tr, description: "Soba noodles with fresh vegetables and a sweet and savory sauce"}
asianNoodleSalad = {diet: [hal, vg,  hal, veg], time: dr, date: sat, description: "Soba noodles with fresh vegetables and a sweet and savory sauce"}
taterTots = {diet: [gnFree, vg, veg], time: lh, date: tr, description: "Crispy tater tots with salt"}
taterTots = {diet: [ gnFree, vg, veg], time: lh, date: sat, description: "Crispy tater tots with salt"}
bananaSmoothie = {diet: [hal, gnFree, veg, kos, hal], time: brk, date: wed, description: "Bananas, lowfat milk, and vanilla ice cream"}
bananaSmoothie = {diet: [hal, gnFree, veg, kos, hal], time: brh, date: sat, description: "Bananas, lowfat milk, and vanilla ice cream"}
pineappleSmoothie = {diet: [hal, gnFree, veg, kos, hal, vg], time: brh, date: sun, description: "Pineapples, coconut milk, and vegan ice cream"}
pineappleSmoothie = {diet: [hal, gnFree, veg, kos, hal, vg], time: brk, date: wed, description: "Pineapples, coconut milk, and vegan ice cream"}
pineappleSmoothie = {diet: [hal, gnFree, veg, kos, hal, vg], time: brk, date: fr, description: "Pineapples, coconut milk, and vegan ice cream"}
collardGreens = {diet: [gnFree, veg, hal], time: dr, date: wed, description: "Fresh collard greens with garlic"}
collardGreens = {diet: [gnFree, veg, hal], time: dr, date: fr, description: "Fresh collard greens with garlic"}
bratwurstCorndog = {diet: [], time: dr, date: sat, description: "Bratwurst sausage in the center of a corn dog outside"}
bratwurstCorndog = {diet: [], time: dr, date: tr, description: "Bratwurst sausage in the center of a corn dog outside"}
bratwurstCorndog = {diet: [], time: dr, date: wed, description: "Bratwurst sausage in the center of a corn dog outside"}
bratwurstCorndog = {diet: [], time: dr, date: mon, description: "Bratwurst sausage in the center of a corn dog outside"}
pigsInABlanket = {diet: [], time: lh, date: sun, description: "Mini bratwurst sausages in the center of a fluffy wrap"}
pigsInABlanket = {diet: [], time: lh, date: tue, description: "Mini bratwurst sausages in the center of a fluffy wrap"}
pigsInABlanket = {diet: [], time: lh, date: wed, description: "Mini bratwurst sausages in the center of a fluffy wrap"}
pigsInABlanket = {diet: [], time: lh, date: fr, description: "Mini bratwurst sausages in the center of a fluffy wrap"}
meatloversChili = {diet: [], time: lh, date: sun, description: "Chili with a hearty portion of beef mince"}
meatloversChili = {diet: [], time: lh, date: sat, description: "Chili with a hearty portion of beef mince"}
meatloversChili = {diet: [], time: dr, date: mon, description: "Chili with a hearty portion of beef mince"}
meatloversChili = {diet: [], time: lh, date: tr, description: "Chili with a hearty portion of beef mince"}
meatloversChili = {diet: [], time: lh, date: fr, description: "Chili with a hearty portion of beef mince"}



//breakfast 
tofuBowlBreakfast = {diet: [vg, veg, hal, kos], time: brk, date: mon, description: "Tofu Bowl with quinoa base and vegtable salad"}
tofuBowlBreakfast = {diet: [vg, veg, hal, kos], time: brk, date: wed, description: "Tofu Bowl with quinoa base and vegtable salad"}
tofuBowlBreakfast = {diet: [vg, veg, hal, kos], time: brh, date: sat, description: "Tofu Bowl with quinoa base and vegtable salad"}
breakfastSandwich = {diet: [hal, kos], time: brk, date: tue, description: "Choice of sausage, egg, and cheese or bacon, egg, and cheese"}
breakfastSandwich = {diet: [hal, kos], time: brk, date: tr, description: "Choice of sausage, egg, and cheese or bacon, egg, and cheese"}
breakfastSandwich = {diet: [hal, kos], time: brh, date: sun, description: "Choice of sausage, egg, and cheese or bacon, egg, and cheese"}
fishTaco = {diet: [hal, kos], time: brk, date: mon, description: "Cajun-style talapia on corn tortilla"}
fishTaco = {diet: [hal, kos], time: brk, date: fr, description: "Cajun-style talapia on corn tortilla"}
fishTaco = {diet: [hal, kos], time: brh, date: sun, description: "Cajun-style talapia on corn tortilla"}
fruitParfait = {diet: [veg, hal, kos], time: brk, date: mon, description: "Fresh fruit on plain yogurt, topped with crunchy granola"}
fruitParfait = {diet: [veg, hal, kos], time: brk, date: wed, description: "Fresh fruit on plain yogurt, topped with crunchy granola"}
fruitParfait = {diet: [veg, hal, kos], time: brk, date: tr, description: "Fresh fruit on plain yogurt, topped with crunchy granola"}
fruitParfait = {diet: [veg, hal, kos], time: brh, date: sat, description: "Fresh fruit on plain yogurt, topped with crunchy granola"}
blueberryPancake = {diet: [vg, veg, hal, kos], time: brk, date: tue, description: "Fresh bluberries on regular pancakes"}
blueberryPancake = {diet: [vg, veg, hal, kos], time: brk, date: wed, description: "Fresh bluberries on regular pancakes"}
blueberryPancake = {diet: [vg, veg, hal, kos], time: brk, date: fr, description: "Fresh bluberries on regular pancakes"}
blueberryPancake = {diet: [vg, veg, hal, kos], time: brh, date: sun, description: "Fresh bluberries on regular pancakes"}
chickenAndWaffles = {diet: [kos], time: brh, date: sun, description: "Crispy fried chicken with buttery waffles"}
chickenAndWaffles = {diet: [kos], time: brk, date: tue, description: "Crispy fried chicken with buttery waffles"}
chickenAndWaffles = {diet: [kos], time: brk, date: tr, description: "Crispy fried chicken with buttery waffles"}
chickenAndWaffles = {diet: [kos], time: brk, date: fr, description: "Crispy fried chicken with buttery waffles"}
eggsBenedict = {diet: [hal], time: brk, date: mon, description: "Poached eggs, bacon, arugala on toasted english muffin with hollandaise sauce"}
eggsBenedict = {diet: [hal], time: brk, date: wed, description: "Poached eggs, bacon, arugala on toasted english muffin with hollandaise sauce"}
eggsBenedict = {diet: [hal], time: brk, date: tr, description: "Poached eggs, bacon, arugala on toasted english muffin with hollandaise sauce"}
eggsBenedict = {diet: [hal], time: brh, date: sat, description: "Poached eggs, bacon, arugala on toasted english muffin with hollandaise sauce"}




// Dorm dishes format | DormDishes = {entree: {diet:["vegan", "halal"], time:"dinner", date:"date", calories: 500}}
bakerDishes = {"Entrees": {"Pepperoni Pizza":pepperioniPizza, "Hawaiian Pizza":hawaiianPizza, "Eggs Benedict": eggsBenedict, "Breakfast Tofu":tofuBowlBreakfast,"Roasted Chicken": roastedChicken, "Vegetable Medley":vegetableMedley, "Chicken Fingers":chickenFingers, "Chicken Curry": chickenCurry, "Jerked Tofu With Veggies": tofuWVeggies, "Pineapple Pork Cutlet": pineapplePorkCutlet}, "Sides": {"Chicken Curry":chickenCurry, "Pineapple Pork Cutlet": pineapplePorkCutlet, "Herb Fries":herbFries, "Cheesy Tater Tots":cheesyTaterTots, "Asian Noodle Salad": asianNoodleSalad, "Banana Smoothie":bananaSmoothie, "Collard Greens":collardGreens}}
maseehDishes = {"Entrees":{"Pepperoni Pizza":pepperioniPizza, "Hawaiian Pizza":hawaiianPizza,"Breakfast Tofu":tofuBowlBreakfast,"Shrimp Bowl": shrimpBowl, "Chicken Bowl":chickenBowl, "Shrimp Bowl":shrimpBowl, "Chicken Soup": chickenSoup, "Vegetable Soup": vegetableSoup, "Chicken Curry":chickenCurry, "Pineapple Pork Cutlet": pineapplePorkCutlet}, "Sides": {"Truffle Fries":truffleFries, "Chips and Hummus":chipsAndHummus, "Tater Tots":taterTots, "Pineapple Smoothie": pineappleSmoothie, "Bratwurst Corndog":bratwurstCorndog, "Meat Lover's Chili":meatloversChili}}
nextDishes = {"Entrees":{"Pepperoni Pizza":pepperioniPizza, "Eggs Benedict": eggsBenedict, "Breakfast Tofu":tofuBowlBreakfast,"Tofu Bowl": tofuBowl, "Steamed Mussels": steamedMussels, "Grilled Pork Over Basmati Rice": grilledPorkOverRice, "Chicken Curry": chickenCurry, "Jerked Tofu With Veggies": tofuWVeggies, "Pineapple Pork Cutlet": pineapplePorkCutlet}, "Sides": {"Chicken Curry":chickenCurry,
				"Truffle Fries":truffleFries, "Tater Tots":taterTots, "Chips and Hummus":chipsAndHummus, "Pineapple Smoothie": pineappleSmoothie, "Bratwurst Corndog":bratwurstCorndog}}
mccormickDishes = {"Entrees":{"Breakfast Tofu":tofuBowlBreakfast,"Roasted Chicken": roastedChicken, "Vegetable Medley":vegetableMedley, "Chicken Fingers":chickenFingers, "Vegetable Soup": vegetableSoup, "Chicken Curry":chickenCurry, "Pineapple Pork Cutlet": pineapplePorkCutlet}, "Sides": {"Pineapple Pork Cutlet": pineapplePorkCutlet,"Cheesy Tater Tots":cheesyTaterTots, "Waffle Fries":waffleFries, "Asian Noodle Salad":asianNoodleSalad, "Banana Smoothie":bananaSmoothie, "Collard Greens":collardGreens, "Pigs in a Blanket":pigsInABlanket, "Meat Lover's Chili":meatloversChili}}
simmonsDishes = {"Entrees":{"Pepperoni Pizza":pepperioniPizza, "Hawaiian Pizza":hawaiianPizza,"Breakfast Tofu":tofuBowlBreakfast,"Roasted Chicken": roastedChicken, "Vegetable Medley":vegetableMedley, "Chicken Fingers":chickenFingers, "Vegetable Soup": vegetableSoup, "Chicken Curry":chickenCurry, "Pineapple Pork Cutlet": pineapplePorkCutlet}, "Sides": {"Herb Fries": herbFries, "Truffle Fries": truffleFries, "Chips and Hummus":chipsAndHummus, "Asian Noodle Salad": asianNoodleSalad, "Pineapple Smoothie": pineappleSmoothie, "Pigs in a Blanket":pigsInABlanket}}

// global variables!!   
const ALLDISHES = {"baker": bakerDishes, "next": nextDishes, "mccormick": mccormickDishes, "simmons":simmonsDishes, "maseeh": maseehDishes}
const SPECIALS = ["Sushi Night at Baker Dorm", "Soul Food in McCormick", "Pizza Night in Next House", "Vegan Friendly Food in Simmons", "There is Nothing Special in Maseeh"] 
const favoriteDishes = new favorites();
var dormList = ["baker", "maseeh", "mccormick", "next", "simmons", "specials"]; // dormList is the list of active dorms on the page







