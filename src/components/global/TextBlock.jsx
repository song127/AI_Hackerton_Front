import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ backColor, w, h }) => css`
    width: ${w};
    height: ${h};
    background-color: ${backColor};
  `}
`;

const TextArea = styled.textarea`
  width: 100%;
    height: 100%;
`;

function TextBlock() {
  return <Container></Container>;
}

export default TextBlock;
