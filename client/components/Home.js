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
  display: flex;
  justify-content: center;
  min-width: 100%;
  display: block;
  margin: 0 auto;
  width: 80%;
  position: relative;
  background: green;
`

const LaptopImgContainer = styled.div`

  position: relative;
  background: red;
  width: 100%;
  height: 100%;
  /* z-index: 1; */
`

const CodeImgContainer = styled.div`
  /* display: flex;
  justify-content: center; */
  /* min-width: 100%; */
  position: absolute;
  background: yellow;

  top: 34px;
  width: 100%;
  height: 200px;
  /* z-index: 2; */

  /* left: 89px; */
`

const Home = () => {
  return (
    <Main>
      <Section>
        <Title>Practice makes progress</Title>
        <Text>Lessonly’s enablement software ey’s enablement software empower teams to hone their skills and get up to speed 2.3x faster.</Text>
      </Section>

      <ImageContainer>
        <LaptopImgContainer>
          <Image src="/laptop.png" alt="laptop image" width="600" height="460"  />
        </LaptopImgContainer>
        <CodeImgContainer>
          <Image src="/code.png" alt="code image" width="500" height="360" />
        </CodeImgContainer>
        {/* <Video hashedId="1nt2z6a4w2" /> */}
      </ImageContainer>
    <Link href='/courses'>Courses</Link>
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