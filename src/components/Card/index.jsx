import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ref, remove } from 'firebase/database';
import {
  Container,
  SubContainer,
  TextDescription,
} from "./styles";
import { db } from "../../services/api";
import { CustomSubmitButtonOption } from "../../components/ButtonOption";

export default function TaskList({ data }) {
  const navigation = useNavigation();
  const taskKey = data.id;

  const onSubmitDelete = async () => {
    const taskRef = ref(db, `/tasks/${taskKey}`);
    await remove(taskRef)
      .then(() => {
        Alert.alert(`Task removida com sucesso.`);
        navigation.navigate("ListTasks");
      })
      .catch((error) => {
        Alert.alert("Erro ao deletar: ", error);
      });
  };

  const onSubmitEdit = async (data) => {
    navigation.navigate("EditTask", {task: data});
  };

  return (
    <Container>
      <SubContainer>
        <TextDescription>Nome</TextDescription>
        <TextDescription>{data.name}</TextDescription>
      </SubContainer>
      <SubContainer>
        <TextDescription>Prazo</TextDescription>
        <TextDescription>{data.deadline}</TextDescription>
      </SubContainer>

      <SubContainer>
        <TextDescription>Status</TextDescription>
        <TextDescription>{data.status}</TextDescription>
      </SubContainer>

      <SubContainer>
        <CustomSubmitButtonOption
          activeOpacity={0.8}
          onPress={() => onSubmitEdit(data)}
          text="Editar"
        />

        <CustomSubmitButtonOption
          activeOpacity={0.8}
          onPress={() => onSubmitDelete()}
          text="Excluir"
        />
      </SubContainer>
    </Container>
  );
}
