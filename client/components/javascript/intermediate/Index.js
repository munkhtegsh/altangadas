import { LessonsStyles, Accordians, LessonTitleStyles, List, ListItem } from '../../styles/LessonsStyles';
import { useState, useRef  } from 'react';
import Link from 'next/link';


const Card = ({ data }) => {
  const [toggle, setToggle] = useState("open");
  const [height, setHeight] = useState('');
  const elementRef = useRef(null);

  const toggleHandler = function(e) {
    setToggle(toggle === 'open' ? "close" : "open");
    setHeight(toggle === 'open' ? `${elementRef.current.clientHeight}px` : "0px");
  }

  return (
    <div>
     <LessonTitleStyles onClick={toggleHandler}> {data.title} </LessonTitleStyles>
     <List ref={elementRef} toggle={toggle} height={height}>
         { data.subTitles.map((title, i) => {
           return (
             <ListItem key={i}>
               <Link href={title.url}>
               1 {title.subTitle}
               </Link>
             </ListItem>
           )
         })}
     </List>
    </div>
  )
}

const IntermediateJSTitles = () => {
  return (
    <LessonsStyles>
      <h2>JavaScript дунд шатны хичээл</h2>
      <p>Манай сургууль хагас цэрэгжилттэй дунд сургууль гэж явдаг. Сургуулийн зорилго маань сурагчиддаа цэргийн мэдлэгтэй, үүрэг хариуцлагаа ухамсарладаг, биеэ даасан, мөн бусдыг ойлгож хүндэтгэдэг, ах захаа хүндэлдэг хүн болгох гэж би ойлгодог. Ер нь бол сургуулийн казарамд байрлаж ерөнхий боловсролын хичээлүүдээс гадна биеийн тамир бэлтгэл сургуулилтын хичээлүүд ордог. Мөн яг л цэрэг хүний жагсаалын парад, өглөө оройн тоонд жагсах, ёслол хүндэтгэлийн байдал, ороо дэвхийтэл хураах, өглөө бүр тугаа мандуулж орой бүр буулгах гэх зэргээр цэргийн амьдралын жишгээр өдөр хоног үргэлжилдэг. </p>
      <Accordians> { IntermediateJSTitleList.map((data, i) => <Card data={data} key={i} />) } </Accordians>
    </LessonsStyles>
  )
}

export default IntermediateJSTitles;

const IntermediateJSTitleList = [
  {
    'title': 'JavaScript Introduction',
    'subTitles': [
      {
        'subTitle': '1 JavaScript History and Setup',
        'url': '/JSBriefBackgroundInfo'
      },
      {
        'subTitle': 'Variables and Primitives',
        'url': '/hello'
      },
      {
        'subTitle': 'Boolean Logic',
        'url': '/hello'
      },
      {
        'subTitle': 'Boolean Logic Exercises',
        'url': '/hello'
      },
    ]
  },
  {
    'title': 'JavaScript Intro 2',
    'subTitles': [
      {
        'subTitle': 'This is subtitle2',
        'url': '/hello'
      },
      {
        'subTitle': 'This is subtitle',
        'url': '/hello'
      },
      {
        'subTitle': 'This is subtitle',
        'url': '/hello'
      },
    ]
  },
  {
    'title': 'JavaScript Intro 2',
    'subTitles': [
      {
        'subTitle': 'This is subtitle2',
        'url': '/hello'
      },
      {
        'subTitle': 'This is subtitle',
        'url': '/hello'
      },
      {
        'subTitle': 'This is subtitle',
        'url': '/hello'
      },
    ]
  },

]