import OpenAI from 'openai';
const client = new OpenAI({
    // apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});

const openAi = async (): Promise<void> => {
    const response = await client.responses.create({
        model: 'gpt-4o',
        instructions: 'You are a coding assistant that talks like a pirate',
        input: 'Are semicolons optional in JavaScript?',
    });
    console.log('OpenAi990');
    console.log("__r", response);


    console.log(response.output_text);
};

export default openAi;
