import { Box, Flex, Link, Spacer, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="white" px={4} boxShadow="md">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading as="h1" size="lg" color="teal.500">
          MyApp
        </Heading>
        <Spacer />
        <Flex alignItems="center">
          <Link as={RouterLink} to="/" px={2} color="teal.500">
            Home
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
