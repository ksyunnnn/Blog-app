import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 40px;
  line-height: 40px;
  padding: 0 16px;
  position: absolute;
`;

const NoteWidth = 640;

export const NoteWrapper = styled.div`
  height: 40px;
  line-height: 40px;
  max-width: ${NoteWidth}px;
  margin: 0 auto;
  padding: 16px;
`;

export const NoteTextArea = styled.textarea`
  ::-webkit-scrollbar{
      display:none;
  }
  box-sizing: border-box;
  width: ${NoteWidth}px;
  height: 92vh;
  line-height: 24px;
  font-size: 14px;
  color: #555;
  letter-spacing: 1px;
  margin: 4vh 0;
  padding: 0;
  padding-top: 80px;
	background: none;
	border: none;
	border-radius: 0;
	outline: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
  resize: none;
  position: absolute;
`;

export const ButtonWrapper = styled.div`
  position: fixed;
  z-index: 1;
  width: ${NoteWidth}px;
  bottom: 80px;
`;

export const NoteViewerWrapper = styled.div`
  padding: 80px 0;
`;

export const NoteViewer = styled.div`
  min-height: 50vh;
  padding: 16px 0;
  font-size: 14px;
  line-height: 24px;
  // box-shadow: 0px 2px 2px rgba(0,0,0,.1);
`;

export const IconWrapper = styled.div`
  float: right;
`;

export const LinkWrapper = styled.span`
  margin: 0 4px;
`;
