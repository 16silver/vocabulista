import styled from "@emotion/styled"
import { AiOutlineSearch } from "react-icons/ai"

import { useNavigate } from 'react-router-dom';
import { wordList } from "../shared/constants";

const VerticalContainer = styled.div`
display: flex;
flex-direction: column;
`

const HorizontalContainer = styled.div`
display: flex;
flex-direction: row;
`

const TitleFont = styled.span`
font-size: 80px;
font-weight: bolder;
margin-bottom: 20px;
`

const Button = styled.button`
`

const BackButton = styled.button`
height: 40px;
/* width: 30px; */
`

const HomeButton = styled.button`
height: 40px;
/* width: 30px; */
`

const SearchContainer = styled.div`
position: relative;
width: 360px;
height: 40px;
background: #f2f2f2;
border-radius: 0;
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 5px;
transition: all 0.3s ease;
margin: 40px;
`

const SearchInput = styled.input`
padding-left: 48px;
border: none;
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
background-color: transparent;
outline: none;
font-size: 16px;
border: 1px solid transparent;
&:focus {
    border-color: rgba(0,0,0,0.3);
}
`

const IconButton = styled.button`
position: relative;
height: 36px;
width: 36px;
border: none;
z-index: 1;
cursor: pointer;
background: none;

&:hover {
    color: white;
    &::after {
        opacity: 1;
        transform: scale(1);
    }
}
&::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 50%;
    z-index: -1;
    background: #000000;
    transition: 0.2s ease;
    transform: scale(0.6);
    opacity: 0;
}
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

function CreateList() {
    const navigate = useNavigate()
    return (
        <VerticalContainer>
            <HorizontalContainer>
                <BackButton onClick={() => navigate(-1)}>←</BackButton>
                <HomeButton onClick={() => navigate('/home')}>Cartilla</HomeButton>
            </HorizontalContainer>
            <TitleFont>Crear Nueva Lista</TitleFont>
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
                    <SearchContainer>
                        <IconButton>
                            <AiOutlineSearch size={22} />
                        </IconButton>
                        <SearchInput />
                    </SearchContainer>
                    <Button onClick={() => navigate('/view_list')}>Crear Lista</Button>
                </VerticalContainer>
            </HorizontalContainer>
            
        </VerticalContainer>
    )
}

export default CreateList