import styled from "@emotion/styled"

import { useNavigate } from 'react-router-dom';

import { buildStreakCount, updateStreakCount } from "../Components/StreakCount";
import { useEffect } from "react";

const Container = styled.div`
display: flex;
flex-direction: column;
`

const TitleFont = styled.span`
font-size: 80px;
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

function load_streak(currentDate: Date) {
    const item = window.sessionStorage.getItem('streak');
    if (item != null) {
        return updateStreakCount(JSON.parse(item), currentDate);
    }
    return buildStreakCount(currentDate);
  }

function Home() {
    const navigate = useNavigate();
    const streak = load_streak(new Date());
    useEffect(() => {
        window.sessionStorage.setItem('streak', JSON.stringify(streak));
    }, [streak]);
    return (
        <Container>
            <TitleFont>Mi Cartilla</TitleFont>
            <ContentFont>You are in a {streak.currentCount} day streak!</ContentFont>
            <CreateButton onClick={() => navigate('/create_list')}>Crear Nueva Lista</CreateButton>
        </Container>
    )
}

export default Home