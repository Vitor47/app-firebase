import { TitleText, SubTitleText, Container } from "./styles";

export const CustomHeader = ({ title, subtitle }) => {
  return (
    <Container>
      <TitleText>{title}</TitleText>

      <SubTitleText>{subtitle}</SubTitleText>
    </Container>
  );
};
