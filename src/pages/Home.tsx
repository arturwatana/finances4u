import { Box, Flex, Img, Text } from "@chakra-ui/react";
import MainSection from "../Components/Layout/MainSection";
import QualityCard from "../Components/Layout/qualityCard";
import facilityImg from "../assets/undraw_save_to_bookmarks_re_8ajf.svg";
import goalsImg from "../assets/undraw_next_tasks_re_5eyy.svg";
import dashboardImg from "../assets/undraw_dashboard_re_3b76.svg";
import chatImg from "../assets/undraw_respond_re_iph2.svg";
export default function Home() {
  return (
    <Flex
      align="center"
      direction={"column"}
      justify={"space-evenly"}
      pt="6em"
      pb="4em"
      gap="10em"
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
          <Text>Tenha acesso ao Dashboard</Text>
          <Text fontWeight={"lighter"} fontSize={"14px"}>
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
