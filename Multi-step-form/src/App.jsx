import HorizontalStepper from "./assets/Stepper";
import { Box, CssBaseline, Container, Paper } from "@mui/material";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3} elevation={2}>
          <HorizontalStepper />
        </Paper>
      </Container>
    </>
  );
};

export default App;
