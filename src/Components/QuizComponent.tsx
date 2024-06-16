export function getQuizTextAndAnswer(generatedText: string, wordsToHighlight: string[]) {
    const splitText = generatedText.split(' ');
    const answers: {id: number, text: string}[] = [];
    const words = splitText.map((word, index) => {
        const shouldHighlight = wordsToHighlight.some(targetWord => word.includes(targetWord));
        if (shouldHighlight) {
            answers.push({id: index, text: word});
            return "____";
        }
        else{
            return word;
        }
    })
    return {
        quizText: words.join(' '),
        answers: answers,
    }
}