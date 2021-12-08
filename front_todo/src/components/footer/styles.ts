import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 20px;
  background: ${({ theme }) => theme.colors.blueDark};
  width: 100vw;
  border-top: 10px solid ${({ theme }) => theme.colors.orange};
  justify-content: center;
  align-items: center;
`;

export const TextFooter = styled.span`
  font-weight: ${({ theme }) => theme.fonts.Light300};
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  line-height: 20px;
`;
