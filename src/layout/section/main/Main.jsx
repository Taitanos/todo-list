import {S} from "./Main_Styled"
import Task from "../../../components/task/Task";

export default function Main({tasks}) {
    return (
        <S.Main>
            {tasks.map(task => (
                <Task key={task.id}
                      taskTitle={task.taskTitle}
                      dateCreation={task.dateCreation}
                      dateEnd={task.dateEnd}
                      taskType={task.taskType}
                      description={task.description}
                      users={task.users}
                      taskStatus={task.taskStatus}
                      collapse={task.collapse}
                />))}
        </S.Main>
    )
}