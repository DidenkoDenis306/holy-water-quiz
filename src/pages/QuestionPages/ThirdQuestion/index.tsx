import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { QuestionTemplate } from 'src/shared/ui/components/templates/QuestionTemplate';
import { QuestionType } from 'src/constants/questionType';
import { useAnswersStore } from 'src/store/answers.store';

export const ThirdQuestion = () => {
  const { saveAnswer } = useAnswersStore();

  const { t } = useTranslation();
  const translationPrefix = 'thirdQuestion';

  const navigate = useNavigate();

  const ages = ['18-29 years', '30-39 years', '40-49 years', '50+'];

  const handleSelectAge = (age: string) => {
    saveAnswer({
      order: 3,
      title: t(`${translationPrefix}.title`),
      type: QuestionType.SINGLE_SELECT,
      answer: age,
    });

    navigate('/quiz/4');
  };

  return (
    <QuestionTemplate title={t(`${translationPrefix}.title`)}>
      <VariantBlocksWrapper>
        {ages.map((age) => (
          <VariantBlock key={age} onClick={() => handleSelectAge(age)}>
            {age}
          </VariantBlock>
        ))}
      </VariantBlocksWrapper>
    </QuestionTemplate>
  );
};

const VariantBlocksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
`;

const VariantBlock = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 76px;
  border-radius: 16px;
  padding: 12px 20px;

  background-color: #36173d;

  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  color: #e8eaf2;

  transition: 0.3s ease-out;

  &:hover {
    transform: scale(1.01);
    background-color: #451d4e;
  }
`;
