import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { IconBtn } from "./button";

const ModalStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .content {
    min-width: 500px;
    overflow: auto;
    display: flex;
    max-height: 70wh;
    background-color: #fff;
    flex-direction: column;
  }

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
  }
`;

const ModalContainer: React.FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [rootEle, setRootEle] = React.useState<HTMLElement>();
  const modalId = "modal-root";
  React.useEffect(() => {
    const modalEle = document.getElementById(modalId);
    if (!modalEle) {
      const ele = document.createElement("div");
      ele.setAttribute("id", modalId);
      document.body.appendChild(ele);
    }
    setRootEle(document.getElementById(modalId));
  }, []);
  if (!rootEle) return null;
  return ReactDOM.createPortal(children, document.getElementById(modalId));
};

export const Modal: React.FunctionComponent<{
  hideHeader?: boolean;
  title?: string;
  button: (args: {
    isOpen: boolean;
    setOpen: (a: boolean) => void;
  }) => ReactNode;
  content: (args: {
    isOpen: boolean;
    setOpen: (a: boolean) => void;
  }) => ReactNode;
}> = ({ content, hideHeader, button, title }) => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  return (
    <>
      {button({ isOpen, setOpen })}
      {isOpen ? (
        <ModalContainer>
          <ModalStyles>
            <div className="content">
              {!hideHeader && (
                <div className="header">
                  <h3>{title}</h3>
                  <IconBtn onClick={() => setOpen(false)}>X</IconBtn>
                </div>
              )}
              {content({ isOpen, setOpen })}
            </div>
          </ModalStyles>
        </ModalContainer>
      ) : null}
    </>
  );
};
