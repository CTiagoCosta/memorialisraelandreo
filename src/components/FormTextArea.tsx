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
  overflow: hidden;
  padding: 10px 0px;
  width: 100%;
`;

const TextArea = styled.textarea`
  border: 2px solid gray;
  border-radius: 4px;
  color: gray;
  font-size: 1.6rem;
  margin: 0px;
  outline: none;
  padding: 10px 20px;
  resize: vertical;
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
  rows: number;
  value: string;
  onChange: (event: any) => Promise<void>;
  onBlur?: (event: any) => Promise<void>;
  onKeyUp?: (event: any) => Promise<void>;
  placeholder: string;
  autoComplete: string;
  maxLength: number;
  required?: boolean;
  disabled?: boolean;
  action?: string;
  handleAction?: (event: any) => void;
  gridArea: string;
};

export function FormTextArea({ id, name, rows, value, onChange, onBlur, onKeyUp, placeholder, autoComplete, maxLength, disabled, action, handleAction, gridArea }: FormImputProps) {
  return (
    <Wrapper gridArea={gridArea}>
      <FlexLabel>
        
        {action && handleAction && <Action onClick={handleAction}>{action}</Action>}
      </FlexLabel>
      <TextArea
        id={id}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyUp = {onKeyUp}
        placeholder={placeholder}
        autoComplete={autoComplete}
        disabled={disabled}
        maxLength={maxLength}
      />
    </Wrapper>
  );
}
