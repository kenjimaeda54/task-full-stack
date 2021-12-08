import styled from "styled-components";
import { BiFilterAlt } from "react-icons/bi";

interface IContainerProps {
  isActive: boolean;
}

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 15px;
  background: ${({ isActive, theme }) =>
    isActive ? theme.colors.orangeLight : theme.colors.blueDark};
  border-radius: 5px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.orangeLight};
  }
  width: 260px;
  height: 90px;
`;

export const TextFooter = styled.span`
  font-weight: ${({ theme }) => theme.fonts.Light300};
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  line-height: 20px;
`;

export const Filter = styled(BiFilterAlt)`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.colors.white};
`;

export const ViewText = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Text = styled.span`
  font-weight: ${({ theme }) => theme.fonts.Regular};
  color: ${({ theme }) => theme.colors.white};
  font-size: 17px;
  line-height: 23px;
  text-transform: uppercase;
`;
