import React from "react";
import Form1 from "./components/Form1";
import { ConfigProvider, Layout } from "antd";
const { Content } = Layout;

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#6dabe4",
          fontFamily: "Poppins"
        },
      }}
    >
      <Layout className='layout'>
        <Content style={{ padding: "150px 0px" }}>
          <Form1 />
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
