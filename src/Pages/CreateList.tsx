import styled from "@emotion/styled"

import { useNavigate } from 'react-router-dom';

const VerticalContainer = styled.div`
display: flex;
flex-direction: column;
`

const HorizontalContainer = styled.div`
display: flex;
flex-direction: column;
`

const TitleFont = styled.span`
font-size: 90px;
font-weight: bolder;
`

const Button = styled.button`
`

function CreateList() {
    const navigate = useNavigate()
    return (
        <VerticalContainer>
            <TitleFont>Crear Nueva Lista</TitleFont>
            <HorizontalContainer>
                <VerticalContainer>
                    <Button>Add Random Words</Button>
                    <Button onClick={() => navigate('/view_list')}>Crear Lista</Button>
                </VerticalContainer>
            </HorizontalContainer>
            
        </VerticalContainer>
    )
}

export default CreateList