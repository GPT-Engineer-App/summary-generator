import { Box, Flex, Link, Spacer, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading as="h1" size="lg" color="white">
          MyApp
        </Heading>
        <Spacer />
        <Flex alignItems="center">
          <Link as={RouterLink} to="/" px={2} color="white">
            Home
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
