import { FC } from 'react';
import styled from 'styled-components';

interface Props {
  buttonTitle: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
}

export const Button: FC<Props> = ({
  buttonTitle,
  onClick,
  type = 'button',
  disabled = false,
}) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick} type={type}>
      {buttonTitle}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 56px;

  background-color: #e4229c;
  border-radius: 30px;

  font-weight: 800;
  font-size: 17px;
  line-height: 24px;
  letter-spacing: -1%;
  color: #e8eaf2;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};

  transition: 0.3s ease-out;

  &:hover {
    background-color: #e4229dd1;
  }
`;
