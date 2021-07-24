import { LessonStyles, BlogCodeBlock } from '../../styles/LessonStyles';
import Link from 'next/link';
import { useRouter, Router } from 'next/router'

const helloWorldCode = `
  alert('Hello World!);
`.trim();

const JSDefinition = () => {
  const router = useRouter();

  return (
    <LessonStyles>
      <h2>JavaScript хэлний талаар товч мэдээлэл</h2>
      <h4>Энэ хичээлээр дараах мэдлэгийг олж авна</h4>
      <ul>
        <li>JavaScript хэлний тухай</li>
        <li>Уг хэлний үүсэл хөгжил</li>
        <li>Хичээлд хэрэглэгдэх зайлшгүй тохиргоо</li>
        <li>Хамгийн анхны "Hello, World!" код бичих</li>
      </ul>
      <h4>JavaScript хэлний тодорхойлолт</h4>
      <p>Javascript (JS) нь хэрэглэгчийг вэбсайттай харилцах боломжийг олгодог програмийн хэл.
         Ихэвчлэн вэб хуудас хийхэд хэрэглэдэг байсан бол сүүлийн жилүүдэд гар утасны аппликэйшн, тоглоом болон сервэр хөргүүлэхэд ашиглаж байна.
      </p>
      <h4>Уг хэлний үүсэл</h4>
      <p>Javascript хэлийг Brendan Erich гэдэг инжинер 1995 онд Netscape Communications Corporation -д ажиллаж байхдаа зохиожээ.
         Анхандаа Mocha гэж нэрлэсэнч маркетингийн зорилгоор LiveScript болгож өөрчилжээ. Хэдхэн сарын дараа нэрийг нь өөрчилж JavaScript болгосон байна.
      </p>
      {/* <h4>Хөгжүүлэлтийн явцад гарсан томоохон үйл явдлууд</h4> */}
      {/* <p></p> */}
      <h4>Хичээлд хэрэглэгдэх тохиргоо</h4>

      <p>JavaScript нь <mark>client-side</mark> програмийн хэл. Юу гэсэн үг гэвэл JavaScript кодийг ямар нэг нэмэлт програм татаж авалгүйгээр вэб браузер (Safari, Chrome, FireFox) дээр уншуулж болно.
         Бид хичээлдээрээ Google Chrome ашиглана. Учир нь хамгийн өргөн хэрэглэгддэг бас хөгжүүлэлт хийхэд тохиромжтой.
      </p>

      <p>
        Эссэ бичихэд MS Word хэрэгцээтэй шиг код бичихэд <mark>code editor</mark> (код эдитор) програм зайлшгүй шаардлагатай.
        Гэвч одоохондоо бид дадлагаа <Link href="http://codepen.io">CodePen</Link> онлайн эдитор ашиглан хийх болно.
      </p>

      <h4>"Hello, World!" програм</h4>
      <p>Одоо хамгийн анхны кодоо Chrom Browser дээр суурилсан Console ашиглан бичицгээе.
         Үүнийг нээхдээ маузны баруун товч дээр дараад Inspect сонгохоор цонх нээгдэнэ. Дараа нь Console гэсэн хэсгийг сонгоорой.
         Өөрөөр товч ашиглан нээж бас болно. Мас дээр <mark>Option + Command + j</mark>, Windows дээр <mark>Control + Shift + J.</mark>
      </p>
      <p>Доорх кодыг Console дотор бичээд Enter дараарай. Браузер дээр "Hello World" гэсэн цонх нээгдсэн бол таньд баяр хүргэе! Та хамгийн анхны кодоо бичлээ 🎉</p>
      <BlogCodeBlock code={helloWorldCode} language="js" />
      <blockquote>
        <p>Харин одоо онлайн эдитор ашиглацгаая. <Link href="https://codepen.io">Энд дараад </Link>CodePen нээгдэхээр зүүн дээд буланд <mark>Start Coding</mark> сонгоод JS гэсэн хоосон хэсэгт кодоо бичээрэй.
        </p>
      </blockquote>
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