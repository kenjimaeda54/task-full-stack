import styled from "styled-components";

interface IIconProps {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

export const Body = styled.div`
  display: flex;
  margin-top: 13px;
  width: 80%;
  height: 100%;
  flex-direction: column;
  padding: 15px 20px;
  gap: 15px;
`;

export const ListIcons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Icon = styled.img<IIconProps>`
  width: 70px;
  height: 70px;
  opacity: ${({ selected }) => (selected ? 0.3 : 1)};
`;

export const ButtonIcon = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
