import styled from "@emotion/styled"

import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { HighlightedText } from "../Components/HighlightedText";
import { WordListContext } from "../shared/contexts/wordList";
import { GeneratedTextContext } from "../shared/contexts/generatedText";

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

    const wordListContext = useContext(WordListContext);
    const generatedTextContext = useContext(GeneratedTextContext);

    const wordTextList: string[] = wordListContext.wordList.map(([firstElement]) => firstElement);
    // console.log(wordTextList);

    // const wordTextList = ["예습", "시청하다", "간단한", "만담"]
    // const resp = generateTextFromWords(wordTextList);

    // const [sentence, setSentence] = useState(exampleSentence);

    // resp.then((value) => {
    //     console.log(value);
    //     if (value !== '') {
    //         setSentence(value);
    //     }
    // })

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
                        <HighlightedText text={generatedTextContext.generatedText} wordsToHighlight={wordTextList} />
                    </TextContainer>
                    <Button onClick={() => navigate('/quiz')}>Prueba</Button>
                </VerticalContainer>
                <ListContainer>
                    <ol>
                        {wordListContext.wordList.map((d) => <>
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