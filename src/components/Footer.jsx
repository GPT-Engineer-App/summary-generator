import { Box, Text, Link, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.100" color="gray.700" py={4} textAlign="center" mt="auto" width="100%">
      <VStack spacing={2}>
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Terms of Service</Link>
        <Link href="#">Contact Us</Link>
      </VStack>
      <Text mt={4}>&copy; 2024 MyApp. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
