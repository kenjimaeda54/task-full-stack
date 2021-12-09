import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-radius: 8px;
  padding: 15px 9px;
  background: ${({ theme }) => theme.colors.white};
  width: 290px;
  border-top: 10px solid ${({ theme }) => theme.colors.orange};
  border: 2px solid ${({ theme }) => theme.colors.gray};
  flex-direction: column;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const TextHeader = styled.h3`
  font-weight: ${({ theme }) => theme.fonts.Bold};
  color: ${({ theme }) => theme.colors.black};
  font-size: 15px;
  line-height: 20px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const DateFooter = styled.strong`
  font-weight: ${({ theme }) => theme.fonts.Bold};
  color: ${({ theme }) => theme.colors.orangeLight};
  font-size: 17px;
  line-height: 19px;
`;

export const HourFooter = styled.span`
  font-weight: ${({ theme }) => theme.fonts.Medium};
  color: ${({ theme }) => theme.colors.gray};
  font-size: 17px;
  line-height: 19px;
`;
