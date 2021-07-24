import styled from 'styled-components';

const TitleCardStyles = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 0 1px 10px 0 rgb(0 0 0 / 6%);
  border: 1px solid #E3E3E3;
  color: inherit;
  border-radius: 4px;
  white-space: pre-line;
  font-style: normal;
  color: var(--main-text-color);
  text-decoration: none;
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
  margin: 0.5rem 2rem 0.5rem 0;
  padding: 3rem;
  margin-bottom: 0.5rem;
  background: white;
  width: 15rem;
  height: 8rem;
  border-radius:40%;
    /* -moz-border-radius:50%;
    -webkit-border-radius:50% */

  a, a:hover, a:focus, a:active, a.active {
    outline: none;
  }

  :hover {
    background: var(--lightGray);
  }
  /* transform: translateX(100%);
  transition: all 0.3s; */
  /* box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2); */
  /* grid-template-rows: auto 1fr auto; */
  /* ${(props) => {
    console.log("BRA: ", props.open)
    return props.open && `transform: translateX(0);`
  }}; */
`;

export default TitleCardStyles;
