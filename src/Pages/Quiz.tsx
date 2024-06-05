import styled from "@emotion/styled"
import { useNavigate } from "react-router-dom";
import { exampleSentenceWithBlanks } from "../shared/constants";

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
font-size: 25px;
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

function Quiz() {
    const navigate = useNavigate();
    return (
        <VerticalContainer>
            <HorizontalContainer>
                <BackButton onClick={() => navigate(-1)}>←</BackButton>
                <HomeButton onClick={() => navigate('/home')}>Cartilla</HomeButton>
            </HorizontalContainer>
            <TitleFont>

            </TitleFont>
            <TextContainer>
                {exampleSentenceWithBlanks}
            </TextContainer>
            <Button onClick={() => {}}>Comprobar Respuestas</Button>
        </VerticalContainer>
        
    )
}

export default Quiz;