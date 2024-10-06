// Extended meal plans with multiple options for each meal
const mealPlans = {
    vegetarian: {
        breakfast: [
            "Avocado Toast with Poached Eggs",
            "Smoothie Bowl with Almond Butter",
            "Vegetable Omelette with Toast"
        ],
        lunch: [
            "Vegetable Stir-fry with Quinoa",
            "Greek Salad with Hummus and Pita",
            "Grilled Vegetable Wrap"
        ],
        dinner: [
            "Lentil Soup with Whole Grain Bread",
            "Stuffed Bell Peppers with Rice",
            "Eggplant Parmesan"
        ],
        groceryList: ["Avocados", "Eggs", "Quinoa", "Lentils", "Vegetables", "Hummus", "Pita", "Rice"]
    },
    vegan: {
        breakfast: [
            "Chia Pudding with Fresh Berries",
            "Vegan Pancakes with Maple Syrup",
            "Smoothie with Spinach and Almond Milk"
        ],
        lunch: [
            "Quinoa Salad with Tofu",
            "Vegan Burrito Bowl",
            "Lentil Salad with Roasted Vegetables"
        ],
        dinner: [
            "Vegan Curry with Rice",
            "Stuffed Sweet Potatoes with Black Beans",
            "Vegan Stir-fry with Tofu"
        ],
        groceryList: ["Chia Seeds", "Tofu", "Coconut Milk", "Rice", "Spinach", "Lentils", "Vegetables"]
    },
    keto: {
        breakfast: [
            "Egg Muffins with Spinach and Cheese",
            "Avocado with Scrambled Eggs",
            "Bacon and Cheese Omelette"
        ],
        lunch: [
            "Chicken Caesar Salad",
            "Zucchini Noodles with Pesto",
            "Cobb Salad with Blue Cheese"
        ],
        dinner: [
            "Steak with Asparagus",
            "Grilled Salmon with Broccoli",
            "Chicken with Cauliflower Mash"
        ],
        groceryList: ["Eggs", "Chicken", "Steak", "Asparagus", "Spinach", "Bacon", "Cheese", "Salmon"]
    },
    paleo: {
        breakfast: [
            "Scrambled Eggs with Sausage",
            "Paleo Pancakes with Berries",
            "Sweet Potato Hash with Eggs"
        ],
        lunch: [
            "Grilled Chicken with Sweet Potatoes",
            "Paleo Taco Salad",
            "Stuffed Zucchini with Ground Beef"
        ],
        dinner: [
            "Beef Stir-fry with Vegetables",
            "Grilled Pork Chops with Spinach",
            "Salmon with Roasted Carrots"
        ],
        groceryList: ["Eggs", "Sausage", "Chicken", "Sweet Potatoes", "Vegetables", "Beef", "Pork Chops", "Salmon"]
    },
    omnivore: {
        breakfast: [
            "Oatmeal with Fresh Fruit",
            "Scrambled Eggs with Toast",
            "Smoothie with Yogurt and Berries"
        ],
        lunch: [
            "Turkey Sandwich with Avocado",
            "Chicken Caesar Wrap",
            "Grilled Cheese with Tomato Soup"
        ],
        dinner: [
            "Grilled Salmon with Quinoa",
            "Spaghetti Bolognese",
            "Roast Chicken with Potatoes"
        ],
        groceryList: ["Oatmeal", "Fruit", "Turkey", "Avocado", "Salmon", "Quinoa", "Chicken", "Bread", "Pasta"]
    }
};
// Function to generate a random meal plan
function getRandomMeal(mealOptions) {
    return mealOptions[Math.floor(Math.random() * mealOptions.length)];
}

// Handle form submission and generate the meal plan
document.getElementById("mealPlanForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Collect user input
    const dietType = document.getElementById("dietType").value;
    const allergies = document.getElementById("allergies").value;
    const calories = document.getElementById("calories").value;

    // Check if the diet type exists
    if (!mealPlans[dietType]) {
        alert("Please select a valid diet type.");
        return;
    }

    // Get the meal plan for the selected diet type
    const mealPlan = mealPlans[dietType];

    // Randomly select meals for breakfast, lunch, and dinner
    const randomBreakfast = getRandomMeal(mealPlan.breakfast);
    const randomLunch = getRandomMeal(mealPlan.lunch);
    const randomDinner = getRandomMeal(mealPlan.dinner);

    // Filter out any allergic ingredients from the grocery list
    const allergyArray = allergies.split(',').map(a => a.trim().toLowerCase());
    const filteredGroceryList = mealPlan.groceryList.filter(item =>
        !allergyArray.includes(item.toLowerCase())
    );

    // Display the generated meal plan and grocery list
    document.getElementById("mealPlanResults").innerHTML = `
        <h2>Your Custom Meal Plan</h2>
        <p><strong>Breakfast:</strong> ${randomBreakfast}</p>
        <p><strong>Lunch:</strong> ${randomLunch}</p>
        <p><strong>Dinner:</strong> ${randomDinner}</p>
        <h3>Grocery List</h3>
        <ul>
            ${filteredGroceryList.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
});
