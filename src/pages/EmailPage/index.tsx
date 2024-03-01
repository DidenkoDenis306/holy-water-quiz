import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Button } from '../../shared/ui/components/Button';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { QuestionType } from 'src/constants/questionType';
import { saveAnswer } from 'src/utils/helpers';
import { EMAIL_PATTERN } from 'src/constants/regularExpressions';

export const EmailPage = () => {
  const { t } = useTranslation();
  const translationPrefix = 'emailPage';

  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isDirty },
    handleSubmit,
  } = useForm({ defaultValues: { email: '' } });

  const onSubmit = (data: any) => {
    saveAnswer({
      order: 6,
      title: t(`${translationPrefix}.title`),
      type: QuestionType.EMAIL,
      answer: data.email,
    });

    navigate('/thank-you');
  };

  return (
    <Container>
      <Title data-aos="slide-left">{t(`${translationPrefix}.title`)}</Title>
      <Subtitle data-aos="slide-right">
        {t(`${translationPrefix}.subtitle`)}
      </Subtitle>

      <StyledFrom onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('email', {
            required: true,
            pattern: {
              value: EMAIL_PATTERN,
              message: 'Invalid email',
            },
          })}
          placeholder={t(`${translationPrefix}.inputPlaceholder`)}
        />
        {errors.email && (
          <FormError style={{ color: 'red' }}>{errors.email.message}</FormError>
        )}

        <AgreementText>
          {t(`${translationPrefix}.agreements.firstAgreement`)}
          <AgreementLink href="">
            {t(`${translationPrefix}.agreements.secondAgreement`)}
          </AgreementLink>
          {t(`${translationPrefix}.agreements.thirdAgreement`)}
          <br />
          <AgreementLink href="">
            {t(`${translationPrefix}.agreements.fourthAgreement`)}
          </AgreementLink>
        </AgreementText>

        <Button disabled={!isDirty} type="submit" buttonTitle="Next" />
      </StyledFrom>
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

const StyledFrom = styled.form`
  margin-top: 30px;
`;

const FormError = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  padding: 5px;
`;

const Title = styled.p`
  margin: 0 auto;
  font-size: 30px;
  font-weight: 800;
  line-height: 38px;
  text-align: center;
  letter-spacing: -2%;
`;

const AgreementText = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  margin: 70px 0;
`;

const AgreementLink = styled.a`
  text-decoration: none;
  color: #e4229b;
`;

const Subtitle = styled.p`
  font-size: 17px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  height: 76px;
  border-radius: 16px;
  padding: 21px 20px;
  background-color: #36173d;
  border: none;

  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  letter-spacing: -1%;
  color: #e8eaf2;

  &:focus {
    border: 2px solid #e4229b;
    padding: 19px 18px;
  }
`;
