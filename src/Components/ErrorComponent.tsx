import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const VerticalContainer = styled.div`
display: flex;
flex-direction: column;
`

const HorizontalContainer = styled.div`
display: flex;
flex-direction: row;
`

const BackButton = styled.button`
height: 40px;
/* width: 30px; */
`

const HomeButton = styled.button`
height: 40px;
/* width: 30px; */
`

const ErrorTitleFont = styled.span`
font-size: 70px;
margin-top: 50px;
margin-bottom: 370px;
font-weight: bolder;
`

export function ErrorComponent() {
    const navigate = useNavigate();
    return (
        <VerticalContainer>
            <HorizontalContainer>
                <BackButton onClick={() => navigate(-1)}>←</BackButton>
                <HomeButton onClick={() => navigate('/home')}>Cartilla</HomeButton>
            </HorizontalContainer>
            <ErrorTitleFont>Solicitud Incorrecta</ErrorTitleFont>
        </VerticalContainer>
    )
}