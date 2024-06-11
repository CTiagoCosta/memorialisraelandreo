import styled from 'styled-components';

type ImageProps = {
  width: string;
  height: string;
};

export const Image = styled.img<ImageProps>`
  height: ${({ height }) => height};
  margin: 15px 0px 0px 0px;
  border-radius: 110px;
  width: ${({ width }) => width};
`;
