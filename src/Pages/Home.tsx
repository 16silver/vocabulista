import styled from "@emotion/styled"

import { useNavigate } from 'react-router-dom';

const Container = styled.div`
display: flex;
flex-direction: column;
`

const TitleFont = styled.span`
font-size: 80px;
font-weight: bolder;
`

const CreateButton = styled.button`
`

function Home() {
    const navigate = useNavigate();
    return (
        <Container>
            <TitleFont>Mi Cartilla</TitleFont>
            <CreateButton onClick={() => navigate('/create_list')}>Crear Nueva Lista</CreateButton>
        </Container>
    )
}

export default Home