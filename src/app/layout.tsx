import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import 'normalize.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import '@ant-design/v5-patch-for-react-19';
import { ConfigProvider, Title } from '@/components';
import { App, Layout, Menu } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { ItemType } from 'antd/es/menu/interface';
import { MenuItemType } from 'antd/lib/menu/interface';
import Link from 'next/link';
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", 'cyrillic'],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Библиотека",
};

const items: ItemType<MenuItemType>[] = [
  {
    label: <Link href='/' >Главная</Link>,
    key: "home",
  },
  {
    label: <Link href='/books' >Книги</Link>,
    key: "books",
  }
]

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ [key: string]: string }>;
}>) {
  const paths = await params;
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <AntdRegistry>
          <ConfigProvider>
            <App>
              <Layout>
                <Header style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
                  <Title />
                  <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={Object.keys(paths).includes('books') ? ['books'] : ['home']}
                    items={items}
                    style={{ flex: 1, minWidth: 0 }}
                  />
                </Header>
                <Content style={{ minHeight: 'calc(100vh - 64px)', padding: 32 }}>{children}</Content>
              </Layout>
            </App>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
