// import OpenAI from 'openai';

// const openai = new OpenAI({
//   apiKey: import.meta.env.VITE_OPENAI_API_KEY,
//   dangerouslyAllowBrowser: true
// });

// export const generateRandomDish = async (cuisine) => {
//   const completion = await openai.chat.completions.create({
//     messages: [{
//       role: "user",
//       content: `Generate a random ${cuisine} dish with a brief description. Format: Name: [dish name]\nDescription: [brief description]`
//     }],
//     model: "gpt-3.5-turbo",
//   });

//   const result = completion.choices[0].message.content;
//   const [name, description] = result.split('\n');
  
//   return {
//     name: name.replace('Name: ', ''),
//     description: description.replace('Description: ', '')
//   };
// };


import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_API_KEY);

export const generateRandomDish = async (cuisine, mainIngredient = '') => {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.0-flash",
      generationConfig: {
        responseMimeType: "application/json"
      }
    });

    const ingredientPrompt = mainIngredient ? ` including ${mainIngredient} as a main ingredient` : '';
  
    const prompt = `Generate a random ${cuisine} dish${ingredientPrompt} with ingredients, nutrients with values per serving, and cooking steps, cook time, prep time, servings, and total time. Format response as:
    {
      "name": "Dish Name",
      "ingredients": ["ingredient1", "ingredient2"],
      "nutrients": ["nutrient1", "nutrient2"],
      "procedure": ["Step 1", "Step 2"],
      "prepTime": "X mins",
      "cookTime": "Y mins",
      "totalTime": "Z mins",
      "servings": "N servings"
    }`;
  
    try {
      const result = await model.generateContent(prompt);
      const rawResponse = result.response.text();
      
      const cleanResponse = rawResponse
        .replace(/```/g, '')
        .trim();
  
      const responseArray = JSON.parse(cleanResponse);
      const response = Array.isArray(responseArray) ? responseArray[0] : responseArray;
      
      return {
        name: response.name,
        ingredients: response.ingredients,
        nutrients: response.nutrients,
        procedure: response.procedure,
        prepTime: response.prepTime,
        cookTime: response.cookTime,
        totalTime: response.totalTime,
        servings: response.servings
      };
    } catch (error) {
      console.error("Error generating recipe:", error);
      console.log("Raw API response:", rawResponse);
      return {
        name: "Recipe Generation Failed",
        ingredients: [],
        nutrients: [],
        procedure: [],
        prepTime: "N/A",
        cookTime: "N/A",
        totalTime: "N/A",
        servings: "N/A"
      };
    }
  };
