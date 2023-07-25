import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface Props {
  children: ReactNode;
}

export const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width="300px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};
