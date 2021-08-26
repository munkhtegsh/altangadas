import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import Code from 'next/image'
import Video from './Video'
const Main = styled.div`

`

const Title = styled.h1`
  margin: 0px;
  font-size: 4rem;
  line-height: 50px;
  text-align: center;
  font-weight: 550;
  margin-bottom: 1.5rem;
  color: #292933;
`

const Text = styled.p`
  margin: 15px 100px;
  /* font-size: 4rem; */
  /* line-height: 90px; */
  /* text-align: center; */
  font-size: 1.7rem;
  line-height: 26px;
  font-weight: 400;
  color: #464656;
`

const Section = styled.div`
  display: block;
  max-width: 600px;
  text-align: center;
  margin: 5rem auto 50px;
  box-sizing: border-box;
`

const ImageContainer = styled.div`
  display: block;
  margin: 0 auto;
  position: relative;
  width: 881px;
  max-width: 100%;
  z-index: 0;
  /* background: green; */
  width: 100%;
  max-width: 100%;
`

const HeroScreen = styled.div`
    display: flex;
    justify-content: center;
    width: 86.2%;
    max-width: 86.2%;
    position: relative;
    left: 8.2%;
    top: 4.5%;
    z-index: -1;
    /* background: blue; */
    box-sizing: border-box;
`

const LaptopImgContainer = styled.div`
  /* background: red; */
  text-align: center;
  vertical-align: middle;
  border-style: none;
`

const CodeImgContainer = styled.div`
  position: absolute;
  /* background: yellow; */
  width: 100%;
  text-align: center;
  /* top: 25px; */
  top: 5%;
  padding: 0 12%;



`

const Home = () => {
  return (
    <Main>
      <Section>
        <Title>Practice makes progress</Title>
        <Text>Altangadas enablement software ey’s enablement software empower teams to hone their skills and get up to speed 2.3x faster.</Text>
      </Section>

      <ImageContainer>
        <HeroScreen>
          <CodeImgContainer>
            <Image src="/code.png" alt="code image" width="630" height="400"/>
          </CodeImgContainer>
          {/* <Video hashedId="1nt2z6a4w2" /> */}
          <LaptopImgContainer>
            <Image src="/laptop.png" alt="laptop image" width="850" height="600"  />
          </LaptopImgContainer>
        </HeroScreen>
      </ImageContainer>
    </Main>
  )
}

export default Home;

      {/* <BoxContainer>
        <TitleCardStyles>
        Компютер тохиргоо
        </TitleCardStyles>
        <TitleCardStyles>
          Terminal ашиглах
        </TitleCardStyles>
        <TitleCardStyles>
          GIT зааварчилгаа
        </TitleCardStyles>
        <TitleCardStyles>
          HTML хичээл
        </TitleCardStyles>
        <TitleCardStyles>
          CSS хичээл
        </TitleCardStyles>
        <TitleCardStyles>
          JavaScript хичээл
        </TitleCardStyles>
        <TitleCardStyles>
          React хичээл
        </TitleCardStyles>
        <TitleCardStyles>
          NodeJS хичээл
        </TitleCardStyles>
        <TitleCardStyles>
          PostgreSQL дата бааз
        </TitleCardStyles>
      </BoxContainer> */}