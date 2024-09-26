import {S} from "./Task_Styled"
import {useState} from "react";


export default function Task({taskTitle, dateCreation, dateEnd, taskType, description, users, taskStatus, collapse}) {

    const [toggleTask, setToggleTask] = useState(true)

    const onToggleTask = () => {
        setToggleTask(!toggleTask);  // Меняем состояние на противоположное
    };

    const isTaskCompleted = taskStatus === "Завершено";

    return (
        <S.Task onClick={onToggleTask} collapse={collapse}>
            {
                toggleTask
                    ? (<>
                        <S.TitleDescription>
                            <S.NameTitleTask>Название задачи:</S.NameTitleTask>
                            <S.TitleTask>{taskTitle}</S.TitleTask>
                        </S.TitleDescription>
                        <S.TaskInfo>
                            <S.NameTitleTask>метка:</S.NameTitleTask>
                            <S.TaskDescription>{taskType}</S.TaskDescription>
                        </S.TaskInfo>
                        <S.TaskInfo>
                            <S.TaskDescription>
                                <S.NameTitleTask>Дата создания:</S.NameTitleTask>
                                <S.TaskDate>{dateCreation}</S.TaskDate>
                            </S.TaskDescription>
                            <S.TaskDescription>
                                <S.NameTitleTask>Дата завершения:</S.NameTitleTask>
                                <S.TaskDate>{dateEnd}</S.TaskDate>
                            </S.TaskDescription>
                        </S.TaskInfo>
                        <S.TaskInfo>
                            <S.NameTitleTask>Статус задачи:</S.NameTitleTask>
                            <S.TaskDescription>{taskStatus}</S.TaskDescription>
                        </S.TaskInfo>
                    </>)
                    : (<>
                        <S.TitleDescription>
                            <S.NameTitleTask>Название задачи:</S.NameTitleTask>
                            <S.TitleTask>{taskTitle}</S.TitleTask>
                        </S.TitleDescription>
                        <S.TaskInfo>
                            <S.NameTitleTask>метка:</S.NameTitleTask>
                            <S.TaskDescription>{taskType}</S.TaskDescription>
                        </S.TaskInfo>
                        <S.TaskInfo>
                            <S.NameTitleTask>Описание:</S.NameTitleTask>
                            <S.TaskDescription>{description}</S.TaskDescription>
                        </S.TaskInfo>
                        <S.TaskInfo>
                            <S.NameTitleTask>Участники:</S.NameTitleTask>
                            <S.TaskDescription>
                                {users.map((user, index) => (
                                    <S.TaskDescription key={index}>
                                        {user}
                                    </S.TaskDescription>
                                ))}
                            </S.TaskDescription>
                        </S.TaskInfo>
                        <S.TaskInfo>
                            <S.TaskDescription>
                                <S.NameTitleTask>Дата создания:</S.NameTitleTask>
                                <S.TaskDate>{dateCreation}</S.TaskDate>
                            </S.TaskDescription>
                            <S.TaskDescription>
                                <S.NameTitleTask>Дата завершения:</S.NameTitleTask>
                                <S.TaskDate>{dateEnd}</S.TaskDate>
                            </S.TaskDescription>
                        </S.TaskInfo>
                        <S.TaskInfo>
                            <S.NameTitleTask>Статус задачи:</S.NameTitleTask>
                            <S.TaskDescription>{taskStatus}</S.TaskDescription>
                        </S.TaskInfo>
                        <S.BtnContainer>
                            <S.Button disabled={isTaskCompleted}>Завершить</S.Button>
                        </S.BtnContainer>
                    </>)
            }
        </S.Task>
    )
}