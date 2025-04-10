import { getBookAction } from '@/actions';
import { Flex, Image } from 'antd';

export const dynamic = 'force-dynamic' as const;

type Props = {
  params: Promise<{
    id: string;
  }>;
}

export default async function BookPage({ params }: Props) {
  const { id } = await params;
  const book = await getBookAction(id);
  const { name, author, image, pagecount, genre, year } = book;

  return (
    <Flex style={{ width: '100%' }} justify='space-between'>
      <Image src={image} alt={name} />
      <Flex vertical style={{ textAlign: 'end' }}>
        <h1 style={{ margin: 0, fontSize: 48 }}>{name}</h1>
        <p style={{ margin: 0, fontSize: 32 }}>Автор: {author}</p>
        <p style={{ margin: 0, fontSize: 32 }}>Год: {year}</p>
        <p style={{ margin: 0, fontSize: 32 }}>Жанр: {genre}</p>
        <p style={{ margin: 0, fontSize: 32 }}>Количество страниц: {pagecount}</p>
      </Flex>
    </Flex>
  );
}