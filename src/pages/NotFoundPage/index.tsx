import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/shared/ui/components/Button';
import styled from 'styled-components';

export const NotFoundPage: FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <Title>404</Title>

        <Button
          buttonTitle={t('thankYouPage.retakeQuizButtonTitle')}
          onClick={() => navigate('/quiz/1')}
        />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 84vh;
  padding: 0 16px;
  position: relative;
`;

const Title = styled.h1`
  margin-bottom: 40px;
  text-align: center;
  color: #0f0f11;
  font-size: 6rem;
  font-style: normal;
  font-weight: 800;
  line-height: 41px;
  letter-spacing: -0.32px;

  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradient 10s ease infinite,
    colorChange 10s linear infinite alternate;

  @keyframes colorChange {
    0%,
    100% {
      color: #ee7752;
    }
    25% {
      color: #e73c7e;
    }
    50% {
      color: #23a6d5;
    }
    75% {
      color: #23d5ab;
    }
  }
`;
