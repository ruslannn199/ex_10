'use client';

import { Book } from '@/server/types';
import { Button, Form, Input } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { saveBookAction } from '@/actions';

type Values = Omit<Book, 'id'>;

type Props = {
  id?: string;
  initialValues?: Values;
}

export const BookForm = ({ initialValues, id }: Props) => {
  const [form] = Form.useForm();
  const onFinish = async (values: Values) => {
    await saveBookAction({ ...values, id });
  };
  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onFinish}
      initialValues={{
        name: initialValues?.name,
        author: initialValues?.author,
        pageCount: initialValues?.pageCount ?? 2,
        genre: initialValues?.genre,
        image: initialValues?.image,
        year: initialValues?.year ?? new Date().getFullYear(),
      }}
      style={{ maxWidth: 600, justifySelf: 'center', width: '100%' }}
    >
      <FormItem name='name' label='Название книги' rules={[{ required: true }]}>
        <Input />
      </FormItem>
      <FormItem name='author' label='Автор' rules={[{ required: true }]}>
        <Input />
      </FormItem>
      <FormItem name='pageCount' label='Количество страниц' rules={[{ required: true }]}>
        <Input type='number' min={2} step={1} />
      </FormItem>
      <FormItem name='genre' label='Жанр' rules={[{ required: true }]}>
        <Input />
      </FormItem>
      <FormItem name='image' label='Ссылка на изображение' rules={[{ required: true }]}>
        <Input type='url' />
      </FormItem>
      <FormItem name='year' label='Год' rules={[{ required: true }]}>
        <Input type='number' min={1} step={1} max={new Date().getFullYear()} />
      </FormItem>
      <FormItem>
        <Button type='primary' htmlType='submit'>
          Сохранить
        </Button>
      </FormItem>
    </Form>
  );
};