import { Box, Flex, Img, Text } from "@chakra-ui/react";
import MainSection from "../Components/Layout/MainSection";
import QualityCard from "../Components/Layout/QualityCard";
import facilityImg from "../assets/undraw_save_to_bookmarks_re_8ajf (1).svg";
import goalsImg from "../assets/undraw_next_tasks_re_5eyy (1).svg";
import dashboardImg from "../assets/undraw_dashboard_re_3b76 (1).svg";
import chatImg from "../assets/undraw_respond_re_iph2 (1).svg";
export default function Home() {
  return (
    <Flex
      align="center"
      direction={"column"}
      justify={"space-evenly"}
      gap={{ base: "10em", lg: "20em" }}
      p={{
        base: "0em 2em 15em 2em",
        lg: "5em 15em 20em 15em",
        xl: "5em 30em 20em 30em",
        "2x1": "5em 40em 20em 40em",
      }}
    >
      <MainSection />

      <Flex
        w="100%"
        align="center"
        justify={"space-between"}
        direction={{ base: "column", lg: "row", xl: "row" }}
        gap={{ base: "3.5em", md: "4em" }}
      >
        <QualityCard
          img={facilityImg}
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          tittle="Facilidade"
        />
        <QualityCard
          img={goalsImg}
          tittle="Metas"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <QualityCard
          img={chatImg}
          tittle="Suporte"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
      </Flex>
      <Flex
        justify="space-between"
        w={{ base: "70%", lg: "100%" }}
        align={"center"}
        gap="5em"
        direction={{ base: "column", lg: "column", xl: "row" }}
      >
        <Box w={{ base: "80%", lg: "60%", xl: "50%" }}>
          <Img src={dashboardImg} />
        </Box>
        <Flex
          direction={"column"}
          textAlign={"center"}
          w={{ base: "100%", lg: "60%" }}
          gap="0.6em"
        >
          <Text fontSize={"23px"}>Tenha acesso ao Dashboard</Text>
          <Text fontWeight={"lighter"} fontSize={"20px"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
