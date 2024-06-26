import styled from "@emotion/styled"

import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
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

// const TextContainer = styled.div`
// display: flex;
// height: 350px;
// width: 400px;
// font-size: 20px;
// flex-direction: row;
// `

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
width: 500px;
margin-right: 50px;
font-size: 20px;
text-align: left;
overflow: scroll;
`

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const RadioLabel = styled.label`
  margin-right: 10px;
  font-size: 25px;
  text-align: left;
  font-weight: bold;
`;

const RadioButton = styled.input`
  margin-right: 5px;
  width: 18px;
  height: 18px;
`;

function ViewList() {
    const navigate = useNavigate();

    const { id } = useParams<{ id: string }>();
    const contentListContext = useContext(ContentListContext);

    if(!id || parseInt(id) > contentListContext.contentList.length || parseInt(id) <= 0){
        return <ErrorComponent />
    }

    const content = contentListContext.contentList[parseInt(id) - 1];
    const wordList = content.wordList;
    const [generatedText, setGeneratedText] = useState(content.generatedText);
    content.generatedText = generatedText;
    content.setGeneratedText = setGeneratedText;

    const [difficulty, setDifficulty] = useState("intermediate");

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDifficulty(event.target.value);
    }
    
    return (
        <VerticalContainer>
            <HorizontalContainer>
                <BackButton onClick={() => navigate(-1)}>←</BackButton>
                <HomeButton onClick={() => navigate('/home')}>Cartilla</HomeButton>
            </HorizontalContainer>
            <TitleFont>Lista 1</TitleFont>
            <HorizontalContainer>
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
                <VerticalContainer>
                    <RadioContainer>
                        <RadioLabel>
                            <RadioButton type="radio" value="easy" checked={difficulty === "easy"} onChange={handleOptionChange} />
                            Fácil
                        </RadioLabel>
                    </RadioContainer>
                    <RadioContainer>
                        <RadioLabel>
                            <RadioButton type="radio" value="intermediate" checked={difficulty === "intermediate"} onChange={handleOptionChange} />
                            Intermedio
                        </RadioLabel>
                    </RadioContainer>
                    <RadioContainer>
                        <RadioLabel>
                            <RadioButton type="radio" value="hard" checked={difficulty === "hard"} onChange={handleOptionChange} />
                            Difícil
                        </RadioLabel>
                    </RadioContainer>
                    <Button onClick={() => {navigate(`/example/${id}/${difficulty}`)}}>Crear Nuevo Ejercicio
</Button>
                </VerticalContainer>
            </HorizontalContainer>
        </VerticalContainer>
    )
}

export default ViewList;