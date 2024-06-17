import styled from "@emotion/styled"

import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { HighlightedText } from "../Components/HighlightedText";
import { ContentListContext } from "../shared/contexts/contentList";
import { ErrorComponent } from "../Components/ErrorComponent";
import { generateTextFromWords } from "../Components/ChatGPT";

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

function Example () {
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

    const [ generatedText, setGeneratedText] = useState(content.generatedText[difficulty]);

    const wordTextList: string[] = wordList.map(([firstElement]) => firstElement);

    // function getGeneratedText() {
    //     if(!difficulty) return;
    //     const wordTextList: string[] = wordList.map(([firstElement]) => firstElement);
    //     if(content.generatedText[difficulty] === ""){
    //         const resp = generateTextFromWords(wordTextList, difficulty);
    //         resp.then((value) => {
    //             // console.log(value);
    //             if (value !== '') {
    //                 content.generatedText[difficulty] = value;
    //                 content.setGeneratedText(content.generatedText);
    //             }
    //         })
    //     }
    // }

    useEffect(() => {
        // console.log(contentListContext);
        const fetchData = async () => {
            try {
                const resp = await generateTextFromWords(wordTextList, difficulty);
                if (resp !== '') {
                    content.generatedText[difficulty] = resp;
                    setGeneratedText(content.generatedText[difficulty])
                }
            } catch (error) {
                console.error("Error while getting example: ", error);
            }
        };
        if(content.generatedText[difficulty] === ""){
            fetchData();
        }
    })

    return (
        <VerticalContainer>
            <HorizontalContainer>
                <BackButton onClick={() => navigate(-1)}>←</BackButton>
                <HomeButton onClick={() => navigate('/home')}>Cartilla</HomeButton>
            </HorizontalContainer>
            <TitleFont>Lista {id} - Ejercicio 1</TitleFont>
            <HorizontalContainer>
                <VerticalContainer>
                    <TextContainer>
                        <HighlightedText text={generatedText} wordsToHighlight={wordTextList} />
                    </TextContainer>
                    <Button onClick={() => navigate(`/quiz/${id}/${difficulty}`)}>Prueba</Button>
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