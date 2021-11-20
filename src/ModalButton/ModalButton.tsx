import { ButtonStyled } from "./ModalButton.styled";

export interface ModalButtonProps {
  onClick: () => void;
}

const ModalButton = (props: ModalButtonProps) => {
  const { onClick } = props;

  return <ButtonStyled onClick={onClick}>Modal</ButtonStyled>;
};

export default ModalButton;
