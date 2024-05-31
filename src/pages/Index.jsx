import { useState } from "react";
import { Container, Text, VStack, Textarea, Button, Box, Heading } from "@chakra-ui/react";
import { FaRegClipboard } from "react-icons/fa";

const Index = () => {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");

  const handleSummarize = () => {
    // Simple summarization logic (for demonstration purposes)
    const sentences = text.split(". ");
    const summaryText = sentences.slice(0, Math.ceil(sentences.length / 2)).join(". ") + (sentences.length > 1 ? "." : "");
    setSummary(summaryText);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">
          Text Summarizer
        </Heading>
        <Textarea placeholder="Enter your text here..." value={text} onChange={(e) => setText(e.target.value)} size="lg" />
        <Button leftIcon={<FaRegClipboard />} colorScheme="teal" onClick={handleSummarize}>
          Summarize
        </Button>
        {summary && (
          <Box p={4} borderWidth={1} borderRadius="md" width="100%">
            <Heading as="h2" size="md">
              Summary
            </Heading>
            <Text mt={2}>{summary}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
