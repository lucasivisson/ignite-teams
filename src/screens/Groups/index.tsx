import { StyleSheet } from "react-native";
import { Container, Title } from "./styles";

export function Groups() {
  return (
    <Container style={styles.container}>
      <Title>Groups</Title>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
