import styled from 'styled-components';
import Link from 'next/link'

const Home = () => {
  return (
    <div>
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
    <Link href='/courses'>Courses</Link>
    </div>
  )
}

export default Home;

