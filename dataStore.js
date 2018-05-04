// This is the data store for our document. 

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

// variables 
hal = "halal"; gnFree = "gluten free"; vg = "vegan"; veg = "vegeterian"; kos = "kosher"
brk = "breakfast"; brh = "brunch"; lh = "lunch"; dr = "dinner"; ln = "late night"
mon = "05/07/2018"; tue = "05/08/2018"; wed = "05/02/2018"; tr = "05/03/2018"; fr = "05/04/2018"; sat = "05/05/2018"; sun = "05/06/2018";


//Dishes dinner wed
//format | dish = {diet:["vegan", "halal"], time:"dinner", date:"date", calories: 500}
roastedChicken = {diet: [hal, gnFree], time: dr, date: wed, description: "Herb Roasted Chicken with potatoes and zuccini on the side"}
vegetableMedley = {diet: [veg, vg, kos, hal, gnFree], time: dr, date:wed, description: "Roasted Vegtable Medley with Rosmary"}
chickenFingers = {diet: [kos,hal], time: dr, date: wed, description: "Breaded Chicken Fingers"}
chickenBowl = {diet: [kos, hal], time: dr, date: wed, description: "Warm Hearty Chichen Noodle Bowl with an assortment of vegetables"}
shrimpBowl = {diet: [], time: dr, date: wed, description: "Shrimp Bowl with quinua base and vegtable salad"}
tofuBowl = {diet: [vg, veg, hal, kos], time: dr, date: wed, description: "Tofu Bowl with quinua base and vegtable salad"}
steamedMussels = {diet: [], time: dr, date: wed, description: "Steamed Mussels with Garlic and Parsley"}
grilledPorkOverRice = {diet: [], time: dr, date: wed, description: "Grilled Pork served over Basmati Rice"}

jerkedChicken ={diet: [hal, gnFree], time:dr, date: wed, description: "Oven Baked Jerk Chicken served over white rice"}
chickenSoup = {diet: [gnFree], time:dr, date: wed, description: "Warm Hearty Chichen Soup with an assortment of vegetables"}
vegetableSoup = {diet: [veg, vg, gnFree], time:dr, date: wed, description: "Warm Soup with an assortment of vegetables"}
tofuWVeggies = {diet: [veg, vg, gnFree], time: dr, date: wed, description: "Tofu Bowl with quinua base and vegtable salad"}
chickenCurry = {diet: [gnFree, hal], time: dr, date: wed, description: "Chicken Curry with basmati rice"}
pineapplePorkCutlet = {diet: [gnFree], time: dr, date: wed, description: "Pinapple Pork Cutlet served with rice"}


//Dishes lunch wed
vegetableStirfry = {diet: [veg], time: lh, date: wed, description: "stir fried veggies in a light brown sauce" }

//Sides 
mashedPotatoes = {diet: [hal, gnFree, veg, kos, hal], time: dr, date: wed, description: "Warm and freshly made mashed potatoes"}
roastedveggies = {diet: [hal, gnFree, vg, kos, hal, vg], time: dr, date: wed, description: "Oven rosted vegetables with rosmary and garlic"}
steamedCorn = {diet: [hal, gnFree, vg, kos, hal, vg], time: dr, date: wed, description: "Plain steamed corn"}

//breakfast 
tofuBowlBreakfast = {diet: [vg, veg, hal, kos], time: brk, date: wed, description: "Tofu Bowl with quinua base and vegtable salad"}
scrambledEggs = {diet: [veg, hal, kos], time: brk, date: wed, description: "Eggs made to order with fresh vegetables"}
oatmeal = {diet: [veg, hal, kos], time: brk, date:wed, description: "Warm Oatmeal with raisens and sliced almonds. Perfect start to your day"}

//breakfast Sides
fruits = {diet: [vg, veg, hal, kos], time: brk, date:wed, description: "Large fruit assortment"}

//lunch 
tofuBowlLunch = {diet: [vg, veg, hal, kos], time: lh, date: wed, description: "Tofu Bowl with quinua base and vegtable salad"}

//Late Night 
tofuBowlLateNight = {diet: [vg, veg, hal, kos], time: ln, date: wed, description: "Tofu Bowl with quinua base and vegtable salad"}



// Dorm dishes format | DormDishes = {entree: {diet:["vegan", "halal"], time:"dinner", date:"date", calories: 500}}
bakerDishes = {"Entrees": {"Breakfast Tofu":tofuBowlBreakfast,"Roasted Chicken": roastedChicken, "Vegetable Medley":vegetableMedley, "Chicken Fingers":chickenFingers, "Chicken Curry": chickenCurry, "Jerked Tofu With Veggies": tofuWVeggies, "Pineapple Pork Cutlet": pineapplePorkCutlet}, "Sides": {"Chicken Curry":chickenCurry, "Pineapple Pork Cutlet": pineapplePorkCutlet}}
maseehDishes = {"Entrees":{"Breakfast Tofu":tofuBowlBreakfast,"Shrimp Bowl": shrimpBowl, "Chicken Bowl":chickenBowl, "Shrimp Bowl":shrimpBowl, "Chicken Soup": chickenSoup, "Vegetable Soup": vegetableSoup, "Chicken Curry":chickenCurry, "Pineapple Pork Cutlet": pineapplePorkCutlet}}
nextDishes = {"Entrees":{"Breakfast Tofu":tofuBowlBreakfast,"Tofu Bowl": tofuBowl, "Steamed Mussels": steamedMussels, "Grilled Pork Over Basmati Rice": grilledPorkOverRice, "Chicken Curry": chickenCurry, "Jerked Tofu With Veggies": tofuWVeggies, "Pineapple Pork Cutlet": pineapplePorkCutlet}}
mccormickDishes = {"Entrees":{"Breakfast Tofu":tofuBowlBreakfast,"Roasted Chicken": roastedChicken, "Vegetable Medley":vegetableMedley, "Chicken Fingers":chickenFingers, "Vegetable Soup": vegetableSoup, "Chicken Curry":chickenCurry, "Pineapple Pork Cutlet": pineapplePorkCutlet}}
simmonsDishes = {"Entrees":{"Breakfast Tofu":tofuBowlBreakfast,"Roasted Chicken": roastedChicken, "Vegetable Medley":vegetableMedley, "Chicken Fingers":chickenFingers, "Vegetable Soup": vegetableSoup, "Chicken Curry":chickenCurry, "Pineapple Pork Cutlet": pineapplePorkCutlet}}

// global variables!!   
const ALLDISHES = {"baker": bakerDishes, "next": nextDishes, "mccormick": mccormickDishes, "simmons":simmonsDishes, "maseeh": maseehDishes}
const SPECIALS = ["Sushi Night at Baker Dorm", "Soul Food in McCormick", "Pizza Night in Next House", "Vegan Friendly Food in Simmons", "There is Nothing Special in Maseeh"] 
const favoriteDishes = new favorites();
var dormList = ["baker", "maseeh", "mccormick", "next", "simmons", "specials"]; // dormList is the list of active dorms on the page








