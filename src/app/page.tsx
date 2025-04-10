import { Title } from '@/components';
import { request } from "@/utils";
import { Divider, Flex } from "antd";

export default async function Home() {

  return (
    <Flex vertical align="center" style={{ width: "100%" }}>
      <Title />
      <Divider />
      <Flex
        vertical
        style={{ width: "calc(100vw - 64px)", padding: "32px" }}
        align="flex-start"
      >
        ...
      </Flex>
    </Flex>
  );
}
