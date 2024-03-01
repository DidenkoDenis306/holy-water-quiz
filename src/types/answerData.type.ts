import { QuestionType } from 'src/constants/questionType';

export interface AnswerData {
  order: number;
  title: string;
  type: QuestionType;
  answer: string | string[];
}
