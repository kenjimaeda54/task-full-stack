import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: ${({ theme }) => theme.colors.blueDark};
  width: 100vw;
  border-bottom: 10px solid ${({ theme }) => theme.colors.orange};
`;

export const SideRight = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const TextAnchor = styled(Link)`
  font-weight: ${({ theme }) => theme.fonts.Medium};
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const ImageAnchor = styled.div`
  display: flex;
`;

export const WrapQuantity = styled.div`
  position: relative;
  top: -10px;
  right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
  justify-content: center;
`;

export const Separator = styled.div`
  width: 1px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Quantity = styled.span`
  font-weight: ${({ theme }) => theme.fonts.Bold};
  color: ${({ theme }) => theme.colors.orange};
  font-size: 15px;
  line-height: 20px;
`;

export const Button = styled.button`
  background-color: transparent;
  border-color: none;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
