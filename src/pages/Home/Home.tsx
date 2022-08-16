import { useContext } from 'react';
import { Spinner } from '../../components';
import { PageFrame } from '../../components/PageFrame';
import { taskContext } from '../../myFirebase';
import { Tasklist } from './components';
import { StyledWrapper } from './styled';

export const HomePage = () => {

    const tasks = useContext(taskContext)

    if (tasks === null){
        return(
            <Spinner/>
        )
    }

    return (
        <PageFrame>
            <StyledWrapper>
                    <Tasklist showTodo={true} showFinished={false} key={1} tasks={tasks.today.filter(task => !task.completed)}/>
                    <Tasklist showTodo={false} showFinished={true} key={2} tasks={tasks.today.filter(task => task.completed)}/>
            </StyledWrapper>
        </PageFrame>
    );
};

