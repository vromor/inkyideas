import React from "react";
import styled, { keyframes, css } from "styled-components";

function Clients() {
  const row1 = [
    "http://www.inkyideas.in/wp-content/themes/xzen/img/logo/logo10.jpg",
    "http://www.inkyideas.in/wp-content/themes/xzen/img/logo/logo12.jpg",
    "http://www.inkyideas.in/wp-content/themes/xzen/img/logo/logo10.jpg",
    "http://www.inkyideas.in/wp-content/themes/xzen/img/logo/logo13.jpg",
    "http://www.inkyideas.in/wp-content/themes/xzen/img/logo/logo13.jpg",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
  ];

  const row2 = [
    "http://www.inkyideas.in/wp-content/themes/xzen/img/logo/logo13.jpg",
    "http://www.inkyideas.in/wp-content/themes/xzen/img/logo/logo10.jpg",
    "http://www.inkyideas.in/wp-content/themes/xzen/img/logo/logo10.jpg",
    "http://www.inkyideas.in/wp-content/themes/xzen/img/logo/logo10.jpg",
    "http://www.inkyideas.in/wp-content/themes/xzen/img/logo/logo12.jpg",
    "http://www.inkyideas.in/wp-content/themes/xzen/img/logo/logo12.jpg",
  ];

  return (
    <AppContainer>
      <Wrapper>
        <Text>We are Serving</Text>
        <Note>with great outcomes</Note>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default Clients;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: blue;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c9e0a;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  ${"" /* border:2px solid black; */}
  ${"" /* 1200 */}
  overflow: hidden;
  user-select: none;

  -webkit-mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 45s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -8s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  ${"" /* border: 1px solid black;  */}
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(98, 97, 98, 0.3) 0px 2px 8px 2px;
`;
