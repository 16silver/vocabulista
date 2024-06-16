import styled from "@emotion/styled"

import { useNavigate } from 'react-router-dom';

import { buildStreakCount, updateStreakCount } from "../Components/StreakCount";
import { useContext, useEffect } from "react";
import { ContentListContext } from "../shared/contexts/contentList";
import { WordListContext } from "../shared/contexts/wordList";

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

function load_streak(currentDate: Date) {
    const item = window.sessionStorage.getItem('streak');
    if (item != null) {
        return updateStreakCount(JSON.parse(item), currentDate);
    }
    return buildStreakCount(currentDate);
  }

function Home() {
    const navigate = useNavigate();
    const contentListContext = useContext(ContentListContext);
    const wordListContext = useContext(WordListContext);
    const streak = load_streak(new Date());
    // console.log(streak)
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
                        <ListItem><ViewListButton onClick={() => navigate(`/view_list/${index}`)}>Lista {index} ({d.wordList.length} palabras)</ViewListButton></ListItem>
                    )}
                </UnorderedList>
            </ListContainer>
            <CreateButton onClick={() => {wordListContext.setWordList([]); navigate('/create_list')}}>Crear Nueva Lista</CreateButton>
        </VerticalContainer>
    )
}

export default Home