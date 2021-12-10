import styled from "styled-components";

interface IIconProps {
  selected: boolean;
}

interface IButtonSave {
  filedOk: boolean;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

export const Body = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  flex-direction: column;
  padding: 15px 20px;
  gap: 23px;
  margin-bottom: 30px;
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

export const ImgDateTime = styled.div`
  position: relative;
  left: 90%;
  top: 50px;
`;

export const LabelText = styled.span`
  font-weight: ${({ theme }) => theme.fonts.Medium};
  color: ${({ theme }) => theme.colors.black};
  font-size: 17px;
  line-height: 19px;
`;

export const InputText = styled.input`
  width: 100%;
  padding: 5px 10px;
  font-weight: ${({ theme }) => theme.fonts.Regular};
  color: ${({ theme }) => theme.colors.black};
  font-size: 17px;
  line-height: 19px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.orange};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const TextArea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors.orange};
  padding: 15px 10px;
  font-weight: ${({ theme }) => theme.fonts.Regular};
  color: ${({ theme }) => theme.colors.black};
  font-size: 17px;
  line-height: 19px;
  resize: none;
  border-radius: 8px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px;
`;

export const FooterRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ButtonCheck = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const TitleFooterRight = styled.span`
  font-weight: ${({ theme }) => theme.fonts.Bold};
  color: ${({ theme }) => theme.colors.orange};
  font-size: 19px;
  line-height: 21px;
`;

export const ButtonDestroy = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fonts.Medium};
  color: ${({ theme }) => theme.colors.blueDark};
  font-size: 19px;
  line-height: 21px;
  &:hover {
    opacity: 0.7;
  }
`;

export const ButtonSave = styled.button<IButtonSave>`
  display: flex;
  opacity: ${({ filedOk }) => (filedOk ? 0.7 : 1)};
  cursor: ${({ filedOk }) => (filedOk ? "not-allowed" : "pointer")};
  width: 100%;
  padding: 30px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fonts.Regular};
  color: ${({ theme }) => theme.colors.white};
  font-size: 19px;
  line-height: 23px;
  &:hover {
    opacity: 0.7;
  }
`;
