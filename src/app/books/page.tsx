import { getBooksAction } from '@/actions';
import { BookCard, SearchInput } from '@/components';
import { Col, Flex, Row } from 'antd';

type Props = {
  searchParams: Promise<{ [key: string]: string }>;
}

export default async function BooksList({ searchParams }: Props) {
  const params = await searchParams;
  const books = await getBooksAction(params);

  return (
    <Flex vertical style={{ width: '100%' }} gap={32}>
      <SearchInput />
      {books.items.length === 0 && <p style={{ textAlign: 'center', fontSize: 36 }}>Книг не найдено</p>}
      <Row gutter={[16, 16]}>
        {books.items.map((book, index) => (
          <Col key={index} span={6}><BookCard book={book} /></Col>
        ))}
      </Row>
    </Flex>
  );
}