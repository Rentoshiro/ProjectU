import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui/Modal/Modal";
import cls from "./LoginModal.module.scss";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      className={classNames(cls.LoginModal, {}, [])}
    >
      <LoginForm></LoginForm>
    </Modal>
  );
};

