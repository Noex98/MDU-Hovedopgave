import React from 'react'
import { Link } from 'react-router-dom'
import { ITask } from '../../../../dataModels'
import { StyledContainer, StyledMessage, StyledTask } from './styled'

type Props = {
    tasks: ITask[],
    showFinished?: boolean,
    showTodo?: boolean,
}

export const Tasklist = ({
    tasks,
    showFinished = true,
    showTodo = true,    
}: Props ) => {

    if(!tasks.length && showFinished){
        return (
            <StyledMessage>No tasks finished</StyledMessage>
        )
    }

    if (!tasks.length && showTodo){
        return <StyledMessage>All tasks finished</StyledMessage>
    }


    return (
        <StyledContainer>
            {tasks.map((task, i) => (
                <Link to={`/task/${task.id}`}>
                    <StyledTask completed={task.completed} key={i}>
                        <div>{task.name}</div>
                        <div>{task.time}</div>
                    </StyledTask>
                </Link>
            ))}
        </StyledContainer>
    )
}
