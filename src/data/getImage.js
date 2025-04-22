/**
 * @file getImage.js
 * @description Provides dynamic or fallback image URLs for each recipe.
 * @param {string} recipeName - The name of the recipe to find an image for.
 * @returns {string} - URL to the appropriate image.
 */
import recipeData from './recipesData.js'
import { createClient } from 'pexels';

// Initialize the Pexels client with my API key.
/**
 * @constant {Object} client
 * @description Pexels API client used to perform image search queries.
 */
const client = createClient('gh1MzGBB93qtUTf4yrlRyTVGVCDAdd4g0xI3PhAnzan503fw4aMdFX3Z');

/**
 * @function sleep
 * @param {number} ms - Milliseconds to pause execution.
 * @returns {Promise<void>}
 * @description Utility to add delay between API calls to avoid rate-limiting by Pexels: a solution for running issue with too much request.
 */
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * @constant {Array<Object>} recipesDataWithImage
 * @description Stores the final enriched dataset with updated image URLs from Pexels.
 */
const recipesDataWithImage = [];

/**
 * @async
 * @description Loops through each recipe in the dataset, and for recipes that still use a placeholder (e.g., Unsplash),
 * it queries Pexels for a relevant image using the recipe name as the search term. Each new or unchanged recipe object
 * is pushed to `recipesDataWithImage`.
 */
for (const item of recipeData) {
    if (item.image.includes("unsplash")) {
        const query = item.name;
        try {
            const result = await client.photos.search({query, per_page: 1});
            const photo = result.photos[0];
            
            recipesDataWithImage.push({
                ...item,
                image: photo.src.original
            });
        } catch (error) {
            console.error(`Error fetching ${query}: `, error);
            
            // Push original item if fetching fails
            recipesDataWithImage.push({...item});
        }

        // Respect Pexels rate limits
        await sleep(10000);
    } else {
        // If image doesn't need replacement, keep original
        recipesDataWithImage.push({...item});
    }
}

import fs from "fs/promises"

/**
 * @async
 * @description Saves the updated dataset into a new file called `recipesDataWithImage.json`.
 */
await fs.writeFile("recipesDataWithImage.json", JSON.stringify(recipesDataWithImage, null, 2));