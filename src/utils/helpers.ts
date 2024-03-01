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

export const getCurrentQuestionNumber = (pathname: string) => {
  return Number(pathname.split('/')[2]);
};

export const getProgress = (
  currentQuestion: number,
  questionsCount: number
) => {
  return (currentQuestion * 100) / (questionsCount + 1);
};
