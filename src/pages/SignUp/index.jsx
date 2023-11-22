import { Keyboard } from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";

import { Alert } from "react-native";
import { createUserSchema } from "../../utils/createUserValidation";

import { ref, push } from "firebase/database";
import { db } from "../../services/api";

import {
  Container,
  FormArea,
  InputContainer,
  ScrollViewContent,
  Link,
  LinkText,
  LinkLogin,
} from "./styles";
import { CustomSubmitButton } from "../../components/Button";

import { CustomInput } from "../../components/InputForm";

export default function App() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(createUserSchema),
  });

  const onSubmit = async (data) => {
    Keyboard.dismiss();

    try {
      const dataApi = {
        name: data.name,
        email: data.email.toLowerCase(),
        password: data.password,
      };

      push(ref(db, "/users"), dataApi);

      reset({
        name: "",
        email: "",
        password: "",
      });
      navigation.navigate("SignIn");
    } catch (error) {
      Alert.alert("Erro ao enviar dados:", error.message);
    }
  };

  return (
    <Container>
      <ScrollViewContent>
        <FormArea>
          <CustomInput
            name="name"
            label="NOME COMPLETO"
            placeholder="DIGITE SEU NOME"
            control={control}
            error={errors.name}
          />

          <CustomInput
            name="email"
            label="E-MAIL"
            placeholder="DIGITE SEU E-MAIL"
            control={control}
            error={errors.email}
          />

          <CustomInput
            name="password"
            label="SENHA"
            placeholder="DIGITE SUA SENHA"
            control={control}
            error={errors.password}
            secureTextEntry={true}
          />
        </FormArea>
        <InputContainer>
          <CustomSubmitButton
            activeOpacity={0.8}
            onPress={handleSubmit(onSubmit)}
            text="Cadastrar"
          />

          <Link onPress={() => navigation.navigate("SignIn")}>
            <LinkText>
              Já possui uma conta? <LinkLogin>Login</LinkLogin>
            </LinkText>
          </Link>
        </InputContainer>
      </ScrollViewContent>
    </Container>
  );
}
