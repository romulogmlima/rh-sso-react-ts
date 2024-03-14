import {
    Layout, theme,
} from 'antd'

const {
    Header, Content, Footer,
} = Layout


type MainLayoutProps = {
    children?: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken()

    return (
        <Layout>
        <Header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div className='demo-logo' />
  
        </Header>
  
        <Content style={{ padding: '0 48px' }}>
          <div
            style={{
              padding: 24,
              minHeight: 580,
              marginTop: 30,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
  
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    );
}