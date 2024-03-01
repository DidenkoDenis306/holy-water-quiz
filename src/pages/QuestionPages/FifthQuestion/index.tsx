import { useTranslation } from 'react-i18next';
import { QuestionTemplate } from '../../../shared/ui/components/templates/QuestionTemplate';
import styled from 'styled-components';
import { Button } from 'src/shared/ui/components/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { QuestionType } from 'src/constants/questionType';
import { saveAnswer } from 'src/utils/helpers';
import werewolfImage from 'public/icons/werewolf.png';
import actionImage from 'public/icons/action.png';
import royalImage from 'public/icons/royal.png';
import billionaireImage from 'public/icons/billionaire.png';
import romanceImage from 'public/icons/romance.png';
import youngAdultImage from 'public/icons/young_adult.png';
import badBoyImage from 'public/icons/bad_boy.png';

export const FifthQuestion = () => {
  const { t } = useTranslation();
  const translationPrefix = 'fifthQuestion';

  const navigate = useNavigate();

  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  const topics = [
    {
      id: 1,
      title: t(`${translationPrefix}.topics.werewolf`),
      image: werewolfImage,
      gridArea: 'a',
    },
    {
      id: 2,
      title: t(`${translationPrefix}.topics.action`),
      image: actionImage,
      gridArea: 'c',
    },
    {
      id: 3,
      title: t(`${translationPrefix}.topics.royalObsession`),
      image: royalImage,
      gridArea: 'e',
    },
    {
      id: 4,
      title: t(`${translationPrefix}.topics.billionaire`),
      image: billionaireImage,
      gridArea: 'g',
    },
    {
      id: 5,
      title: t(`${translationPrefix}.topics.romance`),
      image: romanceImage,
      gridArea: 'b',
    },
    {
      id: 6,
      title: t(`${translationPrefix}.topics.youngAdult`),
      image: youngAdultImage,
      gridArea: 'd',
    },
    {
      id: 7,
      title: t(`${translationPrefix}.topics.badBoy`),
      image: badBoyImage,
      gridArea: 'f',
    },
  ];

  const handleSelectTopic = (topic: string) => {
    const isVariantSelected = selectedAnswers.includes(topic);

    if (isVariantSelected) {
      const filteredAnswers = selectedAnswers.filter(
        (answer: string) => answer !== topic
      );
      setSelectedAnswers(filteredAnswers);
    } else {
      if (selectedAnswers.length < 3) {
        setSelectedAnswers([...selectedAnswers, topic]);
      } else {
        setSelectedAnswers([...selectedAnswers.slice(1), topic]);
      }
    }
  };

  const onRedirectToNextQuestion = () => {
    saveAnswer({
      order: 5,
      title: t(`${translationPrefix}.title`),
      type: QuestionType.BUBBLE,
      answer: selectedAnswers,
    });

    navigate('/loader');
  };

  const isTopicSelected = (topic: string) => {
    return selectedAnswers.includes(topic);
  };

  return (
    <QuestionTemplate
      title={t(`${translationPrefix}.title`)}
      subtitle={t(`${translationPrefix}.subtitle`)}
    >
      <VariantBlocksWrapper>
        {topics.map((topic) => (
          <VariantBlock
            gridArea={topic.gridArea}
            key={topic.id}
            isSelected={isTopicSelected(topic.title)}
            onClick={() => handleSelectTopic(topic.title)}
          >
            <img src={topic.image} alt={topic.title} />
            {topic.title}
          </VariantBlock>
        ))}
      </VariantBlocksWrapper>

      <Button
        buttonTitle={t('nextButtonTitle')}
        onClick={onRedirectToNextQuestion}
      />
    </QuestionTemplate>
  );
};

const VariantBlocksWrapper = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  margin-top: 20px;
  grid-template-columns: repeat(12, 20px);
  grid-gap: 10px;
  grid-template-areas:
    'a a a 2 2 2 e e e 4 4 4'
    'a a a c c c e e e g g g'
    'a a a c c c e e e g g g'
    'b b b c c c f f f g g g'
    'b b b d d d f f f 5 5 5'
    'b b b d d d f f f 5 5 5'
    '1 1 1 d d d 3 3 3 5 5 5 ';
`;

const VariantBlock = styled.div<SelectedProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  width: 88px;
  height: 88px;
  padding: 10px;
  border-radius: 100%;
  background-color: #36173d;
  grid-area: ${({ gridArea }) => gridArea};
  border: ${({ isSelected }) => isSelected && '2px solid #e4229b'};

  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.6%;
  text-align: center;

  cursor: pointer;
  transition: 0.2s ease-out;

  &:hover {
    transform: scale(1.05);
    background-color: #451d4e;
  }
`;

interface SelectedProps {
  gridArea: string;
  isSelected: boolean;
}
