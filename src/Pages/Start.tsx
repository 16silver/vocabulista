import styled from "@emotion/styled"

import { useNavigate } from 'react-router-dom';

const Container = styled.div`
display: flex;
flex-direction: column;
`

const TitleFont = styled.span`
font-size: 90px;
font-weight: bolder;
margin: 120px;
`

const StartButton = styled.button`
`

function Start() {
    const navigate = useNavigate()
    return (
        <Container>
            <TitleFont>Vocabulista</TitleFont>
            <StartButton onClick={() => navigate('/home')}>Empezar</StartButton>
        </Container>
    )
}

export default Start