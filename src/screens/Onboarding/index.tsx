import React, { useRef, useState } from 'react';
import { Animated, Dimensions, FlatList } from 'react-native';
import {
  Onboarding1,
  Onboarding2,
  Onboarding3,
  Onboarding4,
} from '../../assets';
import { Button, Slider } from '../../components';
import {
  Container,
  Dot,
  DotsBox,
  Footer,
  Main,
  SecondaryButton,
} from './styles';

export const OnboardingScreen = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const { width } = Dimensions.get('screen');
  const itemRef = useRef<FlatList>(null);
  const onboardingItems: OnboardingDataTypes[] = [
    {
      image: <Onboarding1 />,
      description:
        'Aqui você encontrará de forma bem rápida e fácil, quais são os principais filmes e séries do momento, evitando assim, aquela loooonga e muitas vezes cansativa busca por séries ou filmes pra assistir.\n\nNão sabe como? Vem que eu te explico.',
      buttonArrow: true,
      buttonAction: () => {
        setImageIndex(imageIndex + 1);
        itemRef.current?.scrollToIndex({
          animated: true,
          index: imageIndex + 1,
        });
      },
      buttonText: 'próximo',
      secondaryButton: true,
    },
    {
      image: <Onboarding2 />,
      description:
        'Primeiro, encontre a série ou filme que quer assistir.\nVocê pode encontrar pela busca, pelos top 10, ou pelo seu Streaming favorito.',
      buttonArrow: true,
      buttonAction: () => {
        setImageIndex(imageIndex + 1);
        itemRef.current?.scrollToIndex({
          animated: true,
          index: imageIndex + 1,
        });
      },
      buttonText: 'próximo',
      secondaryButton: true,
    },
    {
      image: <Onboarding3 />,
      description:
        'Na tela seguinte irá encontrar as informações referentes ao filme ou série escolhido, como sinopse do filme ou dos episódios da série e também em qual streaming ela(e) é transmitido.',
      buttonArrow: true,
      buttonAction: () => {
        setImageIndex(imageIndex + 1);
        itemRef.current?.scrollToIndex({
          animated: true,
          index: imageIndex + 1,
        });
      },
      buttonText: 'próximo',
      secondaryButton: true,
    },
    {
      image: <Onboarding4 />,
      description:
        'Com todas essas informações você pode por exemplo, clicar no seu streaming favorito e seguir pra assistir seu filme ou série escolhido(a).\n\nDivirta-se!!',
      buttonArrow: false,
      buttonAction: () => {},
      buttonText: 'ir pra home',
      secondaryButton: false,
    },
  ];

  return (
    <Container>
      <Main>
        <Animated.FlatList
          ref={itemRef}
          data={onboardingItems}
          pagingEnabled
          horizontal
          onMomentumScrollEnd={e => {
            let currentIndex = e.nativeEvent.contentOffset.x / width;
            setImageIndex(Math.round(currentIndex));
          }}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.description}
          windowSize={width}
          renderItem={({ item }) => (
            <Animated.View>
              <Slider description={item.description} image={item.image} />
            </Animated.View>
          )}
        />
      </Main>
      <Footer>
        <DotsBox>
          {onboardingItems?.map((_, i) =>
            i === imageIndex ? <Dot active /> : <Dot active={false} />,
          )}
        </DotsBox>
        {onboardingItems?.map((item, i) => {
          if (i === imageIndex) {
            return (
              <>
                <Button
                  text={item.buttonText}
                  arrow={item.buttonArrow}
                  onPress={item.buttonAction}
                />
                {item.secondaryButton && (
                  <SecondaryButton text="pular tutorial" onPress={() => {}} />
                )}
              </>
            );
          }
        })}
      </Footer>
    </Container>
  );
};
