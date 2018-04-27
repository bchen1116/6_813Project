// This is the data store for our document. 

// Dorms = Baker, Maseeh, McCormick, Next, Simmons, Special Events
// Dietary resitictions = Gluten Free, Halal, Kosher, Vegan, Vegeterian 
// Meal Type = breakfast, brunch, lunch, dinner, late Night
// Date = MM/DD/YYYY

// variables 
hal = "halal"; gnFree = "gluten free"; vg = "vegan"; veg = "vegeterian"; kos = "kosher"
brk = "breakfast"; brh = "brunch"; lh = "lunch"; dr = "dinner"; ln = "late night"
mon = "04/23/2018"; tue = "04/24/2018"; wed = "04/25/2018"; tr = "04/26/2018"; fr = "04/27/2018"; sat = "04/28/2018"; sun = "04/29/2018"


//Dishes format | dish = {diet:["vegan", "halal"], meal:"dinner", date:"date", calories: 500}
roastedChicken = {diet: [hal, gnFree], meal: dr, date:mon, description: "Herb Roasted Chicken with potatoes and zuccini on the side"}
vegetableMedley = {diet: [veg, vg, kos, hal, gnFree], meal: dr, date:mon, description: "Roasted Vegtable Medley with Rosmary"}
chickenFingers = {diet: [kos,hal], meal: dr, date: mon, description: "Breaded Chicken Fingers"}
chickenBowl = {diet: [kos, hal], meal: dr, date: mon, description: "Warm Hearty Chichen Noodle Bowl with an assortment of vegetables"}
shrimpBowl = {diet: [], meal: dr, date: mon, description: "Shrimp Bowl with quinua base and vegtable salad"}
tofuBowl = {diet: [vg, veg, hal, kos], meal: dr, date: mon, description: "Tofu Bowl with quinua base and vegtable salad"}
steamedMussels = {diet: [], meal: dr, date: mon, description: "Steamed Mussels with Garlic and Parsley"}
grilledPorkOverRice = {diet: [], meal: dr, date: mon, description: "Grilled Pork served over Basmati Rice"}

jerkedChicken ={diet: [hal, gnFree], meal:dr, date: mon, description: "Oven Baked Jerk Chicken served over white rice"}
chickenSoup = {diet: [gnFree], meal:dr, date: mon, description: "Warm Hearty Chichen Soup with an assortment of vegetables"}
vegetableSoup = {diet: [veg, vg, gnFree], meal:dr, date: mon, description: "Warm Soup with an assortment of vegetables"}
tofuWVeggies = {diet: [veg, vg, gnFree], meal: dr, date: mon, description: "Tofu Bowl with quinua base and vegtable salad"}
chickenCurry = {diet: [gnFree, hal], meal: dr, date: mon, description: "Chicken Curry with basmati rice"}
pineapplePorkCutlet = {diet: [gnFree], meal: dr, date: mon, description: "Pinapple Pork Cutlet served with rice"}


// Dorm dishes format | DormDishes = {entree: {diet:["vegan", "halal"], meal:"dinner", date:"date", calories: 500}}
bakerDishes = {"Roasted Chicken": roastedChicken, "Vegetable Medley":vegetableMedley, "Chicken Fingers":chickenFingers, "Chicken Curry": chickenCurry, "Jerked Tofu With Veggies": tofuWVeggies, "Pineapple Pork Cutlet": pineapplePorkCutlet}
maseehDishes = {"Shrimp Bowl": shrimpBowl, "Chicken Bowl":chickenBowl, "Shrimp Bowl":shrimpBowl, "Chicken Soup": chickenSoup, "Vegetable Soup": vegetableSoup, "Chicken Curry":chickenCurry, "Pineapple Pork Cutlet": pineapplePorkCutlet}
nextDishes = {"Tofu Bowl": tofuBowl, "Steamed Mussels": steamedMussels, "Grilled Pork Over Basmati Rice": grilledPorkOverRice, "Chicken Curry": chickenCurry, "Jerked Tofu With Veggies": tofuWVeggies, "Pineapple Pork Cutlet": pineapplePorkCutlet}
mccormickDishes = {"Roasted Chicken": roastedChicken, "Vegetable Medley":vegetableMedley, "Chicken Fingers":chickenFingers, "Vegetable Soup": vegetableSoup, "Chicken Curry":chickenCurry, "Pineapple Pork Cutlet": pineapplePorkCutlet}
simmonsDishes = {"Roasted Chicken": roastedChicken, "Vegetable Medley":vegetableMedley, "Chicken Fingers":chickenFingers, "Vegetable Soup": vegetableSoup, "Chicken Curry":chickenCurry, "Pineapple Pork Cutlet": pineapplePorkCutlet}

// global variables!!   
const ALLDISHES = {"baker": bakerDishes, "next": nextDishes, "mccormick": mccormickDishes, "simmons":simmonsDishes, "maseeh": maseehDishes}
const SPECIALS = ["Sushi Night at Baker Dorm", "Soul Food in McCormick", "Pizza Night in Next House", "Vegan Friendly Food in Simmons", "There is Nothing Special in Maseeh"] 
var favoriteDishes = new Set()





