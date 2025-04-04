import axios from "axios";

const API_URL = "https://api.openai.com/v1/chat/completions";;
 
export const fetchChatGPTResponse = async (messages: string): Promise<string> => {
    // console.log(process.env.NEXT_PUBLIC_OPENAI_API_KEY);
    
    try {
        const response = await axios.post(
            API_URL,
            {
                model: 'gpt-4-turbo',
                messages: messages,
                temperature: 0.7,
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error fetching data from DeepAI API:', error);
        throw error;
    }
};