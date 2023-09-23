import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image.url";

export const GenersList = () => {
  const { genres, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {genres.map((genres) => (
        <ListItem key={genres.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genres.image_background)}
            />
            <Button
              onClick={() => console.log(genres)}
              fontSize="lg"
              variant="link"
            >
              {genres.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
