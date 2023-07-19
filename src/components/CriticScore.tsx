import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

export const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score < 60 ? "yellow" : ""; //simple implemntation of game score
  return (
    // colorScheme is for all color background, forground while color is used for only one elment or componet.
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  );
};
