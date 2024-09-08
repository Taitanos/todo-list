import styled from "styled-components";

const Task = styled.div`
    display: flex;
    max-width: 250px;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
    border: 2px solid black;
    border-radius: 15px;
    background-color: antiquewhite;
    gap: 15px;
`

const TitleDescription = styled.div`
    display: flex;
    padding: 5px;
    gap: 15px;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 5px;
`

const BtnContainer = styled(TitleDescription)`
    border: none;
`

const TaskInfo = styled(TitleDescription)`
    justify-content: flex-start;
`
const TitleTask = styled.h2`

`

const NameTitleTask = styled.span`

`

const TaskDescription = styled.div`

`
const TaskDate = styled.div`

`

const Button = styled.button`
    padding: 5px;
    text-align: center;
    max-width: 100px;
    border-radius: 10px;
    background-color: ${props => (props.disabled ? 'gray' : 'cyan')};
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    transition: background-color 0.3s;
`

export const S = {
    Task,
    TitleDescription,
    BtnContainer,
    TaskInfo,
    TitleTask,
    NameTitleTask,
    TaskDescription,
    TaskDate,
    Button
}