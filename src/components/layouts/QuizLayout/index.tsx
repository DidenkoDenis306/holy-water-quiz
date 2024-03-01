import { Outlet, useLocation } from 'react-router-dom';
import { ProgressBar } from '../../ProgressBar';

export const QuizLayout = () => {
  const { pathname } = useLocation();

  const currentQuestion = Number(pathname.split('/')[2]);
  const questionsCount = 5;

  const completed = (currentQuestion * 100) / (questionsCount + 1);
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
