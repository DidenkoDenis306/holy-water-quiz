import { useTranslation } from 'react-i18next';
import { QuestionTemplate } from '../../../shared/ui/components/templates/QuestionTemplate';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/shared/ui/components/Button';
import { useState } from 'react';
import { QuestionType } from 'src/constants/questionType';
import { saveAnswer } from 'src/utils/helpers';
import checkmarkImage from 'public/icons/check.svg';

export const FourthQuestion = () => {
  const { t } = useTranslation();
  const translationPrefix = 'fourthQuestion';

  const navigate = useNavigate();

  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  const variants = [
    t(`${translationPrefix}.variants.lackOfLogic`),
    t(`${translationPrefix}.variants.slowSpeed`),
    t(`${translationPrefix}.variants.lackOfHumor`),
    t(`${translationPrefix}.variants.genericEnding`),
  ];

  const handleSelectVariants = (variant: string) => {
    const isVariantSelected = selectedAnswers.includes(variant);

    if (isVariantSelected) {
      const filteredAnswers = selectedAnswers.filter(
        (answer) => answer !== variant
      );
      setSelectedAnswers(filteredAnswers);
    } else {
      setSelectedAnswers([...selectedAnswers, variant]);
    }
  };

  const onRedirectToNextQuestion = () => {
    saveAnswer({
      order: 4,
      title: t(`${translationPrefix}.title`),
      type: QuestionType.MULTIPLE_SELECT,
      answer: selectedAnswers,
    });

    navigate('/quiz/5');
  };

  const isVariantSelected = (variant: string) => {
    return selectedAnswers.includes(variant);
  };

  return (
    <QuestionTemplate title={t(`${translationPrefix}.title`)}>
      <Container>
        <VariantBlocksWrapper>
          {variants.map((variant) => {
            const isSelected = isVariantSelected(variant);
            return (
              <VariantBlock
                key={variant}
                onClick={() => handleSelectVariants(variant)}
                isSelected={isSelected}
              >
                {variant}
                <StyledCheckBox isSelected={isSelected}>
                  {isSelected && <StyledImage src={checkmarkImage} />}
                </StyledCheckBox>
              </VariantBlock>
            );
          })}
        </VariantBlocksWrapper>

        <Button
          buttonTitle={t('nextButtonTitle')}
          onClick={onRedirectToNextQuestion}
        />
      </Container>
    </QuestionTemplate>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const VariantBlocksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 20px;
`;

const VariantBlock = styled.button<SelectedProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 76px;
  border-radius: 16px;
  padding: ${({ isSelected }) => (isSelected ? '10px 18px' : '12px 20px')};

  background-color: #36173d;

  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  color: #e8eaf2;

  border: ${({ isSelected }) => isSelected && '2px solid #e4229b'};

  transition: 0.3s ease-out;

  &:hover {
    transform: scale(1.01);
    background-color: #451d4e;
  }
`;

const StyledImage = styled.img`
  display: block;
  width: 11px;
  height: 8px;
`;

const StyledCheckBox = styled.div<SelectedProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23px;
  height: 23px;
  border-radius: 8px;
  border: 1px solid #e4229b;

  background-color: ${({ isSelected }) => (isSelected ? '#e4229b' : '#6d4376')};
  background-image: ${({ isSelected }) => isSelected && checkmarkImage};
  background-repeat: no-repeat;
  background-position: center;
`;

interface SelectedProps {
  isSelected: boolean;
}
