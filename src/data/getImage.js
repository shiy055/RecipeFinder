import recipeData from './recipesData.js'
import { createClient } from 'pexels';

const client = createClient('gh1MzGBB93qtUTf4yrlRyTVGVCDAdd4g0xI3PhAnzan503fw4aMdFX3Z');

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const recipesDataWithImage = [];
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
            
            recipesDataWithImage.push({...item});
        }

        await sleep(10000);
    } else {
        recipesDataWithImage.push({...item});
    }
}

import fs from "fs/promises"
await fs.writeFile("recipesDataWithImage.json", JSON.stringify(recipesDataWithImage, null, 2));