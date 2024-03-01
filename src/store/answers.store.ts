import { AnswerData } from 'src/types/answerData.type';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface AnswersState {
  answers: AnswerData[];
  saveAnswer: (answer: AnswerData) => void;
}

export const useAnswersStore = create<AnswersState>()(
  persist(
    (set, get) => ({
      answers: [],
      saveAnswer: (newAnswer: AnswerData) => {
        const currentAnswers = get().answers;

        currentAnswers[newAnswer.order - 1] = newAnswer;

        set({ answers: currentAnswers });
      },
    }),
    {
      name: 'answers-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
