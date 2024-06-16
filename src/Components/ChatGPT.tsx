import axios from 'axios';

function getQueryFromWords(words: string[], difficulty: string) {
    const numSentence = (difficulty === "easy") ? "3~4" : (difficulty === "intermediate") ? "5~6" : "7~8";
    const headText = 'Generate a paragraph with ' + numSentence + ' sentence, written in Korean, containing words ';
    const wordText = words.join(', ');
    const tailText = ". Use " + difficulty + " vocabulary and grammar if possible.";
    return headText + wordText + tailText;
}

function getQueryForWordInfo(word: string) {
    // console.log(word);
    const headText = 'provide followings of a korean word ';
    const tailText = ' in spanish: romanization with dash seperation, part of speech, meaning. Use slash instead of dash, and no other text is required.'
    return headText + word + tailText;
}

export async function generateTextFromWords(words: Array<string>, difficulty: string) : Promise<string> {
    try {
        // console.log("Using ChatGPT for text generation...");
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'user', content: getQueryFromWords(words, difficulty)}
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
        // console.log(gptResponse);
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
        // console.log(gptResponse);
        return gptResponse;
    }
    catch (error) {
        console.error('Error fetching data from OpenAI API:', error);
        return '';
    }
}