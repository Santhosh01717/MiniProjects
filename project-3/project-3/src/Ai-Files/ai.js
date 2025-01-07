import { HfInference } from '@huggingface/inference';

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
`;

const hf = new HfInference("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");

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    try {
        const response = await hf.textGeneration({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            inputs: `${SYSTEM_PROMPT}\n\nI have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
            parameters: {
                max_new_tokens: 200,
                return_full_text: false,
                temperature: 0.7,
            },
        });
        console.log(response.generated_text);
        return response.generated_text;
    } catch (err) {
        console.error("API Error:", err.message);
        return "An error occurred while fetching the recipe.";
    }
}
