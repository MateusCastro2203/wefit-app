import styled from "styled-components/native";

export const Card = styled.TouchableOpacity`
  width: 359px;
  height: 167px;
  background-color: white;
  border-radius: 10px;
  elevation: 3; 
  shadow-color: #000; 
  shadow-offset: { width: 0, height: 2 }; 
  shadow-opacity: 0.1; 
  shadow-radius: 3px; 
  margin-bottom: 16px;
  padding:16px ;
`;

export const header = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 16px;
`;

export const SplitText = styled.View`
  margin-top: 12px;
  flex-direction: row;
`;

export const TitleBold = styled.Text`
  font-weight: bold;
  font-size: 12px;
`;

export const Divider = styled.View`
  border-bottom-width: 1;
  border-bottom-color: #dadada;
`;

export const Title = styled.Text`
  font-size: 12px;
`;

export const Img = styled.Image`
  margin-top: 4px;
  width: 29px;
  height: 29px;
  border-radius: 25px;
`;

export const Description = styled.Text`
  margin-top: 16px;
  font-size: 12px;
  font-weight: 400;
  color: #9a9a9a;
`;

export const Footer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 12px;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: #faf3dc;
  width: 103px;
  height: 36px;
  font-size: 12px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #ffd02c;
  font-weight: bold;
  margin-left: 10px;
`;

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Text = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: #9a9a9a;
  margin-left: 6px;
`;
