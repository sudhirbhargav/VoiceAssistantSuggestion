require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function extractDishName(text) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const prompt = `Extract the dish name from the following text: "${text}". If no dish is found, return "No dish found".`;

  try {
    const result = await model.generateContent([prompt]); 
    const response = await result.response.text(); 
    console.log("Extracted Dish:", response.trim());
  } catch (error) {
    console.error("Error:", error.message);
  }
}


extractDishName("I want to eat litti choka");
