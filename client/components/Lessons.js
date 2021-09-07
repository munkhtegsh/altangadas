import { LessonsStyles, Accordians, LessonTitleStyles, List, ListItem } from '../components/styles/LessonsStyles';
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
                {title.subTitle}
               </Link>
             </ListItem>
           )
         })}
     </List>
    </div>
  )
}

const Lessons = ({ data, title, description }) => {
  return (
    <LessonsStyles>
      <h2>{title}</h2>
      <p>{description}</p>
      <Accordians> { data.map((data, i) => <Card data={data} key={i} />) } </Accordians>
    </LessonsStyles>
  )
}

export default Lessons;

