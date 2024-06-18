
import { mask as masker } from 'node-masker';
import styled from 'styled-components';

type ItemProps = {
  gridArea: string;
};

const Wrapper = styled.div<ItemProps>`
  align-items: flex-start;
  background-color: white;
  display: flex;
  flex-direction: column;
  grid-area: ${({ gridArea }) => gridArea};
  justify-content: center;
  margin: 10px 0px;
  overflow: hidden;
  padding: 0px;
  width: 100%;
`;

const Input = styled.input`
  border: 2px solid gray;
  border-radius: 4px;
  color: gray;
  font-size: 1.6rem;
  height: 60px;
  margin: 0px;
  outline: none;
  padding: 10px 20px;
  width: 100%;
  
  &:disabled {
    color: gray;
    cursor: not-allowed;
  }
`;

const FlexLabel = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Action = styled.label`
    color: green;
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: 600;
    margin: 3px 0px;
`;

type FormImputProps = {
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: (event: any) => Promise<void>;
  placeholder: string;
  mask?: string | string[];
  autoComplete: string;
  action?: string;
  handleAction?: (event: any) => void;
  gridArea: string;
};

export function FormInput({ id, name, type, value, onChange, placeholder, mask, autoComplete, action, handleAction, gridArea }: FormImputProps) {
  return (
    <Wrapper gridArea={gridArea}>
      <FlexLabel>
          {/* {label} */}
        {action && handleAction && <Action onClick={handleAction}>{action}</Action>}
      </FlexLabel>
      <Input
        id={id}
        name={name}
        type={type}
        value={mask ? masker(value, mask) : value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}

      />
    </Wrapper>
  );
}
