import styled from "@emotion/styled"
import { useNavigate } from "react-router-dom";
import { exampleSentenceWithBlanks } from "../shared/constants";
import { useContext, useState } from "react";
import { GeneratedTextContext } from "../shared/contexts/generatedText";
import { getQuizTextAndAnswer } from "../Components/QuizComponent";
import { WordListContext } from "../shared/contexts/wordList";

const VerticalContainer = styled.div`
display: flex;
flex-direction: column;
`

const HorizontalContainer = styled.div`
display: flex;
flex-direction: row;
`

const TextContainer = styled.div`
display: flex;
height: 350px;
width: 900px;
font-size: 20px;
flex-direction: row;
`

const TitleFont = styled.span`
font-size: 70px;
margin-bottom: 20px;
font-weight: bolder;
`

const MiddleTextFont = styled.span`
font-size: 30px;
margin-bottom: 5px;
font-weight: bold;
`

const Button = styled.button`
height: 50px;
`

const BackButton = styled.button`
height: 40px;
/* width: 30px; */
`

const HomeButton = styled.button`
height: 40px;
/* width: 30px; */
`

function Quiz() {
    const navigate = useNavigate();
    
    const wordListContext = useContext(WordListContext);
    const generatedTextContext = useContext(GeneratedTextContext);

    const wordTextList: {word: string, meaning: string}[] = wordListContext.wordList.map((a) => ({word: a[0], meaning: a[3]}));

    const quizInfo = getQuizTextAndAnswer(generatedTextContext.generatedText, wordTextList);
    const [answers, setAnswers] = useState<string[]>(quizInfo.quizText.split(' ').map((_) => ''));

    const handleAnswerChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const newAnswers = [...answers];
        newAnswers[index] = event.target.value;
        setAnswers(newAnswers);
    };

    const checkAnswers = () => {
        // console.log(answers, quizInfo.answers);
        const isCorrect = quizInfo.answers.every((answer) => answers[answer.id] === answer.text);
    
        if (isCorrect) {
          alert('¡Felicidades! Obtuviste todas las respuestas correctas.');
          navigate('/home');
        } else {
          alert('Lo siento, algunas respuestas son incorrectas. Inténtalo de nuevo.');
        }
    };
    

    return (
        <VerticalContainer>
            <HorizontalContainer>
                <BackButton onClick={() => navigate(-1)}>←</BackButton>
                <HomeButton onClick={() => navigate('/home')}>Cartilla</HomeButton>
            </HorizontalContainer>
            <TitleFont>Lista 1 - Ejercicio 1 Prueba</TitleFont>
            <MiddleTextFont>Tómese todo el tiempo que necesite.</MiddleTextFont>
            <TextContainer>
                <p>
                    {quizInfo.quizText.split(' ').map((word, index) => {
                    if (word === '____') {
                        return (
                        <input
                            key={index}
                            type="text"
                            value={answers[index]}
                            onChange={(event) => handleAnswerChange(index, event)}
                            style={{ width: '120px', margin: '0 5px', fontSize: '20px'}}
                        />
                        );
                    }
                    return <span key={index}>{word} </span>;
                    })}
                </p>
            </TextContainer>
            <Button onClick={checkAnswers}>Comprobar Respuestas</Button>
        </VerticalContainer>
        
    )
}

export default Quiz;