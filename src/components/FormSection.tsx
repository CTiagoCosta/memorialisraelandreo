
import styled from 'styled-components';
import { devices } from '../resorces/devices';

type FormProps = {
  gridTemplateColumns: string;
  gridTemplateAreas: string;
};

type FormSectionProps = {
  children: any;
  title: string;
  gridTemplateColumns: string;
  gridTemplateAreas: string;
};

const Wrapper = styled.section`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0px;
  padding: 0px;
  width: 100%;
`;

const SectionTitle = styled.div`
  align-items: center;
  background-color: #1c4532;
  border-radius: 5px;
  display: flex;
  height: 55px;
  justify-content: flex-start;
  padding: 0px 20px;
  width: 100%;
`;

const Title = styled.h3`
    color: white;
    font-size: 1.6rem;
    font-weight: 600;
    margin: 5px 0px;

    @media ${devices.tablet} {
      font-size: 2rem;
    }
`;

const SectionBody = styled.div<FormProps>`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  width: 100%;
  
  @media ${devices.tablet} {
    display: grid;
    grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
    grid-template-areas: ${({ gridTemplateAreas }) => gridTemplateAreas};
    gap: 0px 20px;
  }
`;

export function FormSection({ children, title, gridTemplateColumns, gridTemplateAreas }: FormSectionProps) {
  return (
    <Wrapper>
      {title && (
      <SectionTitle>
        <Title>{title}</Title>
      </SectionTitle>
      )}
      <SectionBody gridTemplateColumns={gridTemplateColumns} gridTemplateAreas={gridTemplateAreas}>
        {children}
      </SectionBody>
    </Wrapper>
  );
}
