import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalEl = styled.div`
    max-width: calc(100vw - 96px);
  max-height: calc(100vh - 48px);
  /* padding-bottom: 50px; */
`;

export const Image = styled.img`
/* height: 90vh; */
/* width: 90vw; */
    max-width: calc(100vw - 96px);
  max-height: calc(100vh - 48px);

`;