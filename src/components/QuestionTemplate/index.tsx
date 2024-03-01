import { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export const QuestionTemplate: FC<Props> = ({ title, subtitle, children }) => {
  return (
    <Container>
      <QuestionTitle data-aos="slide-left">{title}</QuestionTitle>

      {subtitle && (
        <QuestionSubtitle data-aos="slide-right">{subtitle}</QuestionSubtitle>
      )}

      {children}
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 25px;
  height: 80vh;
  width: 100%;
  padding: 40px 0;
`;

const QuestionTitle = styled.p`
  margin: 0 auto;
  font-size: 30px;
  font-weight: 800;
  line-height: 38px;
  text-align: center;
  letter-spacing: -2%;
`;

const QuestionSubtitle = styled.p`
  font-size: 17px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
`;
