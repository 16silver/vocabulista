import styled from "@emotion/styled"

import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { wordList, exampleSentence } from "../shared/constants";

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
width: 400px;
font-size: 20px;
flex-direction: row;
`

const TitleFont = styled.span`
font-size: 80px;
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

function ViewList() {
    const navigate = useNavigate();
    
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
                            <li>{d[0]}: {d[1]}</li>
                            <ul>
                                <li>{d[2]}</li>
                            </ul>
                            </>
                        )}
                    </ol>
                </ListContainer>
                <VerticalContainer>
                    <TextContainer>
                        {exampleSentence}
                    </TextContainer>
                    <Button onClick={() => navigate('/quiz')}>Prueba</Button>
                </VerticalContainer>
            </HorizontalContainer>
        </VerticalContainer>
    )
}

export default ViewList