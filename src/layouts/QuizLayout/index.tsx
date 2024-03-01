import { Outlet, useLocation } from 'react-router-dom';
import { ProgressBar } from '../../shared/ui/components/ProgressBar';
import { getCurrentQuestionNumber, getProgress } from 'src/utils/helpers';

export const QuizLayout = () => {
  const { pathname } = useLocation();

  const currentQuestion = getCurrentQuestionNumber(pathname);
  const questionsCount = 5;

  const completed = getProgress(currentQuestion, questionsCount);
  return (
    <>
      <ProgressBar
        questionsCount={questionsCount}
        completed={completed}
        currentQuestion={currentQuestion}
      />
      <Outlet />
    </>
  );
};
