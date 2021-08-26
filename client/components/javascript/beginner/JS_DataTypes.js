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
/* Та дэлгүүрээс хүнсээ цуглуулж байна гэж бодьё.
   Таний зүүн гарын уутанд 2 банана харин баруун гарын сагсанд 10 алим байна.
*/
let уутанд = "2 банана";
let сагсанд = "10 алим";
document.write(sainuu); // Hello, World
`.trim();

const singleQuotes = `'Энэ бол single quoted string.'
"Харин энэ double quoted string."
// String-ийг хувьсагчид хадгалахдаа
let тайлбар = "Харин энэ double quoted string."`

const backSlash = `'That\\'s nice!' // бичихэд
'That's nice!'  // уншихад`

const num = `let тоо = 5;
let олонТоо = 5555555555555;
let нийлбэр = 5 + 5 // нийлбэр нь 10`

const bool = `let нарБаруунаасМанддаг = false;
let нарЗүүнээсМанддаг = true;`

const undef = `let үрДүнгүй; // хариу нь undefined`
const noll = `let хоосон = null; // хариу нь null`
const nan = `let тооБиш = 1 * 'нэгийг үржүүлэх нь өгүүлбэр' ; // хариу нь NaN`

const obj = `let хоосонСагс = {};

let сагсанд = {
  банана: 2,
  алим: 10
}`

const JS_DataTypes = () => {
  return (
    <LessonStyles>
      <h2>Коммент, Хувьсагч болон Өгөгдлийн төрлүүд</h2>
      <h4>Энэ хичээлээр:</h4>
      <ul>
        <li>Komment - Kод коммент бичих</li>
        <li>Variables - Хувьсагчын талаар товчхон</li>
        <li>Data types - Өгөгдөл болон түүний төрлүүд</li>
        <li>Үр дүнг харуулах</li>
        <li>Output - Үр дүнг харуулах</li>
      </ul>

      <h4>Коммент</h4>
      <p>Бичсэн кодоо тайлбарлахын тулд тэмдэглэл болгон коммент бичиж үлдээдэг.</p>
      <li>Нэг мөрөнд коммент бичихэд <mark>/ /</mark> тэмдгийн араас залгуулаад тайлбараа бичнэ.</li>
      <li>Олон мөрөнд коммент Бичихдээ <mark>/ *, * /</mark> тэмдгийг ашиглах бөгөөд дунд нь тайлбараа бичнэ.</li>
      <BlogCodeBlock code={commentCode} language="js" />

      <h4>Хувьсагч</h4>
      <p>
        Хувьсагч буюу <mark>variable</mark> нь аливаа мэдээллийг хадгалах сав юм.
        Хувьсагчийг тодорхойлохдоо <mark>let</mark> түлхүүр үгийг хувьсагчийн нэрний өмнө бичдэг.
         Өмнөх хичээл дээрх <Link href='https://codepen.io/Munkhtegsh/pen/xxdLBry'>"Hello, World"</Link> программийг хувьсагч ашиглан бичицгээе.
         {/* Нийт 3 төрлийн түлхүүр үг байдаг. */}
      </p>
      <BlogCodeBlock code={hwExample1} language="js" />

      <h4>Өгөгдлийн төрлүүд</h4>
      Өгөгдөл буюу <mark>data</mark> нь нийт 8 төрлөөс бүрддэг ба дотор нь <b>Primitive</b> болон <b>Object</b> гэж хоёр ангилдаг.
      <li>Primitive ангилалд <i>string, number, BigInt, Boolean, undefined, null</i> багтана.</li>
      <li>Бусад нь бүгд Object.</li>
      <h5>Strings</h5>
      <p>Үг болон өгүүлбэрийг string гэж нэрлэдэг. Бичихдээ доорх 3 төрлийн тэмдгийн аль нэгийг ашиглана.</p>
      <blockquote>
      <li>Single quotes <mark>'</mark></li>
      <li>Double quotes <mark>''</mark></li>
      <li>Backtick <mark>`</mark></li>
      </blockquote>
      <p>Эхлэл болон төгсгөлийн тэмдэг нь заавал ижилхан байх ёстой. Жишээ нь: </p>
      <BlogCodeBlock code={singleQuotes} language="js" />

      <p>Хэрвээ string дотор ямар нэгэн тэмдэг бичих бол backslash <mark>\</mark> тэмдэгээр алгасна.</p>
      <BlogCodeBlock code={backSlash} language="js" />

      <h5>Number</h5>
      <p>15 хүртэлх оронтой тоон утгуудыг Number гэдэг.</p>
      <blockquote>
      <li>Тоог бутархай эсвэл бүхлээр бичиж болно.</li>
      <li>Бутархай тоо бичихдээ таслал биш цэг ашиглана.</li>
      <li>Математикийн үйлдлүүдийн үр дүн нь Number байх болно.</li>
      </blockquote>
      <BlogCodeBlock code={num} language="js" />

      <h5>NaN</h5>
      <p>NaN гэдэг нь тоон утга боловч тоо биш гэсэн утгыг агуулдаг. Ихэвчлэн математик үйлдлийг тооноос бусад төрлийн мэдээлэл дээр ашиглахад гардаг.</p>
      <BlogCodeBlock code={nan} language="js" />

      <h5>Boolean</h5>
      <p>Boolean нь true (үнэн) эсвэл false (худал) гэсэн хоёр үр дүнгийн аль нэгийг л илэрхийлнэ.</p>
      <BlogCodeBlock code={bool} language="js" />

      <h5>Undefined</h5>
      <p>Undefined гэдэг нь "no values". Аливаа хувьсагч нь ямарч утга өгөөгүй тохиолдолд үр дүн нь <mark>undefined</mark>.</p>
      <BlogCodeBlock code={undef} language="js" />

      <h5>Null</h5>
      <p>Null гэдэг нь "no object". Хувьсагчид утга заасанч хоосон гэдгийг илэрхийлнэ.</p>
      <BlogCodeBlock code={noll} language="js" />

      <h5>Object</h5>
      <p>{"{key:value}"} буюу {"{түлхүүр:дүн}"} хоёрын цуглуулыг object гэнэ. Оbject доторх мэдээлэл нь <mark>{"{ }"}</mark> тэмдгээр хүрээлэгдэнэ.
      Үүнээс гадна object нь өөртөө property болон method агуулдаг. </p>
      <BlogCodeBlock code={obj} language="js" />



    </LessonStyles>
  )
}

export default JS_DataTypes;