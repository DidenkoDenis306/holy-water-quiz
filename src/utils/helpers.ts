import { AnswerData } from 'src/types/answerData.type';

export const convertToCSV = (data: any) => {
  let csvContent = 'order,title,type,answer\n';

  data.forEach((answerData: AnswerData) => {
    const { order, title, type, answer } = answerData;
    csvContent += `${order},${title},${type},${
      Array.isArray(answer) ? `"${answer.join(', ')}"` : answer
    }\n`;
  });

  return csvContent;
};

export const saveAnswer = (answerData: AnswerData) => {
  const currentAnswersString = localStorage.getItem('answers');
  const currentAnswers: any = currentAnswersString
    ? JSON.parse(currentAnswersString)
    : [];

  currentAnswers[answerData.order - 1] = answerData;

  localStorage.setItem('answers', JSON.stringify(currentAnswers));
};

export const getCurrentQuestionNumber = (pathname: string) => {
  return Number(pathname.split('/')[2]);
};

export const getProgress = (
  currentQuestion: number,
  questionsCount: number
) => {
  return (currentQuestion * 100) / (questionsCount + 1);
};
