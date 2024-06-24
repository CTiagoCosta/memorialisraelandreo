import styled from 'styled-components';
import { devices } from '../resorces/devices';

type ImageProps = {
  width: string;
  height: string;
};

export const Image = styled.img<ImageProps>`
  height: ${({ height }) => height};
  margin: 15px 0px 0px 20px;
  border-radius: 200px;
  width: ${({ width }) => width};
`;

export const Images = styled.img<ImageProps>`
  height: ${({ height }) => height};
  margin: 15px;
  border-radius: 10px;
  width: ${({ width }) => width};
`;

export const Img = styled.img<ImageProps>`
  height: 260px;
  margin: 15px 0px 0px 20px;
  border-radius: 200px;
  width: 260px;

  @media ${devices.laptop} {
    height: 590px;
    width: 640px;
  }
  
`;
