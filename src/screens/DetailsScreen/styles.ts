import styled from "styled-components/native";

export const View = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  background-color: white;
  padding: 16px;
`;

export const Footer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  padding: 16px;
`;

export const SplitText = styled.View`
  margin-top: 12px;
  flex-direction: row;
`;

export const TitleBold = styled.Text`
  font-weight: bold;
  font-size: 20px;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 20px;
`;

export const Description = styled.Text`
  margin-top: 16px;
  font-size: 16px;
  font-weight: 400;
  color: #9a9a9a;
`;

export const Text = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: #9a9a9a;
  margin-left: 6px;
`;

export const ContainerLanguage = styled.View`
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin-top: 16px;
`;

export const LinkContainer = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 16px;
`;

export const Link = styled.Text`
  color: #1976d2;
  font-size: 15px;
  font-weight: 500;
  line-height: 26px;
  margin-right: 8px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: #ffd02c;
  border-radius: 4px;
  height: 42px;
  margin-bottom: 16px;
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  font-weight: 500;
  line-height: 26px;
  margin-right: 8px;
`;
