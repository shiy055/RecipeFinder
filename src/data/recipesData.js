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
    },
    {
        id: 6,
        name: "Fettuccine Alfredo",
        ingredients: [
            "oregano",
            "capers",
            "olive oil",
            "white wine",
            "mascarpone"
        ],
        time: "53 minutes",
        difficulty: "Easy",
        category: "Pasta",
        image: "https://source.unsplash.com/featured/?italian,food,pasta",
        steps: [
            "Serve with fresh herbs on top.",
            "Add ingredients and stir well.",
            "Boil water and cook the pasta.",
            "Simmer until cooked through.",
            "Saut\u00e9 garlic and onion until soft."
        ]
    },
    {
        id: 7,
        name: "Lasagna Bolognese",
        ingredients: [
            "espresso",
            "onion",
            "white wine",
            "basil",
            "mascarpone"
        ],
        time: "24 minutes",
        difficulty: "Medium",
        category: "Seafood",
        image: "https://source.unsplash.com/featured/?italian,food,seafood",
        steps: [
            "Add ingredients and stir well.",
            "Heat olive oil in a pan.",
            "Saut\u00e9 garlic and onion until soft.",
            "Serve with fresh herbs on top.",
            "Simmer until cooked through."
        ]
    },
    {
        id: 8,
        name: "Gnocchi al Pesto",
        ingredients: [
            "ladyfingers",
            "arborio rice",
            "capers",
            "white wine",
            "penne"
        ],
        time: "50 minutes",
        difficulty: "Medium",
        category: "Appetizer",
        image: "https://source.unsplash.com/featured/?italian,food,appetizer",
        steps: [
            "Heat olive oil in a pan.",
            "Boil water and cook the pasta.",
            "Add ingredients and stir well.",
            "Saut\u00e9 garlic and onion until soft.",
            "Simmer until cooked through."
        ]
    },
    {
        id: 9,
        name: "Penne all\u2019Arrabbiata",
        ingredients: [
            "espresso",
            "capers",
            "anchovies",
            "eggplant",
            "cherry tomatoes"
        ],
        time: "47 minutes",
        difficulty: "Hard",
        category: "Appetizer",
        image: "https://source.unsplash.com/featured/?italian,food,appetizer",
        steps: [
            "Saut\u00e9 garlic and onion until soft.",
            "Heat olive oil in a pan.",
            "Boil water and cook the pasta.",
            "Add ingredients and stir well.",
            "Serve with fresh herbs on top."
        ]
    },
    {
        id: 10,
        name: "Orecchiette with Broccoli Rabe",
        ingredients: [
            "white wine",
            "parmesan",
            "oregano",
            "zucchini",
            "eggplant"
        ],
        time: "37 minutes",
        difficulty: "Medium",
        category: "Side",
        image: "https://source.unsplash.com/featured/?italian,food,side",
        steps: [
            "Boil water and cook the pasta.",
            "Saut\u00e9 garlic and onion until soft.",
            "Serve with fresh herbs on top.",
            "Add ingredients and stir well.",
            "Simmer until cooked through."
        ]
    },
    {
        id: 11,
        name: "Linguine alle Vongole",
        ingredients: [
            "capers",
            "zucchini",
            "garlic",
            "ricotta",
            "prosciutto"
        ],
        time: "23 minutes",
        difficulty: "Medium",
        category: "Soup",
        image: "https://source.unsplash.com/featured/?italian,food,soup",
        steps: [
            "Saut\u00e9 garlic and onion until soft.",
            "Simmer until cooked through.",
            "Serve with fresh herbs on top.",
            "Add ingredients and stir well.",
            "Heat olive oil in a pan."
        ]
    },
    {
        id: 12,
        name: "Tagliatelle al Ragu",
        ingredients: [
            "parmesan",
            "zucchini",
            "ladyfingers",
            "onion",
            "eggplant"
        ],
        time: "49 minutes",
        difficulty: "Medium",
        category: "Pizza",
        image: "https://source.unsplash.com/featured/?italian,food,pizza",
        steps: [
            "Add ingredients and stir well.",
            "Serve with fresh herbs on top.",
            "Simmer until cooked through.",
            "Boil water and cook the pasta.",
            "Saut\u00e9 garlic and onion until soft."
        ]
    },
    {
        id: 13,
        name: "Pasta e Fagioli",
        ingredients: [
            "tomato sauce",
            "eggs",
            "white wine",
            "cherry tomatoes",
            "arborio rice"
        ],
        time: "44 minutes",
        difficulty: "Hard",
        category: "Side",
        image: "https://source.unsplash.com/featured/?italian,food,side",
        steps: [
            "Add ingredients and stir well.",
            "Saut\u00e9 garlic and onion until soft.",
            "Heat olive oil in a pan.",
            "Serve with fresh herbs on top.",
            "Simmer until cooked through."
        ]
    },
    {
        id: 14,
        name: "Tortellini in Brodo",
        ingredients: [
            "zucchini",
            "eggplant",
            "mascarpone",
            "white wine",
            "eggs"
        ],
        time: "44 minutes",
        difficulty: "Hard",
        category: "Main",
        image: "https://source.unsplash.com/featured/?italian,food,main",
        steps: [
            "Heat olive oil in a pan.",
            "Serve with fresh herbs on top.",
            "Saut\u00e9 garlic and onion until soft.",
            "Boil water and cook the pasta.",
            "Simmer until cooked through."
        ]
    },
    {
        id: 15,
        name: "Cacio e Pepe",
        ingredients: [
            "espresso",
            "prosciutto",
            "arborio rice",
            "white wine",
            "eggplant"
        ],
        time: "48 minutes",
        difficulty: "Hard",
        category: "Side",
        image: "https://source.unsplash.com/featured/?italian,food,side",
        steps: [
            "Boil water and cook the pasta.",
            "Saut\u00e9 garlic and onion until soft.",
            "Add ingredients and stir well.",
            "Serve with fresh herbs on top.",
            "Heat olive oil in a pan."
        ]
    },
    {
        id: 16,
        name: "Pizza Quattro Stagioni",
        ingredients: [
            "pancetta",
            "espresso",
            "mozzarella",
            "butter",
            "garlic"
        ],
        time: "23 minutes",
        difficulty: "Hard",
        category: "Seafood",
        image: "https://source.unsplash.com/featured/?italian,food,seafood",
        steps: [
            "Add ingredients and stir well.",
            "Serve with fresh herbs on top.",
            "Simmer until cooked through.",
            "Heat olive oil in a pan.",
            "Saut\u00e9 garlic and onion until soft."
        ]
    },
    {
        id: 17,
        name: "Pizza Marinara",
        ingredients: [
            "ricotta",
            "saffron",
            "butter",
            "capers",
            "eggplant"
        ],
        time: "17 minutes",
        difficulty: "Easy",
        category: "Pasta",
        image: "https://source.unsplash.com/featured/?italian,food,pasta",
        steps: [
            "Boil water and cook the pasta.",
            "Heat olive oil in a pan.",
            "Saut\u00e9 garlic and onion until soft.",
            "Serve with fresh herbs on top.",
            "Simmer until cooked through."
        ]
    },
    {
        id: 18,
        name: "Pizza Capricciosa",
        ingredients: [
            "arborio rice",
            "mascarpone",
            "thyme",
            "white wine",
            "ricotta"
        ],
        time: "50 minutes",
        difficulty: "Medium",
        category: "Salad",
        image: "https://source.unsplash.com/featured/?italian,food,salad",
        steps: [
            "Boil water and cook the pasta.",
            "Saut\u00e9 garlic and onion until soft.",
            "Simmer until cooked through.",
            "Heat olive oil in a pan.",
            "Serve with fresh herbs on top."
        ]
    },
    {
        id: 19,
        name: "Pizza Bianca",
        ingredients: [
            "mozzarella",
            "white wine",
            "parmesan",
            "anchovies",
            "saffron"
        ],
        time: "19 minutes",
        difficulty: "Medium",
        category: "Dessert",
        image: "https://source.unsplash.com/featured/?italian,food,dessert",
        steps: [
            "Heat olive oil in a pan.",
            "Boil water and cook the pasta.",
            "Serve with fresh herbs on top.",
            "Simmer until cooked through.",
            "Saut\u00e9 garlic and onion until soft."
        ]
    },
    {
        id: 20,
        name: "Pizza Diavola",
        ingredients: [
            "eggplant",
            "oregano",
            "onion",
            "olive oil",
            "arborio rice"
        ],
        time: "55 minutes",
        difficulty: "Easy",
        category: "Soup",
        image: "https://source.unsplash.com/featured/?italian,food,soup",
        steps: [
            "Simmer until cooked through.",
            "Saut\u00e9 garlic and onion until soft.",
            "Heat olive oil in a pan.",
            "Add ingredients and stir well.",
            "Serve with fresh herbs on top."
        ]
    },
    {
        id: 21,
        name: "Risotto ai Funghi",
        ingredients: [
            "eggs",
            "garlic",
            "espresso",
            "oregano",
            "white wine"
        ],
        time: "53 minutes",
        difficulty: "Medium",
        category: "Seafood",
        image: "https://source.unsplash.com/featured/?italian,food,seafood",
        steps: [
            "Heat olive oil in a pan.",
            "Simmer until cooked through.",
            "Boil water and cook the pasta.",
            "Add ingredients and stir well.",
            "Saut\u00e9 garlic and onion until soft."
        ]
    },
    {
        id: 22,
        name: "Risotto al Barolo",
        ingredients: [
            "prosciutto",
            "garlic",
            "anchovies",
            "cherry tomatoes",
            "white wine"
        ],
        time: "17 minutes",
        difficulty: "Easy",
        category: "Pasta",
        image: "https://source.unsplash.com/featured/?italian,food,pasta",
        steps: [
            "Add ingredients and stir well.",
            "Saut\u00e9 garlic and onion until soft.",
            "Serve with fresh herbs on top.",
            "Simmer until cooked through.",
            "Boil water and cook the pasta."
        ]
    },
    {
        id: 23,
        name: "Risotto al Limone",
        ingredients: [
            "ricotta",
            "onion",
            "eggplant",
            "basil",
            "prosciutto"
        ],
        time: "31 minutes",
        difficulty: "Medium",
        category: "Pasta",
        image: "https://source.unsplash.com/featured/?italian,food,pasta",
        steps: [
            "Saut\u00e9 garlic and onion until soft.",
            "Serve with fresh herbs on top.",
            "Add ingredients and stir well.",
            "Boil water and cook the pasta.",
            "Simmer until cooked through."
        ]
    },
    {
        id: 24,
        name: "Risotto alla Zucca",
        ingredients: [
            "mozzarella",
            "spaghetti",
            "eggs",
            "eggplant",
            "zucchini"
        ],
        time: "24 minutes",
        difficulty: "Hard",
        category: "Main",
        image: "https://source.unsplash.com/featured/?italian,food,main",
        steps: [
            "Serve with fresh herbs on top.",
            "Boil water and cook the pasta.",
            "Heat olive oil in a pan.",
            "Saut\u00e9 garlic and onion until soft.",
            "Simmer until cooked through."
        ]
    },
    {
        id: 25,
        name: "Seafood Risotto",
        ingredients: [
            "tomato sauce",
            "parmesan",
            "cherry tomatoes",
            "mascarpone",
            "basil"
        ],
        time: "46 minutes",
        difficulty: "Hard",
        category: "Appetizer",
        image: "https://source.unsplash.com/featured/?italian,food,appetizer",
        steps: [
            "Serve with fresh herbs on top.",
            "Add ingredients and stir well.",
            "Boil water and cook the pasta.",
            "Saut\u00e9 garlic and onion until soft.",
            "Simmer until cooked through."
        ]
    },
    {
        id: 26,
        name: "Panna Cotta",
        ingredients: [
            "saffron",
            "tomato sauce",
            "thyme",
            "ladyfingers",
            "oregano"
        ],
        time: "26 minutes",
        difficulty: "Easy",
        category: "Seafood",
        image: "https://source.unsplash.com/featured/?italian,food,seafood",
        steps: [
            "Boil water and cook the pasta.",
            "Simmer until cooked through.",
            "Heat olive oil in a pan.",
            "Saut\u00e9 garlic and onion until soft.",
            "Serve with fresh herbs on top."
        ]
    },
    {
        id: 27,
        name: "Cannoli Siciliani",
        ingredients: [
            "cherry tomatoes",
            "garlic",
            "zucchini",
            "saffron",
            "espresso"
        ],
        time: "36 minutes",
        difficulty: "Medium",
        category: "Seafood",
        image: "https://source.unsplash.com/featured/?italian,food,seafood",
        steps: [
            "Simmer until cooked through.",
            "Heat olive oil in a pan.",
            "Boil water and cook the pasta.",
            "Saut\u00e9 garlic and onion until soft.",
            "Add ingredients and stir well."
        ]
    },
    {
        id: 28,
        name: "Zabaglione",
        ingredients: [
            "eggplant",
            "basil",
            "prosciutto",
            "thyme",
            "white wine"
        ],
        time: "25 minutes",
        difficulty: "Hard",
        category: "Pizza",
        image: "https://source.unsplash.com/featured/?italian,food,pizza",
        steps: [
            "Simmer until cooked through.",
            "Serve with fresh herbs on top.",
            "Add ingredients and stir well.",
            "Saut\u00e9 garlic and onion until soft.",
            "Heat olive oil in a pan."
        ]
    },
    {
        id: 29,
        name: "Affogato",
        ingredients: [
            "saffron",
            "ricotta",
            "mozzarella",
            "olive oil",
            "eggplant"
        ],
        time: "29 minutes",
        difficulty: "Medium",
        category: "Salad",
        image: "https://source.unsplash.com/featured/?italian,food,salad",
        steps: [
            "Serve with fresh herbs on top.",
            "Boil water and cook the pasta.",
            "Add ingredients and stir well.",
            "Saut\u00e9 garlic and onion until soft.",
            "Heat olive oil in a pan."
        ]
    },
    {
        id: 30,
        name: "Sfogliatelle",
        ingredients: [
            "basil",
            "penne",
            "oregano",
            "garlic",
            "thyme"
        ],
        time: "52 minutes",
        difficulty: "Hard",
        category: "Seafood",
        image: "https://source.unsplash.com/featured/?italian,food,seafood",
        steps: [
            "Simmer until cooked through.",
            "Serve with fresh herbs on top.",
            "Boil water and cook the pasta.",
            "Add ingredients and stir well.",
            "Heat olive oil in a pan."
        ]
    },
    {
        id: 31,
        name: "Insalata di Riso",
        ingredients: [
            "butter",
            "espresso",
            "olive oil",
            "garlic",
            "arborio rice"
        ],
        time: "36 minutes",
        difficulty: "Hard",
        category: "Pizza",
        image: "https://source.unsplash.com/featured/?italian,food,pizza",
        steps: [
            "Serve with fresh herbs on top.",
            "Simmer until cooked through.",
            "Saut\u00e9 garlic and onion until soft.",
            "Boil water and cook the pasta.",
            "Heat olive oil in a pan."
        ]
    },
    {
        id: 32,
        name: "Panzanella",
        ingredients: [
            "mozzarella",
            "ladyfingers",
            "olive oil",
            "arborio rice",
            "tomato sauce"
        ],
        time: "58 minutes",
        difficulty: "Hard",
        category: "Pasta",
        image: "https://source.unsplash.com/featured/?italian,food,pasta",
        steps: [
            "Saut\u00e9 garlic and onion until soft.",
            "Heat olive oil in a pan.",
            "Add ingredients and stir well.",
            "Simmer until cooked through.",
            "Boil water and cook the pasta."
        ]
    },
    {
        id: 33,
        name: "Insalata di Polpo",
        ingredients: [
            "eggplant",
            "cherry tomatoes",
            "saffron",
            "garlic",
            "oregano"
        ],
        time: "26 minutes",
        difficulty: "Hard",
        category: "Appetizer",
        image: "https://source.unsplash.com/featured/?italian,food,appetizer",
        steps: [
            "Simmer until cooked through.",
            "Boil water and cook the pasta.",
            "Heat olive oil in a pan.",
            "Serve with fresh herbs on top.",
            "Add ingredients and stir well."
        ]
    },
    {
        id: 34,
        name: "Insalata Capricciosa",
        ingredients: [
            "mozzarella",
            "thyme",
            "anchovies",
            "arborio rice",
            "butter"
        ],
        time: "51 minutes",
        difficulty: "Hard",
        category: "Seafood",
        image: "https://source.unsplash.com/featured/?italian,food,seafood",
        steps: [
            "Add ingredients and stir well.",
            "Saut\u00e9 garlic and onion until soft.",
            "Boil water and cook the pasta.",
            "Heat olive oil in a pan.",
            "Simmer until cooked through."
        ]
    },
    {
        id: 35,
        name: "Carpaccio di Manzo",
        ingredients: [
            "tomato sauce",
            "prosciutto",
            "onion",
            "oregano",
            "olive oil"
        ],
        time: "42 minutes",
        difficulty: "Medium",
        category: "Main",
        image: "https://source.unsplash.com/featured/?italian,food,main",
        steps: [
            "Serve with fresh herbs on top.",
            "Saut\u00e9 garlic and onion until soft.",
            "Boil water and cook the pasta.",
            "Simmer until cooked through.",
            "Heat olive oil in a pan."
        ]
    },
    {
        id: 36,
        name: "Minestrone",
        ingredients: [
            "mozzarella",
            "eggplant",
            "prosciutto",
            "saffron",
            "thyme"
        ],
        time: "25 minutes",
        difficulty: "Easy",
        category: "Appetizer",
        image: "https://source.unsplash.com/featured/?italian,food,appetizer",
        steps: [
            "Add ingredients and stir well.",
            "Saut\u00e9 garlic and onion until soft.",
            "Heat olive oil in a pan.",
            "Simmer until cooked through.",
            "Serve with fresh herbs on top."
        ]
    },
    {
        id: 37,
        name: "Zuppa Toscana",
        ingredients: [
            "parmesan",
            "eggs",
            "zucchini",
            "ricotta",
            "tomato sauce"
        ],
        time: "23 minutes",
        difficulty: "Easy",
        category: "Salad",
        image: "https://source.unsplash.com/featured/?italian,food,salad",
        steps: [
            "Heat olive oil in a pan.",
            "Boil water and cook the pasta.",
            "Simmer until cooked through.",
            "Saut\u00e9 garlic and onion until soft.",
            "Add ingredients and stir well."
        ]
    },
    {
        id: 38,
        name: "Stracciatella alla Romana",
        ingredients: [
            "mascarpone",
            "eggplant",
            "capers",
            "butter",
            "ricotta"
        ],
        time: "37 minutes",
        difficulty: "Easy",
        category: "Pizza",
        image: "https://source.unsplash.com/featured/?italian,food,pizza",
        steps: [
            "Saut\u00e9 garlic and onion until soft.",
            "Add ingredients and stir well.",
            "Heat olive oil in a pan.",
            "Serve with fresh herbs on top.",
            "Boil water and cook the pasta."
        ]
    },
    {
        id: 39,
        name: "Ribollita",
        ingredients: [
            "butter",
            "zucchini",
            "capers",
            "spaghetti",
            "cherry tomatoes"
        ],
        time: "27 minutes",
        difficulty: "Easy",
        category: "Soup",
        image: "https://source.unsplash.com/featured/?italian,food,soup",
        steps: [
            "Heat olive oil in a pan.",
            "Saut\u00e9 garlic and onion until soft.",
            "Serve with fresh herbs on top.",
            "Boil water and cook the pasta.",
            "Simmer until cooked through."
        ]
    },
    {
        id: 40,
        name: "Acquacotta",
        ingredients: [
            "penne",
            "olive oil",
            "spaghetti",
            "parmesan",
            "saffron"
        ],
        time: "54 minutes",
        difficulty: "Hard",
        category: "Appetizer",
        image: "https://source.unsplash.com/featured/?italian,food,appetizer",
        steps: [
            "Simmer until cooked through.",
            "Heat olive oil in a pan.",
            "Boil water and cook the pasta.",
            "Saut\u00e9 garlic and onion until soft.",
            "Serve with fresh herbs on top."
        ]
    },
    {
        id: 41,
        name: "Calamari Fritti",
        ingredients: [
            "zucchini",
            "tomato sauce",
            "penne",
            "mascarpone",
            "basil"
        ],
        time: "38 minutes",
        difficulty: "Hard",
        category: "Salad",
        image: "https://source.unsplash.com/featured/?italian,food,salad",
        steps: [
            "Simmer until cooked through.",
            "Add ingredients and stir well.",
            "Heat olive oil in a pan.",
            "Boil water and cook the pasta.",
            "Serve with fresh herbs on top."
        ]
    },
    {
        id: 42,
        name: "Bruschetta al Pomodoro",
        ingredients: [
            "ricotta",
            "eggs",
            "basil",
            "white wine",
            "oregano"
        ],
        time: "15 minutes",
        difficulty: "Hard",
        category: "Main",
        image: "https://source.unsplash.com/featured/?italian,food,main",
        steps: [
            "Boil water and cook the pasta.",
            "Simmer until cooked through.",
            "Add ingredients and stir well.",
            "Serve with fresh herbs on top.",
            "Saut\u00e9 garlic and onion until soft."
        ]
    },
    {
        id: 43,
        name: "Arancini",
        ingredients: [
            "saffron",
            "espresso",
            "eggs",
            "butter",
            "garlic"
        ],
        time: "42 minutes",
        difficulty: "Hard",
        category: "Pasta",
        image: "https://source.unsplash.com/featured/?italian,food,pasta",
        steps: [
            "Simmer until cooked through.",
            "Heat olive oil in a pan.",
            "Add ingredients and stir well.",
            "Serve with fresh herbs on top.",
            "Boil water and cook the pasta."
        ]
    },
    {
        id: 44,
        name: "Mozzarella in Carrozza",
        ingredients: [
            "white wine",
            "thyme",
            "spaghetti",
            "mozzarella",
            "capers"
        ],
        time: "50 minutes",
        difficulty: "Hard",
        category: "Appetizer",
        image: "https://source.unsplash.com/featured/?italian,food,appetizer",
        steps: [
            "Saut\u00e9 garlic and onion until soft.",
            "Boil water and cook the pasta.",
            "Serve with fresh herbs on top.",
            "Heat olive oil in a pan.",
            "Add ingredients and stir well."
        ]
    },
    {
        id: 45,
        name: "Suppl\u00ec",
        ingredients: [
            "thyme",
            "anchovies",
            "white wine",
            "penne",
            "capers"
        ],
        time: "59 minutes",
        difficulty: "Medium",
        category: "Main",
        image: "https://source.unsplash.com/featured/?italian,food,main",
        steps: [
            "Serve with fresh herbs on top.",
            "Add ingredients and stir well.",
            "Saut\u00e9 garlic and onion until soft.",
            "Boil water and cook the pasta.",
            "Heat olive oil in a pan."
        ]
    },
    {
        id: 46,
        name: "Polenta e Funghi",
        ingredients: [
            "olive oil",
            "pancetta",
            "mozzarella",
            "zucchini",
            "tomato sauce"
        ],
        time: "24 minutes",
        difficulty: "Easy",
        category: "Risotto",
        image: "https://source.unsplash.com/featured/?italian,food,risotto",
        steps: [
            "Add ingredients and stir well.",
            "Simmer until cooked through.",
            "Serve with fresh herbs on top.",
            "Heat olive oil in a pan.",
            "Boil water and cook the pasta."
        ]
    },
    {
        id: 47,
        name: "Melanzane alla Parmigiana",
        ingredients: [
            "saffron",
            "butter",
            "onion",
            "spaghetti",
            "cherry tomatoes"
        ],
        time: "44 minutes",
        difficulty: "Easy",
        category: "Salad",
        image: "https://source.unsplash.com/featured/?italian,food,salad",
        steps: [
            "Boil water and cook the pasta.",
            "Serve with fresh herbs on top.",
            "Saut\u00e9 garlic and onion until soft.",
            "Heat olive oil in a pan.",
            "Simmer until cooked through."
        ]
    },
    {
        id: 48,
        name: "Saltimbocca alla Romana",
        ingredients: [
            "zucchini",
            "parmesan",
            "prosciutto",
            "mascarpone",
            "oregano"
        ],
        time: "55 minutes",
        difficulty: "Easy",
        category: "Main",
        image: "https://source.unsplash.com/featured/?italian,food,main",
        steps: [
            "Saut\u00e9 garlic and onion until soft.",
            "Add ingredients and stir well.",
            "Serve with fresh herbs on top.",
            "Boil water and cook the pasta.",
            "Simmer until cooked through."
        ]
    },
    {
        id: 49,
        name: "Osso Buco",
        ingredients: [
            "mozzarella",
            "eggplant",
            "olive oil",
            "eggs",
            "tomato sauce"
        ],
        time: "22 minutes",
        difficulty: "Easy",
        category: "Appetizer",
        image: "https://source.unsplash.com/featured/?italian,food,appetizer",
        steps: [
            "Heat olive oil in a pan.",
            "Simmer until cooked through.",
            "Saut\u00e9 garlic and onion until soft.",
            "Add ingredients and stir well.",
            "Boil water and cook the pasta."
        ]
    },
    {
        id: 50,
        name: "Pollo alla Cacciatora",
        ingredients: [
            "spaghetti",
            "eggplant",
            "ladyfingers",
            "parmesan",
            "arborio rice"
        ],
        time: "29 minutes",
        difficulty: "Medium",
        category: "Soup",
        image: "https://source.unsplash.com/featured/?italian,food,soup",
        steps: [
            "Boil water and cook the pasta.",
            "Heat olive oil in a pan.",
            "Serve with fresh herbs on top.",
            "Simmer until cooked through.",
            "Saut\u00e9 garlic and onion until soft."
        ]
    }
];

export default recipesData;