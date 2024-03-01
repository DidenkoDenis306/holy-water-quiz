import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { QuestionTemplate } from 'src/components/QuestionTemplate';
import i18n from 'src/i18n';
import { saveAnswer } from 'src/utils/helpers';
import { QuestionType } from 'src/constants/questionType';

export const FirstQuestion = () => {
  const { t } = useTranslation();
  const translationPrefix = 'firstQuestion';

  const navigate = useNavigate();

  const languages = {
    en: t(`${translationPrefix}.languages.english`),
    fr: t(`${translationPrefix}.languages.french`),
    de: t(`${translationPrefix}.languages.german`),
    es: t(`${translationPrefix}.languages.spanish`),
  };

  const handleChangeLanguage = (language: string) => {
    saveAnswer({
      order: 1,
      title: t(`${translationPrefix}.title`),
      type: QuestionType.SINGLE_SELECT,
      answer: language,
    });

    i18n.changeLanguage(language);
    navigate('/quiz/2');
  };

  return (
    <QuestionTemplate
      title={t(`${translationPrefix}.title`)}
      subtitle={t(`${translationPrefix}.subtitle`)}
    >
      <VariantBlocksWrapper>
        {Object.keys(languages).map((language: string) => (
          <VariantBlock
            onClick={() => handleChangeLanguage(language)}
            // data-aos="zoom-out"
          >
            {languages[language as keyof typeof languages]}
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
  height: 60px;
  border-radius: 16px;
  padding: 12px 20px;

  background-color: #36173d;

  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  color: #e8eaf2;

  transition: 0.3s ease;

  &:hover {
    transform: scale(1.01);
    background-color: #451d4e;
  }
`;
