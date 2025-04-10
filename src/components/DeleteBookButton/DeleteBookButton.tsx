'use client';

import { deleteBookAction } from '@/actions';
import { Button } from 'antd';

type Props = {
  id: string
}
export const DeleteBookButton = ({ id }: Props) => {
  const handleDelete = async () => {
    await deleteBookAction(id);
  }
  return (

    <Button variant="outlined" danger onClick={handleDelete}>
      Удалить
    </Button>
  )
}