import React, { useState } from "react";
import { Box, Button, Input, Text, VStack, Heading, Container, useToast } from "@chakra-ui/react";

const Index = () => {
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const goToPageTwo = () => {
    localStorage.setItem("userInput", inputValue);
    setPage(2);
  };

  const goToPageOne = () => {
    setPage(1);
  };

  const showStoredValue = () => {
    const storedValue = localStorage.getItem("userInput");
    toast({
      title: "Stored Value",
      description: storedValue,
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent p={8}>
      {page === 1 ? (
        <VStack spacing={4}>
          <Heading>Page 1</Heading>
          <Text>Enter some text and pass it to Page 2:</Text>
          <Input placeholder="Type here..." value={inputValue} onChange={handleInputChange} />
          <Button colorScheme="blue" onClick={goToPageTwo}>
            Go to Page 2
          </Button>
        </VStack>
      ) : (
        <VStack spacing={4}>
          <Heading>Page 2</Heading>
          <Text>Click below to display the value stored:</Text>
          <Button colorScheme="green" onClick={showStoredValue}>
            Show Stored Value
          </Button>
          <Button colorScheme="orange" onClick={goToPageOne}>
            Back to Page 1
          </Button>
        </VStack>
      )}
    </Container>
  );
};

export default Index;
