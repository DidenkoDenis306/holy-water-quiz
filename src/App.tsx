import './App.scss';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './components/layouts/MainLayout';
import { QuizLayout } from './components/layouts/QuizLayout';
import { FirstQuestion } from './components/pages/QuestionPages/FirstQuestion';
import { SecondQuestion } from './components/pages/QuestionPages/SecondQuestion';
import { ThirdQuestion } from './components/pages/QuestionPages/ThirdQuestion';
import { FourthQuestion } from './components/pages/QuestionPages/FourthQuestion';
import { FifthQuestion } from 'src/components/pages/QuestionPages/FifthQuestion';
import { LoadingPage } from './components/pages/LoadingPage';
import { EmailPage } from './components/pages/EmailPage';
import { ThankYouPage } from './components/pages/ThankYouPage';
import { NotFoundPage } from './components/pages/NotFoundPage';

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
