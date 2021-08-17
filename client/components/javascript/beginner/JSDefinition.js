import { LessonStyles, BlogCodeBlock } from '../../styles/LessonStyles';
import Link from 'next/link';
import { useRouter, Router } from 'next/router'

const helloWorldCode = `
  alert('Hello World!');
`.trim();

const JSDefinition = () => {
  const router = useRouter();

  return (
    <LessonStyles>
      <h2>JavaScript хэлний талаар товчхон</h2>
      <h4>Энэ хичээлээр:</h4>
      <ul>
        <li>JavaScript хэлний тухай</li>
        <li>Уг хэлний үүсэл хөгжил</li>
        <li>Хичээлд хэрэглэгдэх зүйлс</li>
        <li>"Hello, World!" програм бичиж сурах болно</li>
      </ul>
      <h4>JavaScript хэлний тодорхойлолт</h4>
      <p>Javascript (JS) нь хэрэглэгчийг вэбсайттай харьцахад ашиглагддаг програмийн хэл юм.
         Өмнө нь зөвхөн вэб хуудас хийхэд хэрэглэдэг байсан бол сүүлийн жилүүдэд гар утасны аппликэйшн, тоглоом болон сервэр хөгжүүлэхэд ашиглаж байна.
      </p>
      <h4>Уг хэлний гарал үүсэл</h4>
      <p>Анх 1995 онд Netscape Communications Corporation-ийн инжинер Brendan Erich 10 хоногт багтаан JavaScript хэлийг зохиосон.
         Эхлээд Mocha гэж нэрлэсэнч маркетингийн зорилгоор LiveScript болгож өөрчилсөн байна. Төд удалгүй хэдхэн сарын дараа дахин нэрийг нь өөрчилж JavaScript болгосон байна.
      </p>
      {/* <h4>Хөгжүүлэлтийн явцад гарсан томоохон үйл явдлууд</h4> */}
      {/* <p></p> */}
      <h4>Хичээлд хэрэглэгдэх зүйлс</h4>
      <p>JavaScript нь <mark>client-side</mark> програмийн хэл. Тэхээр JavaScript кодийг ямар нэг нэмэлт програм татаж авалгүйгээр зөвхөн вэб браузер (Safari, Chrome, FireFox) дээр ажиллуулж болно.
         Ямар броузер ашиглах нь таний сонголт боловч бид хичээлдээ Google Chrome ашиглах болно. Учир нь хамгийн өргөн хэрэглэгддэг бас хөгжүүлэлт хийхэд тохиромжтой.
      </p>
      <p>
        Код бичихэд <mark>code editor</mark> програм зайлшгүй шаардлагатай.
        Гэвч одоохондоо бид дадлагаа <Link href="http://codepen.io">CodePen</Link> онлайн код эдитор ашиглан хийх болно.
      </p>
      <blockquote>
        <li> <Link href="https://www.google.com/chrome/">Google Chrome татаж авах</Link></li>
        <li> <Link href="https://codepen.io">CodePen</Link></li>
        <p></p>
      </blockquote>

      <h4>"Hello, World!" програм</h4>
      <p>Одоо хамгийн анхны кодоо Chrome Browser дээр Console ашиглан бичицгээе.
         Үүнийг нээхдээ маузны баруун товч дээр дараад Inspect сонгохоор цонх нээгдэнэ.
         (Өөрөөр товч ашиглан нээж бас болно. Мас дээр <mark>Option + Command + j</mark>, Windows дээр <mark>Control + Shift + J</mark>).
         Дараа нь Console гэсэн хэсгийг сонгоод доорх кодыг Console дотор бичээд Enter дараарай.</p>
      <BlogCodeBlock code={helloWorldCode} language="js" />
       <p>Браузер дээр "Hello World" гэсэн цонх нээгдсэн бол таньд баяр хүргэе 🎉</p>
        <p>Харин одоо онлайн эдитор ашиглацгаая. <Link href="https://codepen.io">Энд дараад </Link>CodePen нээгдэхээр зүүн дээд буланд <mark>Start Coding</mark> сонгоод JS гэсэн хоосон хэсэгт кодоо бичээрэй.
        </p>
       <button onClick={() => router.back()}>
         Өмнөх хуудас
       </button>

      <Link href="/courses/lessons/js-datatypes">
        <button>
          Дараах хуудас
        </button>
      </Link>
    </LessonStyles>
  )
}

export default JSDefinition;