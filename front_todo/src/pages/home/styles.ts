import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: hidden;
`;

export const Body = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 15px 20px;
  gap: 15px;
`;

export const ListFilterCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
`;

export const WrapTitle = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const WrapSectionTitle = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  height: 2px;
  width: 100%;
`;

export const TitleSection = styled.h2`
  font-weight: ${({ theme }) => theme.fonts.Bold};
  color: ${({ theme }) => theme.colors.black};
  font-size: 21px;
  line-height: 29px;
  text-transform: uppercase;
  margin: 0px 50px;
  width: 900px;
  text-align: center;
  word-break: normal;
`;

export const ListTaskCard = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 50px;
`;

export const Anchor = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`;
