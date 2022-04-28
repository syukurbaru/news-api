import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Tag,
  // useColorModeValue,
  Container,
} from "@chakra-ui/react";

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const ArticleList = ({ data }) => {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1">International News</Heading>
      {data &&
        data.map((article) => (
          <Box
            marginTop={{ base: "1", sm: "5" }}
            display="flex"
            flexDirection={{ base: "column", sm: "row" }}
            justifyContent="space-between"
            key={article.title}
          >
            <Box
              display="flex"
              flex="1"
              marginRight="3"
              position="relative"
              alignItems="center"
            >
              <Box
                width={{ base: "100%", sm: "85%" }}
                zIndex="2"
                marginLeft={{ base: "0", sm: "5%" }}
                marginTop="5%"
              >
                <Link
                  textDecoration="none"
                  _hover={{ textDecoration: "none" }}
                  href={article.url}
                  target="_blank"
                >
                  <Image
                    borderRadius="lg"
                    src={article.urlToImage}
                    alt="some good alt text"
                    objectFit="contain"
                  />
                </Link>
              </Box>
              <Box zIndex="1" width="100%" position="absolute" height="100%">
                <Box
                  // bgGradient={useColorModeValue(
                  //   "radial(orange.600 1px, transparent 1px)",
                  //   "radial(orange.300 1px, transparent 1px)"
                  // )}
                  backgroundSize="20px 20px"
                  opacity="0.4"
                  height="100%"
                />
              </Box>
            </Box>
            <Box
              display="flex"
              flex="1"
              flexDirection="column"
              justifyContent="center"
              marginTop={{ base: "3", sm: "0" }}
            >
              <BlogTags tags={["Engineering", "Product"]} />
              <Heading marginTop="1">
                <Link
                  target={"_blank"}
                  textDecoration="none"
                  _hover={{ textDecoration: "none" }}
                  href={article.url}
                >
                  {article.title}
                </Link>
              </Heading>
              <Text
                as="p"
                marginTop="2"
                // color={useColorModeValue("gray.700", "gray.200")}
                fontSize="lg"
              >
                {article.description}
              </Text>
              <BlogAuthor
                name={article.author}
                date={new Date("2021-04-06T19:01:27Z")}
              />
            </Box>
          </Box>
        ))}
    </Container>
  );
};

export default ArticleList;
