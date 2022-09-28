import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 473px){
      ${props}
    }
  `;
};

export const tab = (props) => {
  return css`
  @media only screen and (min-width: 474px) and (max-width: 1023px){
    ${props}
  }
  `;
};

export const ipad = (props) => {
  return css`
  @media only screen and (min-width: 1023px) and (max-width: 1100px){
    ${props}
  }
  `;
};