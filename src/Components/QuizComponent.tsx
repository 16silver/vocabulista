export function getQuizTextAndAnswer(generatedText: string, wordsToHighlight: {word: string, meaning: string}[]) {
    const splitText = generatedText.split(' ');
    const answers: {id: number, text: string}[] = [];
    const textWithMeanings = splitText.flatMap((word) => {
        const result = wordsToHighlight.find(targetWord => word.includes(targetWord.word));
        if (result) {
            return [word, '(' + result.meaning + ')']
        }
        else {
            return [word]
        }
    })
    const words = textWithMeanings.map((word, index) => {
        const shouldHighlight = wordsToHighlight.some(targetWord => word.includes(targetWord.word));
        if (shouldHighlight) {
            answers.push({id: index, text: word});
            return "____";
        }
        else {
            return word;
        }
    })
    return {
        quizText: words.join(' '),
        answers: answers,
    }
}