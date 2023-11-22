import React, { useState, useContext } from "react";
import { Platform } from "react-native";

import { CustomSubmitButton } from "../../components/Button";

import {
  Background,
  Container,
  AreaInput,
  Input,
  Link,
  LinkText,
  TextLabel,
} from "./styles";

import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../contexts/auth";

export default function SignIn() {
  const navigation = useNavigation();
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    signIn(email, password);
  }
  
  return (
    <Background>
        <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
          <AreaInput>
            <TextLabel>E-MAIL</TextLabel>
            <Input
              placeholder="DIGITE SEU E-MAIL"
              value={email}
              onChangeText={(text) => setEmail(text.toLowerCase())}
            />
          </AreaInput>

          <AreaInput>
            <TextLabel>SENHA</TextLabel>
            <Input
              placeholder="DIGITE SUA SENHA"
              value={password}
              onChangeText={(text) => setPassword(text.toLowerCase())}
              secureTextEntry={true}
            />
          </AreaInput>

          <AreaInput>
            <CustomSubmitButton
              activeOpacity={0.8}
              onPress={handleLogin}
              text="Login"
            />

            <Link onPress={() => navigation.navigate("SignUp")}>
              <LinkText>Criar nova conta</LinkText>
            </Link>
          </AreaInput>
        </Container>
    </Background>
  );
}
