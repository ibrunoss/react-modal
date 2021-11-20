import styled from "@emotion/styled";

export const ModalStyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
`;

export const ModalStyledContainer = styled.div`
  position: relative;
  width: 800px;
  height: 500px;
  display: grid;
  background: #ffffff;
  color: #000000;
  border-radius: 16px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

export const ModalStyledCloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border-radius: 8px;

  :hover {
    background: #c1c1c1;
  }
`;
