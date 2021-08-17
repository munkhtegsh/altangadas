import styled from 'styled-components';
import Link from 'next/link'
import TitleCardStyles from './styles/TitleCardStyles';

const SectionBlock = styled.div`
  display: flex;
  height: 5rem;
  align-items: center;
  font-weight: 700;
  color: var(--lightBlack);
  text-transform: uppercase;
  font-size: 1.6rem;
  letter-spacing: 1.6px;
  /* background: linear-gradient(45deg, rgba(234, 67,53,1), #9198e5); */
  background: var(--skyBlue);
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.3) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  cursor: pointer;
  transition: all 0.25s ease;
`

const DetailBlock = styled.div`
  /* width: calc((var(--maxWidth) - 100px) / 3); */
  box-shadow: 0px 0px 2px 0px rgba(24, 24, 24, 0.08),0px 2px 4px 1px rgba(24, 24, 24, 0.16);
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
  font-stretch: normal;
  font-size: 1.6rem;
  line-height: 25px;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  padding: 3rem;
  margin-bottom: 0.5rem;
  background: white;

  h3 {
    margin-top: 0;
  }

  :hover {
    /* background: linear-gradient(45deg, white, #DFDEF4); */
    /* background: var(--starLight); */
     /* --dx-g-card-padding: 20px; */
      color: var(--hoverBlue);
      transition: box-shadow 0.3s ease-in-out;
      /* box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px; */
      box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
      text-decoration: none;
      overflow: hidden;
  }

  hr {
    display: block;
    unicode-bidi: isolate;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    overflow: hidden;
    color: red;
    background: red;
  }
`

const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc((var(--maxWidth) - 80px) / 3), 1fr));
  grid-auto-rows: minmax(100px, auto);
  gap: 20px;
  grid-gap: 20px;
  margin-bottom: 4rem;
`

const Course = ({ title, lessons}) => {
  const courseLessons = lessons.map((lesson, i) => {
    return (
      <Link key={i} href={lesson.path} passHref>
        <DetailBlock>
          <h3>{lesson.subTitle}</h3>
          <p>{lesson.description}</p>
          <hr/>
          {lesson.subTitles.map((title, i) => <li key={i}>{title}</li>)}
        </DetailBlock>
      </Link>
    )
  });

  return (
    <>
      <SectionBlock>
        { title }
      </SectionBlock>
      <DetailContainer>
        { courseLessons }
      </DetailContainer>
    </>
  )
}

const Courses = () => {
  return data.map((course, i) =>
      <Course key={i} title={course.title} lessons={course.lessons} />
  );
}

export default Courses;

const data = [
  /* Terminal */
  {
    title: 'Terminal ашиглах',
    lessons: [
      {
        subTitle: 'Terminal анхан шат',
        path: '',
        description: 'Уг хэлний бүтэцтэй танилцаж, код бичихэд шаардлагатай анхны шатны мэдлэг олж авах',
        subTitles: [
          'Хувьсагч болон төрлүүд',
          'Шууд утгууд',
          'Лист болон Обжект',
          'Өгөгдийг давтах',
          'Функц',
        ]
      },
      {
        subTitle: 'Terminal dund шат',
        path: '',
        description: 'Уг хэлний бүтэцтэй танилцаж, код бичихэд шаардлагатай анхны шатны мэдлэг олж авах',
        subTitles: [
          'Хувьсагч болон төрлүүд',
          'Шууд утгууд',
          'Лист болон Обжект',
          'Өгөгдийг давтах',
          'Функц',
        ]
      },
      {
        subTitle: 'Terminal gunzgii шат',
        path: '',
        description: 'Уг хэлний бүтэцтэй танилцаж, код бичихэд шаардлагатай анхны шатны мэдлэг олж авах',
        subTitles: [
          'Хувьсагч болон төрлүүд',
          'Шууд утгууд',
          'Лист болон Обжект',
          'Өгөгдийг давтах',
          'Функц',
        ]
      },
    ]
  },
  /* JavaScript */
  {
    title: 'JavaScript хичээл',
    lessons: [
      {
        subTitle: 'JavaScript анхан шат',
        path: '/courses/beginnerjs',
        description: 'Уг хэлний бүтэцтэй танилцаж, код бичихэд шаардлагатай анхны шатны мэдлэг олж авах',
        subTitles: [
          'Коммент бичих',
          'Хувьсагчийн тухай',
          'Өгөгдлийн утгууд',
          'Лист болон Обжект',
          'Өгөгдлийг давтах',
          'Код бичих дүрэм'
        ]
      },
      {
        subTitle: 'JavaScript дунд шат',
        path: '/courses/intermediatejs',
        description: 'Уг хэлний бүтэцтэй танилцаж, код бичихэд шаардлагатай анхны шатны мэдлэг олж авах',
        subTitles: [
          'Лист дээр ажиллах',
          'Обжект дээр ажиллах',
          'Функц',
          'Шууд дуудагдах функц',
          'Хамрах хүрээ',
          'Шууд утгууд',
        ]
      },
      {
        subTitle: 'JavaScript гүнзгий шат',
        path: '/courses/advancedjs',
        description: 'Уг хэлний бүтэцтэй танилцаж, код бичихэд шаардлагатай анхны шатны мэдлэг олж авах',
        subTitles: [
          'Хувьсагч болон төрлүүд',
          'Шууд утгууд',
          'Лист болон Обжект',
          'Өгөгдийг давтах',
          'Функц',
        ]
      },
    ]
  },
]

