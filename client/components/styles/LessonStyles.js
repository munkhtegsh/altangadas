import styled from 'styled-components';
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import PropTypes from 'prop-types';

export const LessonStyles = styled.div`
  h2 {
    text-align: center;
  }

  h4 {
    font-weight: 600;
    font-size: 2rem;
    letter-spacing: 0.2px;
    margin: 2.5rem 0 1.5rem 0;
    overflow-wrap: break-word;
    border-bottom: 1px solid var(--gray);
  }

  h5 {
    font-weight: 600;
    font-size: 1.8rem;
    letter-spacing: 0.2px;
    margin: 1.5rem 0 0;
    overflow-wrap: break-word;
  }

  p {
    margin-top: 0;
    color: var(--main-text-color);
    font-size: 1.6rem;
  }

  mark {
    background: #fbcc35;
    border-width:0.5em;
    border-color:lightgreen;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 0 5px;
    border: 1px solid rgba(0,0,0,.05);
  }

  blockquote {
    border-left: 4px solid var(--purple);
    padding-left: 2rem;
    margin: 0 0 1rem 0;
    background-color: #f5f5f5;
  }

  a {
    padding-bottom: 0.5rem;
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    transition: background-size 0.25s ease-in;
    &:hover {
      background-size: 100% 88%;
    }
  }


`

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
  line-height: 2.2rem;
  border-radius: 5px;
`;

const Line = styled.div`
  display: block;
  :hover {
    border-top: 1px dotted springgreen;
    border-bottom: 1px dotted springgreen;
    transition: padding 100ms ease-in-out 0s;
  }
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
  width: 100%;
  :hover {
    padding: 4px 0px;
    background-color: darkmagenta;
    font-size: 1.8rem;
  }
`;

export const BlogCodeBlock = ({ code, language }) => (
  <Highlight {...defaultProps} theme={theme} code={code} language={language}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre className={className} style={style}>
        {tokens.map((line, i) => (
          <Line key={i} {...getLineProps({ line, key: i })}>
            <LineNo>{i + 1}</LineNo>
            <LineContent>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </LineContent>
          </Line>
        ))}
      </Pre>
    )}
  </Highlight>
);

BlogCodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string
};

BlogCodeBlock.defaultProps = {
  language: ['html', 'css', 'js','jsx']
};