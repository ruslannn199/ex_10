import { getBooksAction } from '@/actions';
import { BookCard } from '@/components';
import { Col, Row } from 'antd';

export default async function BooksList() {
  const books = await getBooksAction();

  return (
    <Row gutter={[16, 16]}>
      {books.items.map((book, index) => (
        <Col key={index} span={6}><BookCard book={book} /></Col>
      ))}
    </Row>
  );
}