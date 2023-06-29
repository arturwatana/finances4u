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
      gap="20em"
      p="5em 40em 20em 40em"
    >
      <MainSection />
      <Flex w="100%" justify={"space-between"}>
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
      <Flex justify="space-between" align={"center"} gap="5em">
        <Box w="50%">
          <Img src={dashboardImg} />
        </Box>
        <Flex direction={"column"} textAlign={"center"} w="60%" gap="0.6em">
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
