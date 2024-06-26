import styled from "@emotion/styled"

import { useNavigate } from 'react-router-dom';

import { buildStreakCount } from "../Components/StreakCount";
import { useContext, useEffect } from "react";
import { ContentListContext } from "../shared/contexts/contentList";

const VerticalContainer = styled.div`
display: flex;
flex-direction: column;
`

const HorizontalContainer = styled.div`
display: flex;
flex-direction: row;
`

const TitleFont = styled.span`
font-size: 70px;
font-weight: bolder;
margin: 20px;
`

const ContentFont = styled.span`
font-size: 30px;
font-weight: bolder;
margin: 0px;
`

const CreateButton = styled.button`
`

const BackButton = styled.button`
height: 40px;
/* width: 30px; */
`

// const HomeButton = styled.button`
// height: 40px;
// /* width: 30px; */
// `

const ListContainer = styled.div`
border: 2px solid black;
height: 300px;
margin-bottom: 30px;
overflow: scroll;
`

const UnorderedList = styled.ul`
list-style-type: none;
`

const ListItem = styled.li`
text-align: left;
`

const ViewListButton = styled.button`
`

function loadStreak() {
    const item = window.sessionStorage.getItem('streak');
    if (item != null) {
        return JSON.parse(item);
    }
    return buildStreakCount(new Date("1971-01-01T00:00:00"));
}

function Home() {
    const navigate = useNavigate();
    const contentListContext = useContext(ContentListContext);
    const streak = loadStreak();
    // console.log(streak)
    // console.log(contentListContext.contentList);
    useEffect(() => {
        window.sessionStorage.setItem('streak', JSON.stringify(streak));
    }, [streak]);
    return (
        <VerticalContainer>
            <HorizontalContainer>
                <BackButton onClick={() => navigate(-1)}>←</BackButton>
                {/* <HomeButton onClick={() => navigate('/home')}>Cartilla</HomeButton> */}
            </HorizontalContainer>
            <ContentFont>¡Estás en una racha de un {streak.currentCount} día!</ContentFont>
            <TitleFont>Mi Cartilla</TitleFont>
            <ListContainer>
                <UnorderedList>
                    {contentListContext.contentList.map((d, index) =>
                        <ListItem><ViewListButton onClick={() => navigate(`/view_list/${index + 1}`)}>Lista {index} ({d.wordList.length} palabras)</ViewListButton></ListItem>
                    )}
                </UnorderedList>
            </ListContainer>
            <CreateButton onClick={() => {navigate('/create_list')}}>Crear Nueva Lista</CreateButton>
        </VerticalContainer>
    )
}

export default Home