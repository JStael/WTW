import React, { FC } from 'react';
import { Container, ImageBox, DescriptionBox, Description } from './styles';

interface ISlider {
  description: string;
  image: JSX.Element;
}

export const Slider: FC<ISlider> = ({ description, image }) => {
  return (
    <Container>
      <ImageBox>{image}</ImageBox>
      <DescriptionBox>
        <Description>{description}</Description>
      </DescriptionBox>
    </Container>
  );
};
