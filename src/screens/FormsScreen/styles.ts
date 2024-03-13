import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  height: 100%;
  align-items: center;
  padding: 20px;
`;

export const TextField = styled.TextInput`
  background-color: rgba(0, 0, 0, 0.06);
  height: 56px;
  width: 100%;
  border-color: rgba(0, 0, 0, 0.42);
  border-bottom-width: 1;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
`;

export const Button = styled.TouchableOpacity`
  width: 147px;
  height: 42px;
  background-color: #1976d2;
  margin-top: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 15px;
  font-weight: 400px;
  line-height: 26px;
`;
