
import { GoogleGenAI } from "@google/genai";

export const getTravelTip = async (prompt: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert travel guide for coastal Maharashtra, India (Konkan region). 
                 Provide a concise, helpful, and friendly tip about the following topic: ${prompt}. 
                 Focus on family-friendly, vegetarian-friendly, and cultural aspects.`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I couldn't get a tip right now. Enjoy the beach vibes anyway!";
  }
};
