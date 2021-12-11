import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-x: hidden;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  height: 100%;
  gap: 20px;
`;

export const Title = styled.h2`
  font-weight: ${({ theme }) => theme.fonts.Bold};
  color: ${({ theme }) => theme.colors.orange};
  font-size: 20px;
  line-height: 25px;
  text-transform: uppercase;
`;

export const SubTitle = styled.strong`
  font-weight: ${({ theme }) => theme.fonts.Medium};
  color: ${({ theme }) => theme.colors.blueDark};
  font-size: 13px;
  line-height: 17px;
`;

export const QrCodeArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const BodyFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export const TitleFooter = styled.strong`
  font-weight: ${({ theme }) => theme.fonts.Medium};
  color: ${({ theme }) => theme.colors.blueDark};
  font-size: 15px;
  line-height: 19px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-weight: ${({ theme }) => theme.fonts.Medium};
  color: ${({ theme }) => theme.colors.blueDark};
  font-size: 15px;
  line-height: 19px;
  border: 1px solid ${({ theme }) => theme.colors.blueDark};
  border-radius: 5px;
  text-align: center;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.orange};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.blueDark};
  }
`;

export const ButtonText = styled.span`
  font-weight: ${({ theme }) => theme.fonts.Medium};
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  line-height: 19px;
`;
