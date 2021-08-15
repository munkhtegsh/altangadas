import styled, { css } from 'styled-components';

export const LessonsStyles = styled.div`
  h2 {
    text-align: center;
  }

  p {
    color: var(--main-text-color);
    font-size: 1.6rem;
  }
`

export const Accordians = styled.div`
   border-radius: 5px;
   margin: 4rem 0;
`

export const LessonTitleStyles = styled.div`
  display: flex;
  height: 5rem;
  padding-left: 3rem;
  align-items: center;
  font-weight: 700;
  color: var(--lightBlack);
  text-transform: uppercase;
  font-size: 1.6rem;
  letter-spacing: 2px;
  /* background: linear-gradient(45deg, rgba(234, 67,53,1), #9198e5); */
  background: var(--skyBlue);
  box-shadow: rgba(17, 17, 26, 0.3) 0px 4px 16px, rgba(17, 17, 26, 0.3) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  cursor: pointer;
  transition: all 0.25s ease;
  `

export const List = styled.ul`
  margin: 0;
  padding-left: 0;
  max-height: ${({ toggle, height }) => toggle === 'open' ? '218px' : '0px'};
  background-color: #fff;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;  overflow: hidden;
    transition: transform 2s ease-out;
  margin-bottom: 4rem;
 `;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem;
  border-top: 1px solid #e1e1e1;
  :hover {
    color: var(--hoverBlue);
    transition: box-shadow 0.1s ease-in-out;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    text-decoration: none;
    overflow: hidden;
   }

   a {
     text-decoration: none;
   }
`


