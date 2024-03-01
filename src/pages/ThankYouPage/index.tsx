import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Button } from '../../shared/ui/components/Button';
import { useState, useEffect } from 'react';
import { convertToCSV } from 'src/utils/helpers';
import { useNavigate } from 'react-router-dom';
import checkmark from 'public/icons/checkmark.png';
import downloadIcon from 'public/icons/download.svg';
import { AnswerData } from 'src/types/answerData.type';

export const ThankYouPage = () => {
  const { t } = useTranslation();
  const translationPrefix = 'thankYouPage';

  const [answers, setAnswers] = useState<AnswerData[] | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const storedAnswersString = localStorage.getItem('answers');
    const storedAnswers: AnswerData[] = storedAnswersString
      ? JSON.parse(storedAnswersString)
      : [];
    setAnswers(storedAnswers);
  }, []);

  const handleDownload = () => {
    const csvContent = convertToCSV(answers);

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    const url = window.URL.createObjectURL(blob);

    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'answers.csv';

    document.body.appendChild(anchor);
    anchor.click();

    window.URL.revokeObjectURL(url);
    anchor.remove();
  };

  const handleRetakeQuiz = () => {
    navigate('/quiz/1');
  };

  return (
    <Container>
      <Title data-aos="slide-left">{t(`${translationPrefix}.title`)}</Title>
      <Subtitle data-aos="slide-right">
        {t(`${translationPrefix}.subtitle`)}
      </Subtitle>
      <Checkmark src={checkmark} data-aos="fade-zoom-in" />

      <DownloadButton onClick={handleDownload} data-aos="zoom-out-down">
        <DownloadIcon src={downloadIcon} />
        {t(`${translationPrefix}.downloadAnswers`)}
      </DownloadButton>
      <Button
        buttonTitle={t(`${translationPrefix}.retakeQuizButtonTitle`)}
        onClick={handleRetakeQuiz}
      />
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 500px;
  height: 90vh;
  padding: 80px 0;
  margin: 0 auto;
`;

const Title = styled.p`
  margin: 0 auto;
  font-family: 'Niconne';
  font-size: 40px;
  font-weight: 800;
  line-height: 38px;
  text-align: center;
  letter-spacing: -2%;
`;

const Subtitle = styled.p`
  font-size: 17px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: -1%;
  text-align: center;
`;

const Checkmark = styled.img`
  width: 118px;
  height: 118px;
  margin: 70px auto;
`;

const DownloadIcon = styled.img`
  width: 42px;
  height: 42px;
`;

const DownloadButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 80%;
  height: 45px;
  margin: 0 auto;
  margin-top: 8%;

  font-weight: 600;
  font-size: 17px;
  line-height: 25px;
  letter-spacing: -1%;

  cursor: pointer;
`;
