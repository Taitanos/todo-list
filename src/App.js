import React, {useState, useEffect, useCallback} from 'react';
import Header from "./layout/header/Header";
import Main from "./layout/section/main/Main";
import Footer from "./layout/footer/Footer";

function App({tasks}) {
    const [filteredTasks, setFilteredTasks] = useState(tasks)

    const handleFilterTasks = (filterType, priority) => {

        let filtered = tasks;

        // Фильтрация по статусу
        if (filterType === 'incomplete') {
            filtered = filtered.filter(task =>
                task.taskStatus === 'В работе' || task.taskStatus === 'Новый'
            )
        } else if (filterType === 'complete') {
            filtered = filtered.filter(task => task.taskStatus === 'Завершено')
        }

        // Если нужно отфильтровать по приоритету
        if (priority && priority !== 'all') {
            filtered = filtered.filter(task => {
                if (priority === 'urgent') {
                    return task.taskType === 'Срочно'
                } else if (priority === 'important') {
                    return task.taskType === 'Важно'
                } else if (priority === 'not_urgent') {
                    return task.taskType === 'Не срочно'
                } else if (priority === 'not_important') {
                    return task.taskType === 'Не важно'
                }
                return true
            })

            setFilteredTasks(filtered)
        }
    }

    // Сортировка задач по приоритету при первом рендере
    useEffect(() => {
        const sortedTasks = [...tasks].sort((a, b) => {
            const priorityOrder = {
                'Срочно': 1,
                'Важно': 2,
                'Не срочно': 3,
                'Не важно': 4,
            }
            return (priorityOrder[a.taskType] || 5) - (priorityOrder[b.taskType] || 5)
        })
        setFilteredTasks(sortedTasks)
    }, [tasks]) // Перезапускаем, когда `tasks` меняется

    const handleResetFilters = useCallback(() => {
        // Сортировка всех задач по приоритету без применения фильтров
        const sortedTasks = [...tasks].sort((a, b) => {
            const priorityOrder = {
                'Срочно': 1,
                'Важно': 2,
                'Не срочно': 3,
                'Не важно': 4,
            }
            return (priorityOrder[a.taskType] || 5) - (priorityOrder[b.taskType] || 5)
        })
        setFilteredTasks(sortedTasks)
    }, [tasks]) // Зависимость от tasks

    return (
        <div>
            <Header onFilter={handleFilterTasks} onResetFilters={handleResetFilters}/>
            <Main tasks={filteredTasks}/>
            <Footer/>
        </div>
    )
}

export default App;