import { v4 as uuidv4 } from 'uuid'

const mockData = [
    {
        id: "todo-123",
        title: ' 📃 To do',
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn JavaScript'
            },
            {
                id: uuidv4(),
                title: 'Learn Git'
            },
            {
                id: uuidv4(),
                title: 'Learn Python'
            },
        ]
    },
    {
        id: "progress-123",
        title: ' ✏️ In progress',
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn CSS'
            },
            {
                id: uuidv4(),
                title: 'Learn Golang'
            }
        ]
    },
    {
        id: "completed-123",
        title: ' ✔️ Completed',
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn HTML'
            }
        ]
    }
]

export default mockData