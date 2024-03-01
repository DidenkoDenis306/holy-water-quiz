import { useEffect } from 'react';
import CircularProgress from '../../shared/ui/components/CircularProgress';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

export const LoadingPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/email');
    }, 5500);
  });

  return (
    <Container>
      <CircularProgress />

      <StyledText>{t('findingCollections')}</StyledText>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 80vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const StyledText = styled.p`
  width: 200px;
  font-weight: 600;
  font-size: 17px;
  line-height: 25px;
  letter-spacing: -1%;
  text-align: center;
`;
