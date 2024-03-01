import './App.scss';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { QuizLayout } from './layouts/QuizLayout';
import { FirstQuestion } from './pages/QuestionPages/FirstQuestion';
import { SecondQuestion } from './pages/QuestionPages/SecondQuestion';
import { ThirdQuestion } from './pages/QuestionPages/ThirdQuestion';
import { FourthQuestion } from './pages/QuestionPages/FourthQuestion';
import { FifthQuestion } from 'src/pages/QuestionPages/FifthQuestion';
import { LoadingPage } from './pages/LoadingPage';
import { EmailPage } from './pages/EmailPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { NotFoundPage } from './pages/NotFoundPage';

const App = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/quiz/1" />,
      },
      {
        path: 'quiz',
        element: <QuizLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="/quiz/1" />,
          },
          { path: '1', element: <FirstQuestion /> },
          { path: '2', element: <SecondQuestion /> },
          { path: '3', element: <ThirdQuestion /> },
          { path: '4', element: <FourthQuestion /> },
          { path: '5', element: <FifthQuestion /> },
        ],
      },
      {
        path: 'loader',
        element: <LoadingPage />,
      },
      {
        path: 'email',
        element: <EmailPage />,
      },
      {
        path: 'thank-you',
        element: <ThankYouPage />,
      },
    ],
  },
]);

export default App;
