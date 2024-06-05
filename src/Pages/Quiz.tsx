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
font-size: 70px;
margin-bottom: 20px;
font-weight: bolder;
`

const MiddleTextFont = styled.span`
font-size: 30px;
margin-bottom: 10px;
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
    return (
        <VerticalContainer>
            <HorizontalContainer>
                <BackButton onClick={() => navigate(-1)}>←</BackButton>
                <HomeButton onClick={() => navigate('/home')}>Cartilla</HomeButton>
            </HorizontalContainer>
            <TitleFont>Lista 1 - Ejercicio 1 Prueba</TitleFont>
            <MiddleTextFont>Tómese todo el tiempo que necesite.</MiddleTextFont>
            <TextContainer>
                {exampleSentenceWithBlanks}
            </TextContainer>
            <Button onClick={() => {}}>Comprobar Respuestas</Button>
        </VerticalContainer>
        
    )
}

export default Quiz;