import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

const App = () => {
  const [selectedGenre, setGenre] = useState<Genre | null>(null);

  return (
    <Grid
      templateAreas={{
        lg: `"nav nav" "aside main"`, //1024px
        base: `"nav" "main"`,
      }}
      templateColumns={{
        lg: "200px 1fr",
        base: "1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
};

export default App;
