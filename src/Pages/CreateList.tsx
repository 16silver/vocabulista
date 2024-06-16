import styled from "@emotion/styled"
// import { AiOutlineSearch } from "react-icons/ai"

// import Keyboard from "react-simple-keyboard";
// import Keyboard from "hangul-virtual-keyboard";
// import 'react-simple-keyboard/build/css/index.css';

import { useNavigate } from 'react-router-dom';
import { getWordInfo } from '../Components/ChatGPT';
import { ComponentProps, useState, useEffect, useRef, useContext } from "react";
import { HangulImeInputWrapper } from "mole-virtual-keyboard";
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

const Label = styled.label`
`

const InputContainer = styled.input`
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

const KeyboardContainer = styled.div`
width: 500px;
`

const KeyboardButton = styled.button`
font-weight: bold;
`

const SpaceButton = styled.button`
font-weight: bold;
width: 200px;
`

const BackspaceButton = styled.button`
font-weight: bold;
width: 100px;
`

let inputWrapper: HangulImeInputWrapper | undefined = undefined;

function CreateList() {
    const navigate = useNavigate()

    const [currentWord, setCurrentWord] = useState("");

    const wordListContext = useContext(WordListContext);

    const handleCurrentWord: ComponentProps<'input'>['onChange'] = (event) => {
        // console.log(event.target.value, currentWord);
        setCurrentWord(event.target.value);
    };

    const handleWordInfo: ComponentProps<'button'>['onClick'] = (event) => {
        if (currentWord === '') return;
        const resp = getWordInfo(currentWord);
        resp.then((value) => {
            // console.log(value);
            if (value !== '') {
                const parts: string[] = value.split("/").map((s) => s.trim());
                if(parts.length == 3){
                    wordListContext.wordList.push([currentWord, ...parts]);
                }
            }
            event.preventDefault();
            setCurrentWord("");
            // console.log(currentWord);
        });
    };

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (!inputRef.current) return;
        inputRef.current.focus();
        inputWrapper = new HangulImeInputWrapper(inputRef.current)
    }, []);

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
                        {wordListContext.wordList.map((d) => <>
                            <li>{d[0]} ({d[1]}) | {d[2]}</li>
                            <ul>
                                <li>{d[3]}</li>
                            </ul>
                            </>
                        )}
                    </ol>
                </ListContainer>
                <VerticalContainer>
                    <Label>
                        <InputContainer ref={inputRef} value={currentWord} onChange={handleCurrentWord}
                        />
                        <Button onClick={handleWordInfo}>Agregar</Button>
                    </Label>
                    {/* <SearchContainer>
                        <IconButton>
                            <AiOutlineSearch size={22} />
                        </IconButton>
                        <SearchInput />
                    </SearchContainer> */}
                    <KeyboardContainer>
                        {"ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ".split("").map((val, idx) => {
                            return (
                                <KeyboardButton
                                    key={idx}
                                    onClick={() => {
                                        inputWrapper?.insert(val);
                                    }}
                                    >
                                    {val}
                                </KeyboardButton>
                            );
                        })}
                        <SpaceButton onClick={() => {
                            inputWrapper?.insert(" ");
                        }}>space</SpaceButton>
                        <BackspaceButton onClick={() => {
                            inputWrapper?.backspace();
                        }}>⟵</BackspaceButton>
                    </KeyboardContainer>
                    <Button onClick={() => navigate('/view_list')}>Crear Lista</Button>
                </VerticalContainer>
            </HorizontalContainer>
            
        </VerticalContainer>
    )
}

export default CreateList