/**
 * @file recipesData.js
 * @description Provides a static dataset of 50 Italian recipes used by the application.
 * Each recipe contains metadata such as ingredients, time, difficulty, category, image URL, and preparation steps.
 */


/**
 * @constant {Array<Object>} recipesData
 * @description Array of recipe objects. Used as the default data source for rendering, searching, and saving.
 *
 * Each recipe object contains the following fields:
 * @property {number} id - Unique identifier for the recipe.
 * @property {string} name - The name of the dish (e.g., "Spaghetti Carbonara").
 * @property {Array<string>} ingredients - List of ingredient keywords used for filtering.
 * @property {string} time - Estimated cooking or preparation time (e.g., "30 minutes").
 * @property {string} difficulty - Difficulty level of the recipe ("Easy", "Medium", "Hard").
 * @property {string} category - Type of dish (e.g., "Pasta", "Pizza", "Dessert").
 * @property {string} image - URL pointing to a recipe image (sourced from Pexels or manually added).
 * @property {Array<string>} steps - Ordered list of preparation or cooking instructions.
 */
const recipesData = [
    {
      "id": 1,
      "name": "Spaghetti Carbonara",
      "ingredients": [
        "spaghetti",
        "eggs",
        "pancetta",
        "parmesan",
        "pepper"
      ],
      "time": "25 minutes",
      "difficulty": "Easy",
      "category": "Pasta",
      "image": "https://images.pexels.com/photos/12918198/pexels-photo-12918198.jpeg",
      "steps": [
        "Boil spaghetti in salted water.",
        "Fry pancetta until crispy.",
        "Mix eggs and parmesan in a bowl.",
        "Combine everything off-heat and mix well.",
        "Season with black pepper and serve."
      ]
    },
    {
      "id": 2,
      "name": "Margherita Pizza",
      "ingredients": [
        "pizza dough",
        "tomato sauce",
        "mozzarella",
        "basil",
        "olive oil"
      ],
      "time": "30 minutes",
      "difficulty": "Medium",
      "category": "Pizza",
      "image": "https://images.pexels.com/photos/31708263/pexels-photo-31708263.jpeg",
      "steps": [
        "Preheat oven to 500°F.",
        "Roll out dough and spread tomato sauce.",
        "Add mozzarella slices and bake for 10-12 min.",
        "Top with basil and drizzle olive oil before serving."
      ]
    },
    {
      "id": 3,
      "name": "Risotto alla Milanese",
      "ingredients": [
        "arborio rice",
        "saffron",
        "onion",
        "white wine",
        "parmesan",
        "butter"
      ],
      "time": "40 minutes",
      "difficulty": "Hard",
      "category": "Risotto",
      "image": "https://images.pexels.com/photos/17517940/pexels-photo-17517940.jpeg",
      "steps": [
        "Sauté onions in butter.",
        "Add rice and cook until translucent.",
        "Deglaze with white wine.",
        "Add broth gradually, stirring constantly.",
        "Add saffron, finish with parmesan and butter."
      ]
    },
    {
      "id": 4,
      "name": "Tiramisu",
      "ingredients": [
        "mascarpone",
        "espresso",
        "ladyfingers",
        "cocoa powder",
        "eggs",
        "sugar"
      ],
      "time": "4 hours (chill)",
      "difficulty": "Medium",
      "category": "Dessert",
      "image": "https://images.pexels.com/photos/26890889/pexels-photo-26890889.jpeg",
      "steps": [
        "Mix mascarpone, eggs, and sugar.",
        "Dip ladyfingers in espresso.",
        "Layer cream and ladyfingers in dish.",
        "Dust with cocoa and chill 4 hours."
      ]
    },
    {
      "id": 5,
      "name": "Caprese Salad",
      "ingredients": [
        "mozzarella",
        "tomato",
        "basil",
        "olive oil",
        "salt"
      ],
      "time": "10 minutes",
      "difficulty": "Easy",
      "category": "Salad",
      "image": "https://images.pexels.com/photos/28594604/pexels-photo-28594604.jpeg",
      "steps": [
        "Slice mozzarella and tomatoes.",
        "Layer with basil leaves.",
        "Drizzle with olive oil and sprinkle salt."
      ]
    },
    {
      "id": 6,
      "name": "Fettuccine Alfredo",
      "ingredients": [
        "oregano",
        "capers",
        "olive oil",
        "white wine",
        "mascarpone"
      ],
      "time": "53 minutes",
      "difficulty": "Easy",
      "category": "Pasta",
      "image": "https://images.pexels.com/photos/13294537/pexels-photo-13294537.jpeg",
      "steps": [
        "Serve with fresh herbs on top.",
        "Add ingredients and stir well.",
        "Boil water and cook the pasta.",
        "Simmer until cooked through.",
        "Sauté garlic and onion until soft."
      ]
    },
    {
      "id": 7,
      "name": "Lasagna Bolognese",
      "ingredients": [
        "espresso",
        "onion",
        "white wine",
        "basil",
        "mascarpone"
      ],
      "time": "24 minutes",
      "difficulty": "Medium",
      "category": "Seafood",
      "image": "https://images.pexels.com/photos/5949888/pexels-photo-5949888.jpeg",
      "steps": [
        "Add ingredients and stir well.",
        "Heat olive oil in a pan.",
        "Sauté garlic and onion until soft.",
        "Serve with fresh herbs on top.",
        "Simmer until cooked through."
      ]
    },
    {
      "id": 8,
      "name": "Gnocchi al Pesto",
      "ingredients": [
        "ladyfingers",
        "arborio rice",
        "capers",
        "white wine",
        "penne"
      ],
      "time": "50 minutes",
      "difficulty": "Medium",
      "category": "Appetizer",
      "image": "https://images.pexels.com/photos/6659543/pexels-photo-6659543.jpeg",
      "steps": [
        "Heat olive oil in a pan.",
        "Boil water and cook the pasta.",
        "Add ingredients and stir well.",
        "Sauté garlic and onion until soft.",
        "Simmer until cooked through."
      ]
    },
    {
      "id": 9,
      "name": "Penne all’Arrabbiata",
      "ingredients": [
        "espresso",
        "capers",
        "anchovies",
        "eggplant",
        "cherry tomatoes"
      ],
      "time": "47 minutes",
      "difficulty": "Hard",
      "category": "Appetizer",
      "image": "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
      "steps": [
        "Sauté garlic and onion until soft.",
        "Heat olive oil in a pan.",
        "Boil water and cook the pasta.",
        "Add ingredients and stir well.",
        "Serve with fresh herbs on top."
      ]
    },
    {
      "id": 10,
      "name": "Orecchiette with Broccoli Rabe",
      "ingredients": [
        "white wine",
        "parmesan",
        "oregano",
        "zucchini",
        "eggplant"
      ],
      "time": "37 minutes",
      "difficulty": "Medium",
      "category": "Side",
      "image": "https://images.pexels.com/photos/10815851/pexels-photo-10815851.jpeg",
      "steps": [
        "Boil water and cook the pasta.",
        "Sauté garlic and onion until soft.",
        "Serve with fresh herbs on top.",
        "Add ingredients and stir well.",
        "Simmer until cooked through."
      ]
    },
    {
      "id": 11,
      "name": "Linguine alle Vongole",
      "ingredients": [
        "capers",
        "zucchini",
        "garlic",
        "ricotta",
        "prosciutto"
      ],
      "time": "23 minutes",
      "difficulty": "Medium",
      "category": "Soup",
      "image": "https://images.pexels.com/photos/11642226/pexels-photo-11642226.jpeg",
      "steps": [
        "Sauté garlic and onion until soft.",
        "Simmer until cooked through.",
        "Serve with fresh herbs on top.",
        "Add ingredients and stir well.",
        "Heat olive oil in a pan."
      ]
    },
    {
      "id": 12,
      "name": "Tagliatelle al Ragu",
      "ingredients": [
        "parmesan",
        "zucchini",
        "ladyfingers",
        "onion",
        "eggplant"
      ],
      "time": "49 minutes",
      "difficulty": "Medium",
      "category": "Pizza",
      "image": "https://images.pexels.com/photos/13640223/pexels-photo-13640223.jpeg",
      "steps": [
        "Add ingredients and stir well.",
        "Serve with fresh herbs on top.",
        "Simmer until cooked through.",
        "Boil water and cook the pasta.",
        "Sauté garlic and onion until soft."
      ]
    },
    {
      "id": 13,
      "name": "Pasta e Fagioli",
      "ingredients": [
        "tomato sauce",
        "eggs",
        "white wine",
        "cherry tomatoes",
        "arborio rice"
      ],
      "time": "44 minutes",
      "difficulty": "Hard",
      "category": "Side",
      "image": "https://images.pexels.com/photos/14899491/pexels-photo-14899491.png",
      "steps": [
        "Add ingredients and stir well.",
        "Sauté garlic and onion until soft.",
        "Heat olive oil in a pan.",
        "Serve with fresh herbs on top.",
        "Simmer until cooked through."
      ]
    },
    {
      "id": 14,
      "name": "Tortellini in Brodo",
      "ingredients": [
        "zucchini",
        "eggplant",
        "mascarpone",
        "white wine",
        "eggs"
      ],
      "time": "44 minutes",
      "difficulty": "Hard",
      "category": "Main",
      "image": "https://images.pexels.com/photos/2412950/pexels-photo-2412950.jpeg",
      "steps": [
        "Heat olive oil in a pan.",
        "Serve with fresh herbs on top.",
        "Sauté garlic and onion until soft.",
        "Boil water and cook the pasta.",
        "Simmer until cooked through."
      ]
    },
    {
      "id": 15,
      "name": "Cacio e Pepe",
      "ingredients": [
        "espresso",
        "prosciutto",
        "arborio rice",
        "white wine",
        "eggplant"
      ],
      "time": "48 minutes",
      "difficulty": "Hard",
      "category": "Side",
      "image": "https://images.pexels.com/photos/5336537/pexels-photo-5336537.jpeg",
      "steps": [
        "Boil water and cook the pasta.",
        "Sauté garlic and onion until soft.",
        "Add ingredients and stir well.",
        "Serve with fresh herbs on top.",
        "Heat olive oil in a pan."
      ]
    },
    {
      "id": 16,
      "name": "Pizza Quattro Stagioni",
      "ingredients": [
        "pancetta",
        "espresso",
        "mozzarella",
        "butter",
        "garlic"
      ],
      "time": "23 minutes",
      "difficulty": "Hard",
      "category": "Seafood",
      "image": "https://images.pexels.com/photos/31708264/pexels-photo-31708264.jpeg",
      "steps": [
        "Add ingredients and stir well.",
        "Serve with fresh herbs on top.",
        "Simmer until cooked through.",
        "Heat olive oil in a pan.",
        "Sauté garlic and onion until soft."
      ]
    },
    {
      "id": 17,
      "name": "Pizza Marinara",
      "ingredients": [
        "ricotta",
        "saffron",
        "butter",
        "capers",
        "eggplant"
      ],
      "time": "17 minutes",
      "difficulty": "Easy",
      "category": "Pasta",
      "image": "https://images.pexels.com/photos/3761663/pexels-photo-3761663.jpeg",
      "steps": [
        "Boil water and cook the pasta.",
        "Heat olive oil in a pan.",
        "Sauté garlic and onion until soft.",
        "Serve with fresh herbs on top.",
        "Simmer until cooked through."
      ]
    },
    {
      "id": 18,
      "name": "Pizza Capricciosa",
      "ingredients": [
        "arborio rice",
        "mascarpone",
        "thyme",
        "white wine",
        "ricotta"
      ],
      "time": "50 minutes",
      "difficulty": "Medium",
      "category": "Salad",
      "image": "https://images.pexels.com/photos/13297355/pexels-photo-13297355.jpeg",
      "steps": [
        "Boil water and cook the pasta.",
        "Sauté garlic and onion until soft.",
        "Simmer until cooked through.",
        "Heat olive oil in a pan.",
        "Serve with fresh herbs on top."
      ]
    },
    {
      "id": 19,
      "name": "Pizza Bianca",
      "ingredients": [
        "mozzarella",
        "white wine",
        "parmesan",
        "anchovies",
        "saffron"
      ],
      "time": "19 minutes",
      "difficulty": "Medium",
      "category": "Dessert",
      "image": "https://images.pexels.com/photos/31708264/pexels-photo-31708264.jpeg",
      "steps": [
        "Heat olive oil in a pan.",
        "Boil water and cook the pasta.",
        "Serve with fresh herbs on top.",
        "Simmer until cooked through.",
        "Sauté garlic and onion until soft."
      ]
    },
    {
      "id": 20,
      "name": "Pizza Diavola",
      "ingredients": [
        "eggplant",
        "oregano",
        "onion",
        "olive oil",
        "arborio rice"
      ],
      "time": "55 minutes",
      "difficulty": "Easy",
      "category": "Soup",
      "image": "https://images.pexels.com/photos/31708264/pexels-photo-31708264.jpeg",
      "steps": [
        "Simmer until cooked through.",
        "Sauté garlic and onion until soft.",
        "Heat olive oil in a pan.",
        "Add ingredients and stir well.",
        "Serve with fresh herbs on top."
      ]
    },
    {
      "id": 21,
      "name": "Risotto ai Funghi",
      "ingredients": [
        "eggs",
        "garlic",
        "espresso",
        "oregano",
        "white wine"
      ],
      "time": "53 minutes",
      "difficulty": "Medium",
      "category": "Seafood",
      "image": "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      "steps": [
        "Heat olive oil in a pan.",
        "Simmer until cooked through.",
        "Boil water and cook the pasta.",
        "Add ingredients and stir well.",
        "Sauté garlic and onion until soft."
      ]
    },
    {
      "id": 22,
      "name": "Risotto al Barolo",
      "ingredients": [
        "prosciutto",
        "garlic",
        "anchovies",
        "cherry tomatoes",
        "white wine"
      ],
      "time": "17 minutes",
      "difficulty": "Easy",
      "category": "Pasta",
      "image": "https://images.pexels.com/photos/18303026/pexels-photo-18303026.jpeg",
      "steps": [
        "Add ingredients and stir well.",
        "Sauté garlic and onion until soft.",
        "Serve with fresh herbs on top.",
        "Simmer until cooked through.",
        "Boil water and cook the pasta."
      ]
    },
    {
      "id": 23,
      "name": "Risotto al Limone",
      "ingredients": [
        "ricotta",
        "onion",
        "eggplant",
        "basil",
        "prosciutto"
      ],
      "time": "31 minutes",
      "difficulty": "Medium",
      "category": "Pasta",
      "image": "https://images.pexels.com/photos/18303026/pexels-photo-18303026.jpeg",
      "steps": [
        "Sauté garlic and onion until soft.",
        "Serve with fresh herbs on top.",
        "Add ingredients and stir well.",
        "Boil water and cook the pasta.",
        "Simmer until cooked through."
      ]
    },
    {
      "id": 24,
      "name": "Risotto alla Zucca",
      "ingredients": [
        "mozzarella",
        "spaghetti",
        "eggs",
        "eggplant",
        "zucchini"
      ],
      "time": "24 minutes",
      "difficulty": "Hard",
      "category": "Main",
      "image": "https://images.pexels.com/photos/17517940/pexels-photo-17517940.jpeg",
      "steps": [
        "Serve with fresh herbs on top.",
        "Boil water and cook the pasta.",
        "Heat olive oil in a pan.",
        "Sauté garlic and onion until soft.",
        "Simmer until cooked through."
      ]
    },
    {
      "id": 25,
      "name": "Seafood Risotto",
      "ingredients": [
        "tomato sauce",
        "parmesan",
        "cherry tomatoes",
        "mascarpone",
        "basil"
      ],
      "time": "46 minutes",
      "difficulty": "Hard",
      "category": "Appetizer",
      "image": "https://images.pexels.com/photos/31699637/pexels-photo-31699637.png",
      "steps": [
        "Serve with fresh herbs on top.",
        "Add ingredients and stir well.",
        "Boil water and cook the pasta.",
        "Sauté garlic and onion until soft.",
        "Simmer until cooked through."
      ]
    },
    {
      "id": 26,
      "name": "Panna Cotta",
      "ingredients": [
        "saffron",
        "tomato sauce",
        "thyme",
        "ladyfingers",
        "oregano"
      ],
      "time": "26 minutes",
      "difficulty": "Easy",
      "category": "Seafood",
      "image": "https://images.pexels.com/photos/29283850/pexels-photo-29283850.jpeg",
      "steps": [
        "Boil water and cook the pasta.",
        "Simmer until cooked through.",
        "Heat olive oil in a pan.",
        "Sauté garlic and onion until soft.",
        "Serve with fresh herbs on top."
      ]
    },
    {
      "id": 27,
      "name": "Cannoli Siciliani",
      "ingredients": [
        "cherry tomatoes",
        "garlic",
        "zucchini",
        "saffron",
        "espresso"
      ],
      "time": "36 minutes",
      "difficulty": "Medium",
      "category": "Seafood",
      "image": "https://images.pexels.com/photos/11782110/pexels-photo-11782110.jpeg",
      "steps": [
        "Simmer until cooked through.",
        "Heat olive oil in a pan.",
        "Boil water and cook the pasta.",
        "Sauté garlic and onion until soft.",
        "Add ingredients and stir well."
      ]
    },
    {
      "id": 28,
      "name": "Zabaglione",
      "ingredients": [
        "eggplant",
        "basil",
        "prosciutto",
        "thyme",
        "white wine"
      ],
      "time": "25 minutes",
      "difficulty": "Hard",
      "category": "Pizza",
      "image": "https://images.pexels.com/photos/28446024/pexels-photo-28446024.jpeg",
      "steps": [
        "Simmer until cooked through.",
        "Serve with fresh herbs on top.",
        "Add ingredients and stir well.",
        "Sauté garlic and onion until soft.",
        "Heat olive oil in a pan."
      ]
    },
    {
      "id": 29,
      "name": "Affogato",
      "ingredients": [
        "saffron",
        "ricotta",
        "mozzarella",
        "olive oil",
        "eggplant"
      ],
      "time": "29 minutes",
      "difficulty": "Medium",
      "category": "Salad",
      "image": "https://images.pexels.com/photos/17987073/pexels-photo-17987073/free-photo-of-person-pouring-coffee-on-ice-creams.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "steps": [
        "Serve with fresh herbs on top.",
        "Boil water and cook the pasta.",
        "Add ingredients and stir well.",
        "Sauté garlic and onion until soft.",
        "Heat olive oil in a pan."
      ]
    },
    {
      "id": 30,
      "name": "Sfogliatelle",
      "ingredients": [
        "basil",
        "penne",
        "oregano",
        "garlic",
        "thyme"
      ],
      "time": "52 minutes",
      "difficulty": "Hard",
      "category": "Seafood",
      "image": "https://images.pexels.com/photos/19859289/pexels-photo-19859289/free-photo-of-small-cakes-with-cream.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "steps": [
        "Simmer until cooked through.",
        "Serve with fresh herbs on top.",
        "Boil water and cook the pasta.",
        "Add ingredients and stir well.",
        "Heat olive oil in a pan."
      ]
    },
    {
      "id": 31,
      "name": "Insalata di Riso",
      "ingredients": [
        "butter",
        "espresso",
        "olive oil",
        "garlic",
        "arborio rice"
      ],
      "time": "36 minutes",
      "difficulty": "Hard",
      "category": "Pizza",
      "image": "https://images.pexels.com/photos/30084557/pexels-photo-30084557.jpeg",
      "steps": [
        "Serve with fresh herbs on top.",
        "Simmer until cooked through.",
        "Sauté garlic and onion until soft.",
        "Boil water and cook the pasta.",
        "Heat olive oil in a pan."
      ]
    },
    {
      "id": 32,
      "name": "Panzanella",
      "ingredients": [
        "mozzarella",
        "ladyfingers",
        "olive oil",
        "arborio rice",
        "tomato sauce"
      ],
      "time": "58 minutes",
      "difficulty": "Hard",
      "category": "Pasta",
      "image": "https://images.pexels.com/photos/7239429/pexels-photo-7239429.jpeg",
      "steps": [
        "Sauté garlic and onion until soft.",
        "Heat olive oil in a pan.",
        "Add ingredients and stir well.",
        "Simmer until cooked through.",
        "Boil water and cook the pasta."
      ]
    },
    {
      "id": 33,
      "name": "Insalata di Polpo",
      "ingredients": [
        "eggplant",
        "cherry tomatoes",
        "saffron",
        "garlic",
        "oregano"
      ],
      "time": "26 minutes",
      "difficulty": "Hard",
      "category": "Appetizer",
      "image": "https://images.pexels.com/photos/30084557/pexels-photo-30084557.jpeg",
      "steps": [
        "Simmer until cooked through.",
        "Boil water and cook the pasta.",
        "Heat olive oil in a pan.",
        "Serve with fresh herbs on top.",
        "Add ingredients and stir well."
      ]
    },
    {
      "id": 34,
      "name": "Insalata Capricciosa",
      "ingredients": [
        "mozzarella",
        "thyme",
        "anchovies",
        "arborio rice",
        "butter"
      ],
      "time": "51 minutes",
      "difficulty": "Hard",
      "category": "Seafood",
      "image": "https://media.istockphoto.com/id/1421600295/photo/insalata-capricciosa.jpg?s=1024x1024&w=is&k=20&c=0WzrHBuaZ7EoxoZfvlmxRxUZhZeVFpnphnQggHlkSz4=",
      "steps": [
        "Add ingredients and stir well.",
        "Sauté garlic and onion until soft.",
        "Boil water and cook the pasta.",
        "Heat olive oil in a pan.",
        "Simmer until cooked through."
      ]
    },
    {
      "id": 35,
      "name": "Carpaccio di Manzo",
      "ingredients": [
        "tomato sauce",
        "prosciutto",
        "onion",
        "oregano",
        "olive oil"
      ],
      "time": "42 minutes",
      "difficulty": "Medium",
      "category": "Main",
      "image": "https://images.pexels.com/photos/17243887/pexels-photo-17243887.jpeg",
      "steps": [
        "Serve with fresh herbs on top.",
        "Sauté garlic and onion until soft.",
        "Boil water and cook the pasta.",
        "Simmer until cooked through.",
        "Heat olive oil in a pan."
      ]
    },
    {
      "id": 36,
      "name": "Minestrone",
      "ingredients": [
        "mozzarella",
        "eggplant",
        "prosciutto",
        "saffron",
        "thyme"
      ],
      "time": "25 minutes",
      "difficulty": "Easy",
      "category": "Appetizer",
      "image": "https://images.pexels.com/photos/8743819/pexels-photo-8743819.jpeg",
      "steps": [
        "Add ingredients and stir well.",
        "Sauté garlic and onion until soft.",
        "Heat olive oil in a pan.",
        "Simmer until cooked through.",
        "Serve with fresh herbs on top."
      ]
    },
    {
      "id": 37,
      "name": "Zuppa Toscana",
      "ingredients": [
        "parmesan",
        "eggs",
        "zucchini",
        "ricotta",
        "tomato sauce"
      ],
      "time": "23 minutes",
      "difficulty": "Easy",
      "category": "Salad",
      "image": "https://images.pexels.com/photos/1024005/pexels-photo-1024005.jpeg",
      "steps": [
        "Heat olive oil in a pan.",
        "Boil water and cook the pasta.",
        "Simmer until cooked through.",
        "Sauté garlic and onion until soft.",
        "Add ingredients and stir well."
      ]
    },
    {
      "id": 38,
      "name": "Stracciatella alla Romana",
      "ingredients": [
        "mascarpone",
        "eggplant",
        "capers",
        "butter",
        "ricotta"
      ],
      "time": "37 minutes",
      "difficulty": "Easy",
      "category": "Pizza",
      "image": "https://images.pexels.com/photos/1352271/pexels-photo-1352271.jpeg",
      "steps": [
        "Sauté garlic and onion until soft.",
        "Add ingredients and stir well.",
        "Heat olive oil in a pan.",
        "Serve with fresh herbs on top.",
        "Boil water and cook the pasta."
      ]
    },
    {
      "id": 39,
      "name": "Ribollita",
      "ingredients": [
        "butter",
        "zucchini",
        "capers",
        "spaghetti",
        "cherry tomatoes"
      ],
      "time": "27 minutes",
      "difficulty": "Easy",
      "category": "Soup",
      "image": "https://images.pexels.com/photos/27098514/pexels-photo-27098514/free-photo-of-bowl-of-tomato-soup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "steps": [
        "Heat olive oil in a pan.",
        "Sauté garlic and onion until soft.",
        "Serve with fresh herbs on top.",
        "Boil water and cook the pasta.",
        "Simmer until cooked through."
      ]
    },
    {
      "id": 40,
      "name": "Acquacotta",
      "ingredients": [
        "penne",
        "olive oil",
        "spaghetti",
        "parmesan",
        "saffron"
      ],
      "time": "54 minutes",
      "difficulty": "Hard",
      "category": "Appetizer",
      "image": "https://images.pexels.com/photos/4846442/pexels-photo-4846442.jpeg",
      "steps": [
        "Simmer until cooked through.",
        "Heat olive oil in a pan.",
        "Boil water and cook the pasta.",
        "Sauté garlic and onion until soft.",
        "Serve with fresh herbs on top."
      ]
    },
    {
      "id": 41,
      "name": "Calamari Fritti",
      "ingredients": [
        "zucchini",
        "tomato sauce",
        "penne",
        "mascarpone",
        "basil"
      ],
      "time": "38 minutes",
      "difficulty": "Hard",
      "category": "Salad",
      "image": "https://images.pexels.com/photos/19260799/pexels-photo-19260799.jpeg",
      "steps": [
        "Simmer until cooked through.",
        "Add ingredients and stir well.",
        "Heat olive oil in a pan.",
        "Boil water and cook the pasta.",
        "Serve with fresh herbs on top."
      ]
    },
    {
      "id": 42,
      "name": "Bruschetta al Pomodoro",
      "ingredients": [
        "ricotta",
        "eggs",
        "basil",
        "white wine",
        "oregano"
      ],
      "time": "15 minutes",
      "difficulty": "Hard",
      "category": "Main",
      "image": "https://images.pexels.com/photos/7432993/pexels-photo-7432993.jpeg",
      "steps": [
        "Boil water and cook the pasta.",
        "Simmer until cooked through.",
        "Add ingredients and stir well.",
        "Serve with fresh herbs on top.",
        "Sauté garlic and onion until soft."
      ]
    },
    {
      "id": 43,
      "name": "Arancini",
      "ingredients": [
        "saffron",
        "espresso",
        "eggs",
        "butter",
        "garlic"
      ],
      "time": "42 minutes",
      "difficulty": "Hard",
      "category": "Pasta",
      "image": "https://images.pexels.com/photos/1765005/pexels-photo-1765005.jpeg",
      "steps": [
        "Simmer until cooked through.",
        "Heat olive oil in a pan.",
        "Add ingredients and stir well.",
        "Serve with fresh herbs on top.",
        "Boil water and cook the pasta."
      ]
    },
    {
      "id": 44,
      "name": "Mozzarella in Carrozza",
      "ingredients": [
        "white wine",
        "thyme",
        "spaghetti",
        "mozzarella",
        "capers"
      ],
      "time": "50 minutes",
      "difficulty": "Hard",
      "category": "Appetizer",
      "image": "https://images.pexels.com/photos/31708264/pexels-photo-31708264.jpeg",
      "steps": [
        "Sauté garlic and onion until soft.",
        "Boil water and cook the pasta.",
        "Serve with fresh herbs on top.",
        "Heat olive oil in a pan.",
        "Add ingredients and stir well."
      ]
    },
    {
      "id": 45,
      "name": "Supplì",
      "ingredients": [
        "thyme",
        "anchovies",
        "white wine",
        "penne",
        "capers"
      ],
      "time": "59 minutes",
      "difficulty": "Medium",
      "category": "Main",
      "image": "https://images.pexels.com/photos/28371792/pexels-photo-28371792/free-photo-of-fried-meatball-indonesian-style.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "steps": [
        "Serve with fresh herbs on top.",
        "Add ingredients and stir well.",
        "Sauté garlic and onion until soft.",
        "Boil water and cook the pasta.",
        "Heat olive oil in a pan."
      ]
    },
    {
      "id": 46,
      "name": "Polenta e Funghi",
      "ingredients": [
        "olive oil",
        "pancetta",
        "mozzarella",
        "zucchini",
        "tomato sauce"
      ],
      "time": "24 minutes",
      "difficulty": "Easy",
      "category": "Risotto",
      "image": "https://images.pexels.com/photos/3659862/pexels-photo-3659862.jpeg",
      "steps": [
        "Add ingredients and stir well.",
        "Simmer until cooked through.",
        "Serve with fresh herbs on top.",
        "Heat olive oil in a pan.",
        "Boil water and cook the pasta."
      ]
    },
    {
      "id": 47,
      "name": "Melanzane alla Parmigiana",
      "ingredients": [
        "saffron",
        "butter",
        "onion",
        "spaghetti",
        "cherry tomatoes"
      ],
      "time": "44 minutes",
      "difficulty": "Easy",
      "category": "Salad",
      "image": "https://images.pexels.com/photos/14076430/pexels-photo-14076430.jpeg",
      "steps": [
        "Boil water and cook the pasta.",
        "Serve with fresh herbs on top.",
        "Sauté garlic and onion until soft.",
        "Heat olive oil in a pan.",
        "Simmer until cooked through."
      ]
    },
    {
      "id": 48,
      "name": "Saltimbocca alla Romana",
      "ingredients": [
        "zucchini",
        "parmesan",
        "prosciutto",
        "mascarpone",
        "oregano"
      ],
      "time": "55 minutes",
      "difficulty": "Easy",
      "category": "Main",
      "image": "https://images.pexels.com/photos/26632177/pexels-photo-26632177.jpeg",
      "steps": [
        "Sauté garlic and onion until soft.",
        "Add ingredients and stir well.",
        "Serve with fresh herbs on top.",
        "Boil water and cook the pasta.",
        "Simmer until cooked through."
      ]
    },
    {
      "id": 49,
      "name": "Osso Buco",
      "ingredients": [
        "mozzarella",
        "eggplant",
        "olive oil",
        "eggs",
        "tomato sauce"
      ],
      "time": "22 minutes",
      "difficulty": "Easy",
      "category": "Appetizer",
      "image": "https://images.pexels.com/photos/15186040/pexels-photo-15186040.jpeg",
      "steps": [
        "Heat olive oil in a pan.",
        "Simmer until cooked through.",
        "Sauté garlic and onion until soft.",
        "Add ingredients and stir well.",
        "Boil water and cook the pasta."
      ]
    },
    {
      "id": 50,
      "name": "Pollo alla Cacciatora",
      "ingredients": [
        "spaghetti",
        "eggplant",
        "ladyfingers",
        "parmesan",
        "arborio rice"
      ],
      "time": "29 minutes",
      "difficulty": "Medium",
      "category": "Soup",
      "image": "https://images.pexels.com/photos/6287555/pexels-photo-6287555.jpeg",
      "steps": [
        "Boil water and cook the pasta.",
        "Heat olive oil in a pan.",
        "Serve with fresh herbs on top.",
        "Simmer until cooked through.",
        "Sauté garlic and onion until soft."
      ]
    }
  ];

export default recipesData;