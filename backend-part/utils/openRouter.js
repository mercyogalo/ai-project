import axios from "axios";

export async function generateOpenRouterResponse(query){
    const apiKey = process.env.OPENROUTER_API_KEY
    try {
         const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "mistralai/mixtral-8x7b", // You can change to other models below
        messages: [
          { role: "user", content: query }
        ]
      },
      {
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000", // Or your frontend domain
          "X-Title": "Women's Health Assistant"
        }
      }
    );

    return response.data.choices[0].message.content;
    } catch (error) {
    console.error("OpenRouter Error:", err.response?.data || err.message);
    throw new Error("Failed to get AI response.");
    }
}