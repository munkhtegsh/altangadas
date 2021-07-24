import Lessons from '../../Lessons';

const BeginnerJSTitles = () => {
  return (
    <Lessons
      data={BeginnerJSTitleList}
      title="JavaScript анхан шатны хичээл"
      description="Манай сургууль хагас цэрэгжилттэй дунд сургууль гэж явдаг. Сургуулийн зорилго маань сурагчиддаа цэргийн мэдлэгтэй, үүрэг хариуцлагаа ухамсарладаг, биеэ даасан, мөн бусдыг ойлгож хүндэтгэдэг, ах захаа хүндэлдэг хүн болгох гэж би ойлгодог. Ер нь бол сургуулийн казарамд байрлаж ерөнхий боловсролын хичээлүүдээс гадна биеийн тамир бэлтгэл сургуулилтын хичээлүүд ордог. Мөн яг л цэрэг хүний жагсаалын парад, өглөө оройн тоонд жагсах, ёслол хүндэтгэлийн байдал, ороо дэвхийтэл хураах, өглөө бүр тугаа мандуулж орой бүр буулгах гэх зэргээр цэргийн амьдралын жишгээр өдөр хоног үргэлжилдэг. "
    />
  )
}

export default BeginnerJSTitles;

const BeginnerJSTitleList = [
  {
    'title': 'JavaScript Introduction',
    'subTitles': [
      {
        'subTitle': 'JavaScript хэлний талаар товч мэдээлэл',
        'url': '/courses/lessons/jsdefinition'
      },
      {
        'subTitle': 'Код коммент, хувьсагч болон өгөгдлийн төрлүүд',
        'url': '/courses/lessons/js-datatypes'
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