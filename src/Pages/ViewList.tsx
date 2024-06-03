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

function ViewList() {
    const navigate = useNavigate()
    return (
        <VerticalContainer>
            <TitleFont>Lista 1</TitleFont>
            
            
        </VerticalContainer>
    )
}

export default ViewList