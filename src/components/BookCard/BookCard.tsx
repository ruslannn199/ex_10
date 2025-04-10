import { Book } from "@/server/types";
import { Card, Image } from "antd";
import Meta from "antd/es/card/Meta";

type Props = {
  book: Book;
};

export const BookCard = ({ book }: Props) => {
  const { name, author, image } = book;
  return (
    <Card
      hoverable
      cover={<Image src={image} alt={name} />}
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Meta title={name} description={author} />
    </Card>
  );
};
