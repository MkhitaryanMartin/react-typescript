import React from "react";
import "./style.scss";
import { createPortal } from "react-dom";
import CloseIcon from "../svg/close";

type Props = {
  isVisible: boolean;
  title?: string;
  content: string;
  onClose: () => void;
  children?: React.ReactChild;
};

const Modal: React.FC<Props> = ({
  isVisible = false,
  title,
  content,
  onClose,
  children,
}: Props) => {
  const modal = (
    <div
      className="modal"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div className="modal__dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h2 className="modal__title">{title}</h2>
          <CloseIcon onClick={onClose} />
        </div>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  );

  return !isVisible ? null : createPortal(<div id="portal">{modal}</div>, document.body);
};

export default Modal;
