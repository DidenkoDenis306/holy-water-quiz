import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { QuestionTemplate } from 'src/components/QuestionTemplate';
import { QuestionType } from 'src/constants/questionType';
import { saveAnswer } from 'src/utils/helpers';

export const SecondQuestion = () => {
  const { t } = useTranslation();
  const translationPrefix = 'secondQuestion';

  const navigate = useNavigate();

  const genders = [
    {
      id: 1,
      name: t(`${translationPrefix}.genders.female`),
      imageURL: '../../../../public/icons/female.png',
    },
    {
      id: 2,
      name: t(`${translationPrefix}.genders.male`),
      imageURL: '../../../../public/icons/male.png',
    },
    {
      id: 3,
      name: t(`${translationPrefix}.genders.other`),
      imageURL: '../../../../public/icons/other.png',
    },
  ];

  const handleSelectGender = (gender: string) => {
    saveAnswer({
      order: 2,
      title: t(`${translationPrefix}.title`),
      type: QuestionType.SINGLE_SELECT,
      answer: gender,
    });
    navigate('/quiz/3');
  };

  return (
    <QuestionTemplate
      title={t(`${translationPrefix}.title`)}
      subtitle={t(`${translationPrefix}.subtitle`)}
    >
      <VariantBlocksWrapper>
        {genders.map((gender) => (
          <VariantBlock
            key={gender.id}
            onClick={() => handleSelectGender(gender.name)}
          >
            <img src={gender.imageURL} alt="123" />
            {gender.name}
          </VariantBlock>
        ))}
      </VariantBlocksWrapper>
    </QuestionTemplate>
  );
};

const VariantBlocksWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const VariantBlock = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex-grow: 1;
  min-width: 100px;
  height: 144px;
  border-radius: 12px;
  padding: 12px 20px;

  background-color: #36173d;

  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: #e8eaf2;

  transition: 0.3s ease-out;

  &:hover {
    transform: scale(1.03);
    background-color: #451d4e;
  }
`;
