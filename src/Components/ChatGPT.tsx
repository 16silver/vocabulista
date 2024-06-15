import axios from 'axios';

function getQueryFromWords(words: string[]) {
    const headText = 'Generate a paragraph with 5~6 sentence, written in Korean, containing words ';
    const wordText = words.join(', ');
    return headText + wordText;
}

function getQueryForWordInfo(word: string) {
    const headText = 'provide romanization with dash seperation, part of speech, meaning of a korean word ';
    const tailText = ' in spanish. no other text required.'
    return headText + word + tailText;
}

export async function generateTextFromWords(words: Array<string>) : Promise<string> {
    try {
        console.log("Using ChatGPT for text generation...");
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'user', content: getQueryFromWords(words)}
                ]
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
                },
            }
        );
        const gptResponse = response.data.choices[0].message.content;
        console.log(gptResponse);
        return gptResponse;
    }
    catch (error) {
        console.error('Error fetching data from OpenAI API:', error);
        return '';
    }
}

export async function getWordInfo(word: string) : Promise<string> {
    try {
        console.log("Using ChatGPT for getting word info...");
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'user', content: getQueryForWordInfo(word)}
                ]
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
                },
            }
        );
        const gptResponse = response.data.choices[0].message.content;
        console.log(gptResponse);
        return gptResponse;
    }
    catch (error) {
        console.error('Error fetching data from OpenAI API:', error);
        return '';
    }
}