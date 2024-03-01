import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  questionsCount: number;
  currentQuestion: number;
  completed: number;
}

export const ProgressBar: FC<Props> = ({
  questionsCount,
  currentQuestion,
  completed,
}) => {
  const navigate = useNavigate();

  const handleMoveToPrevQuestion = () => {
    navigate(`/quiz/${currentQuestion - 1}`);
  };

  return (
    <Container>
      <QuestionsCounter>
        {currentQuestion !== 1 && (
          <Arrow
            src="../../../public/icons/arrow.svg"
            alt="arrow"
            onClick={handleMoveToPrevQuestion}
          />
        )}
        <CurrentQuestionText>{currentQuestion}</CurrentQuestionText>
        {` / ${questionsCount}`}
      </QuestionsCounter>
      <BarContainer>
        <FillerStyles completed={completed}>
          <LabelStyles />
        </FillerStyles>
      </BarContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
  padding: 15px 0;
  text-align: center;
`;

const CurrentQuestionText = styled.span`
  color: #e4229c;
`;

const QuestionsCounter = styled.p`
  position: relative;
  font-size: 18px;
  font-weight: 800;
  line-height: 20px;
`;

const Arrow = styled.img`
  position: absolute;
  left: 0;
  width: 24px;
  height: 24px;
  cursor: pointer;

  transition: 0.2s opacity;

  &:hover {
    opacity: 0.8;
  }
`;

const BarContainer = styled.div`
  height: 8px;
  width: 100%;
  min-width: 100px;
  background-color: #d8dae5;
  border-radius: 50px;
  margin: 0 auto;
`;

const FillerStyles = styled.div<SelectedProps>`
  height: 100%;
  width: ${({ completed }) => completed}%;
  background-color: #e4229c;
  border-radius: inherit;
  text-align: right;
  transition: 0.3s ease-in-out;
`;

const LabelStyles = styled.div`
  padding: 5px;
  color: white;
  font-weight: bold;
`;

interface SelectedProps {
  completed?: number;
}
