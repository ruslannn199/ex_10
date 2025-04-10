import { getBookAction } from '@/actions';
import { BookForm } from '@/components';

type Props = {
  params: Promise<{ id: string }>
};

export default async function EditBook({ params }: Props) {
  const { id } = await params;

  const book = await getBookAction(id);

  return <BookForm initialValues={book} id={id} />;
}