import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export const generateRandomDish = async (cuisine) => {
  const completion = await openai.chat.completions.create({
    messages: [{
      role: "user",
      content: `Generate a random ${cuisine} dish with a brief description. Format: Name: [dish name]\nDescription: [brief description]`
    }],
    model: "gpt-3.5-turbo",
  });

  const result = completion.choices[0].message.content;
  const [name, description] = result.split('\n');
  
  return {
    name: name.replace('Name: ', ''),
    description: description.replace('Description: ', '')
  };
};
