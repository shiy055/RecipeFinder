//Contain 50 Italian recipes across Pizza, 
const recipesData = [
    {
        id: 1,
        name: "Spaghetti Carbonara",
        ingredients: ["spaghetti", "eggs", "pancetta", "parmesan", "pepper"],
        time: "25 minutes",
        difficulty: "Easy",
        category: "Pasta",
        image: "https://images.unsplash.com/photo-1574969903809-3f7a1668ceb0?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        steps: [
            "Boil spaghetti in salted water.",
            "Fry pancetta until crispy.",
            "Mix eggs and parmesan in a bowl.",
            "Combine everything off-heat and mix well.",
            "Season with black pepper and serve."
        ]
    },
    {
        id: 2,
        name: "Margherita Pizza",
        ingredients: ["pizza dough", "tomato sauce", "mozzarella", "basil", "olive oil"],
        time: "30 minutes",
        difficulty: "Medium",
        category: "Pizza",
        image: "https://images.unsplash.com/photo-1573821663912-6df460f9c684?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        steps: [
            "Preheat oven to 500°F.",
            "Roll out dough and spread tomato sauce.",
            "Add mozzarella slices and bake for 10-12 min.",
            "Top with basil and drizzle olive oil before serving."
        ]
    },
    {
        id: 3,
        name: "Risotto alla Milanese",
        ingredients: ["arborio rice", "saffron", "onion", "white wine", "parmesan", "butter"],
        time: "40 minutes",
        difficulty: "Hard",
        category: "Risotto",
        image: "https://images.unsplash.com/photo-1581073746562-e7fd2422f0eb?q=80&w=3274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        steps: [
            "Sauté onions in butter.",
            "Add rice and cook until translucent.",
            "Deglaze with white wine.",
            "Add broth gradually, stirring constantly.",
            "Add saffron, finish with parmesan and butter."
        ]
    },
    {
        id: 4,
        name: "Tiramisu",
        ingredients: ["mascarpone", "espresso", "ladyfingers", "cocoa powder", "eggs", "sugar"],
        time: "4 hours (chill)",
        difficulty: "Medium",
        category: "Dessert",
        image: "https://images.unsplash.com/photo-1707269388230-60ceceac3e6b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        steps: [
            "Mix mascarpone, eggs, and sugar.",
            "Dip ladyfingers in espresso.",
            "Layer cream and ladyfingers in dish.",
            "Dust with cocoa and chill 4 hours."
        ]
    },
    {
        id: 5,
        name: "Caprese Salad",
        ingredients: ["mozzarella", "tomato", "basil", "olive oil", "salt"],
        time: "10 minutes",
        difficulty: "Easy",
        category: "Salad",
        image: "https://plus.unsplash.com/premium_photo-1677619680447-c59cead50adc?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        steps: [
            "Slice mozzarella and tomatoes.",
            "Layer with basil leaves.",
            "Drizzle with olive oil and sprinkle salt."
        ]
    }
];

export default recipesData;