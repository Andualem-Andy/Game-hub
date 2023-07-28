import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import { GenersList } from "./components/GenresList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // large device wider than 1024px
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="aside">
        <GenersList />
      </GridItem>

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
