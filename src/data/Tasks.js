
// типы задач: Срочно, Важно, Не срочно, Не важно
// Статус задач: Новый, В работе, Завершено

const Tasks = [
    {
        id: 1,
        taskTitle: 'Обучение в ИТМО',
        dateCreation: '2.09.2024',
        dateEnd: '31.10.2024',
        taskType: 'Важно',
        description: 'Здесь идет описание задачи, которую необходимо сделать и необходимое описание',
        users: [
            "Николай",
            "Александр",
            "Владимир"
        ],
        taskStatus: "В работе",
        collapse: true,
    },
    {
        id: 2,
        taskTitle: 'Сдать 2 задание',
        dateCreation: '29.08.2024',
        dateEnd: '31.08.2024',
        taskType: 'Важно',
        description: 'Здесь идет описание задачи, которую необходимо сделать и необходимое описание',
        users: [
            "Николай"
        ],
        taskStatus: "Завершено",
        collapse: true,
    },
    {
        id: 3,
        taskTitle: 'Сдать 3 задание',
        dateCreation: '3.09.2024',
        dateEnd: '6.09.2024',
        taskType: 'Срочно',
        description: 'Здесь идет описание задачи, которую необходимо сделать и необходимое описание',
        users: [
            "Николай"
        ],
        taskStatus: "В работе",
        collapse: true,
    },
    {
        id: 4,
        taskTitle: 'Сдать 4 задание',
        dateCreation: '3.09.2024',
        dateEnd: '10.09.2024',
        taskType: 'Срочно',
        description: 'Здесь идет описание задачи, которую необходимо сделать и необходимое описание',
        users: [
            "Николай"
        ],
        taskStatus: "Новый",
        collapse: true,
    },
    {
        id: 5,
        taskTitle: 'Сдать 5 задание',
        dateCreation: '2.09.2024',
        dateEnd: '14.09.2024',
        taskType: 'Важно',
        description: 'Здесь идет описание задачи, которую необходимо сделать и необходимое описание',
        users: [
            "Николай"
        ],
        taskStatus: "Новый",
        collapse: true,
    },
    {
        id: 6,
        taskTitle: 'Перерыв',
        dateCreation: '2.09.2024',
        dateEnd: '31.10.2024',
        taskType: 'Не важно',
        description: 'Здесь идет описание задачи, которую необходимо сделать и необходимое описание',
        users: [
            "Николай"
        ],
        taskStatus: "Новый",
        collapse: true,
    },
    {
        id: 7,
        taskTitle: 'Закончить обучение',
        dateCreation: '2.09.2024',
        dateEnd: '31.10.2024',
        taskType: 'Важно',
        description: 'Здесь идет описание задачи, которую необходимо сделать и необходимое описание',
        users: [
            "Николай"
        ],
        taskStatus: "Новый",
        collapse: true,
    }
]

export {Tasks}