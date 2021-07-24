import { LessonStyles, BlogCodeBlock } from '../../styles/LessonStyles';
import Link from 'next/link';

const commentCode = `
   // Энэ бол нэг мөр коммент.

/*
   Харин энэ олон мөр коммент.
   Харин энэ олон мөр коммент.
   Харин энэ олон мөр коммент.
*/
`.trim();

const hwExample1 = `
let sainuu = "Hello, World";
document.write(sainuu); // Hello, World
`.trim();


const JS_DataTypes = () => {
  return (
    <LessonStyles>
      <h2>JavaScript Коммент, Хувьсагч болон Өгөгдлийн төрлүүд</h2>
      <h4>Энэ хичээл дараах зүйлсийг сурна:</h4>
      <ul>
        <li>Komment - JavaScript коммент бичих</li>
        <li>Variables - Хувьсагчын талаар товчхон</li>
        <li>Data types - Өгөгдөл болон түүний төрлүүд</li>
        <li>Үр дүнг харуулах</li>
        <li>Output - Үр дүнг харуулах</li>
      </ul>

      <h4>Коммент</h4>
      <p>Бичсэн кодоо тайлбарлахын тулд тэмдэглэл болгон коммент бичиж үлдээдэг.</p>
      <ul>
        <li><strong>Нэг мөрөнд коммент</strong> бичихэд <mark>/ /</mark> тэмдгийн араас залгуулаад тайлбараа бичнэ.</li>
        <li><strong>Олон мөрөнд коммент бичихэд</strong> <mark>/ *, * /</mark> тэмдгийг ашиглах бөгөөд дунд нь тайлбараа бичнэ.</li>
      </ul>
      <BlogCodeBlock code={commentCode} language="js" />

      <h4>Хувьсагч</h4>
      <p>Өгөгдсөн мэдээллийг хадгалахын тулд хувьсагч ашигладаг бөгөөд тодорхойлохдоо <mark>let</mark> түлхүүр үгийг хувьсагчийн нэрний өмнө бичиж өгдөг.
         Өмнөх хичээл дээрх <Link href='https://codepen.io/Munkhtegsh/pen/xxdLBry'>"Hello, World"</Link> программийг хувьсагч ашиглан бичицгээе.
         {/* Нийт 3 төрлийн түлхүүр үг байдаг. */}
      </p>
      <BlogCodeBlock code={hwExample1} language="js" />
  
    </LessonStyles>
  )
}

export default JS_DataTypes;