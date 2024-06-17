import styled from "@emotion/styled"
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getQuizTextAndAnswer } from "../Components/QuizComponent";
import { buildStreakCount, updateStreakCount } from "../Components/StreakCount";
import { ContentListContext } from "../shared/contexts/contentList";
import { ErrorComponent } from "../Components/ErrorComponent";

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

function loadStreak() {
    const item = window.sessionStorage.getItem('streak');
    if (item != null) {
        return JSON.parse(item);
    }
    return buildStreakCount(new Date("1971-01-01T00:00:00"));
}

function updateStreak(currentDate: Date) {
    const item = window.sessionStorage.getItem('streak');
    if (item != null) {
        return updateStreakCount(JSON.parse(item), currentDate);
    }
    const new_item = buildStreakCount(new Date("1971-01-01T00:00:00"));
    return updateStreakCount(new_item, currentDate);
}

function Quiz() {
    const navigate = useNavigate();
    const difficultyLevels = ["easy", "intermediate", "hard"];

    const { id, difficulty } = useParams<{ id: string, difficulty: string }>();
    const contentListContext = useContext(ContentListContext);

    if(!id || parseInt(id) > contentListContext.contentList.length || parseInt(id) <= 0){
        return <ErrorComponent />
    }

    if(!difficulty || !difficultyLevels.includes(difficulty)){
        return <ErrorComponent />
    }

    const content = contentListContext.contentList[parseInt(id) - 1];
    const wordList = content.wordList;


    const wordTextList: {word: string, meaning: string}[] = wordList.map((a) => ({word: a[0], meaning: a[3]}));

    console.log(content);
    const quizInfo = getQuizTextAndAnswer(content.generatedText[difficulty], wordTextList);
    const [answers, setAnswers] = useState<string[]>(quizInfo.quizText.split(' ').map((_) => ''));

    const streak = loadStreak();
    useEffect(() => {
        window.sessionStorage.setItem('streak', JSON.stringify(streak));
    }, [streak]);

    const handleAnswerChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const newAnswers = [...answers];
        newAnswers[index] = event.target.value;
        setAnswers(newAnswers);
    };

    const checkAnswers = () => {
        // console.log(answers, quizInfo.answers);
        const isCorrect = quizInfo.answers.every((answer) => answers[answer.id] === answer.text);
    
        if (isCorrect) {
          alert('Congratulations! You got all answers correct.');
          window.sessionStorage.setItem('streak', JSON.stringify(updateStreak(new Date())));
          navigate('/home');
        } else {
          alert('Sorry, some answers are incorrect. Please try again.');
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