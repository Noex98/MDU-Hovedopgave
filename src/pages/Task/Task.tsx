import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CtaButton, PageFrame, Spinner } from '../../components'
import { taskContext, userContext } from '../../myFirebase'
import { CheckTaskStatus } from '../../myFirebase/Firestore/stores/tasks/CheckTaskStatus'
import { StyledBtnWrapper, StyledDiscription, StyledHeader, StyledTimeStamp, StyledWrapper } from './Styled'

export const Task = () => {

    const tasks = useContext(taskContext)
    const { id } = useParams()
    const task = tasks?.today.find(task => task.id === id) || tasks?.spillover.find(task => task.id === id)
    const user = useContext(userContext)

    if (!task){
        return <Spinner />
    }

    const checkHandler = () => {
        if (user?.assignedStore){
            CheckTaskStatus(task.id, user.assignedStore, !task.completed)
        }
    }

    return (
        <PageFrame>
            <StyledWrapper>
                <StyledHeader>{task.name}</StyledHeader>
                <StyledTimeStamp>{task.time}</StyledTimeStamp>
                <StyledDiscription>{task.description}</StyledDiscription>

                <StyledBtnWrapper>
                    <CtaButton
                        color={task.completed ? 'negative' : 'positive'}
                        onClick={() => checkHandler()}
                        >{task.completed ? 'Mark as unfinished' : 'Mark as finished'}
                    </CtaButton>
                </StyledBtnWrapper>
            </StyledWrapper>
        </PageFrame>
    )
}
