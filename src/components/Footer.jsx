import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="teal.500" color="white" py={4} textAlign="center" mt="auto" width="100%">
      <Text>&copy; 2024 MyApp. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
