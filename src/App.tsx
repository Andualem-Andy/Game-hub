import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav""aside main"`, // large device wider than 1024px
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="Aside" bg="gold">
        Aside
      </GridItem>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
