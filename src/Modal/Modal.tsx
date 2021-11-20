import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import {
  ModalStyledBackground,
  ModalStyledContainer,
  ModalStyledCloseButton,
} from "./Modal.styled";

export interface ModalContainerProps {
  isOpen: boolean;
  onChange: () => void;
  children: React.ReactNode;
}

const Modal = (props: ModalContainerProps) => {
  const { isOpen, onChange, children } = props;
  const backgroundRef = useRef(null);

  const onClickBackground: (e: React.MouseEvent) => void = (e) =>
    backgroundRef.current === e.target && onChange();

  return isOpen ? (
    <ModalStyledBackground ref={backgroundRef} onClick={onClickBackground}>
      <ModalStyledContainer>
        <ModalStyledCloseButton onClick={onChange}>
          <FontAwesomeIcon icon={faTimes} />
        </ModalStyledCloseButton>
        {children}
      </ModalStyledContainer>
    </ModalStyledBackground>
  ) : null;
};

export default Modal;
