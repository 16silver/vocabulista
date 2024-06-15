import styled from "@emotion/styled"

import { useNavigate } from "react-router-dom";
import { wordList, exampleSentence } from "../shared/constants";
import { generateTextFromWords } from "../Components/ChatGPT";
import { useState } from "react";
import { HighlightedText } from "../Components/HighlightedText";

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
width: 500px;
font-size: 20px;
flex-direction: row;
`

const TitleFont = styled.span`
font-size: 70px;
margin-bottom: 20px;
font-weight: bolder;
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

const ListContainer = styled.div`
border: 2px solid black;
height: 400px;
width: 400px;
margin-left: 50px;
font-size: 20px;
text-align: left;
overflow: scroll;
`

function Example() {
    const navigate = useNavigate();
    const wordTextList = ["예습", "시청하다", "간단한", "만담"]
    const resp = generateTextFromWords(wordTextList);

    const [sentence, setSentence] = useState(exampleSentence);

    resp.then((value) => {
        console.log(value);
        if (value !== '') {
            setSentence(exampleSentence);
        }
    })

    return (
        <VerticalContainer>
            <HorizontalContainer>
                <BackButton onClick={() => navigate(-1)}>←</BackButton>
                <HomeButton onClick={() => navigate('/home')}>Cartilla</HomeButton>
            </HorizontalContainer>
            <TitleFont>Lista 1 - Ejercicio 1</TitleFont>
            <HorizontalContainer>
                <VerticalContainer>
                    <TextContainer>
                        <HighlightedText text={sentence} wordsToHighlight={wordTextList} />
                    </TextContainer>
                    <Button onClick={() => navigate('/quiz')}>Prueba</Button>
                </VerticalContainer>
                <ListContainer>
                    <ol>
                        {wordList.map((d) => <>
                            <li>{d[0]} ({d[1]}) | {d[2]}</li>
                            <ul>
                                <li>{d[3]}</li>
                            </ul>
                            </>
                        )}
                    </ol>
                </ListContainer>
            </HorizontalContainer>
        </VerticalContainer>
    )
}

export default Example;