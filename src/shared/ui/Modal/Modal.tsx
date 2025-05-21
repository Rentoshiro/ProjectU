import React, { useCallback, useEffect } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import { Portal } from "../Portal/Portal";

interface ModalProps {
  className?: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  className,
  children,
  isOpen = false,

  onClose,
}) => {
  const [isClosing, setIsClosing] = React.useState(false);
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const mods = {
    [cls.opened]: isOpen,
    [cls.closed]: !isOpen,
    [cls.isClosing]: isClosing,
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsClosing(true);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);

        window.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [isOpen]);

  const handleClose = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    if (target.closest(`.${cls.content}`)) {
      return;
    }

    if (onClose) {
      setIsClosing(true);

      timerRef.current = setTimeout(() => {
        onClose();

        setIsClosing(false);
      }, 300);
    }
  }, []);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={handleClose}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

