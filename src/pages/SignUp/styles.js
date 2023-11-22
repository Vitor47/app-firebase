import styled from "styled-components/native";
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #F0F4FF;
  padding-bottom: 12%;
`;

export const ScrollViewContent = styled(ScrollView)`
  padding: 20px;
`;

export const FormArea = styled.View`
  padding: 18px;
  border-radius: 5px;
  margin-bottom: 8px;
`;

export const Header = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  padding: 12px 0;
  margin-bottom: 5px;
  color: #000; /* Cor de texto padrão */
`;

export const InputContainer = styled(View)`
  margin-bottom: 8px;
  margin-top: 8px;
`;

export const Label = styled(Text)`
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

export const ErrorText = styled(Text)`
  color: #FF0000; /* Cor para mensagens de erro */
  font-size: 14px;
  margin-top: 5px;
`;

export const StyledSwitch = styled.Switch`
  width: 40px;
  height: 40px;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 10px;
`;


export const LinkText = styled.Text`
  color: #171717;
  color: rgba(2, 2, 2, 0.79);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
`;

export const LinkLogin = styled.Text`
  color: #68B2F8;
`;