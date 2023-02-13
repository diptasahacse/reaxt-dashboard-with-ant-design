import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import {
  AiFillDashboard,
  AiFillPlusSquare,
  AiFillAppstore,
  AiFillEdit,
} from "react-icons/ai";
import { FaUserAlt, FaUserMd, FaUserPlus } from "react-icons/fa";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Sider, Content,Footer } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const nevigate = useNavigate();
  // console.log(collapsed)
  return (
    <Layout>
      <Sider trigger={null} breakpoint="lg" collapsed={collapsed}
      onBreakpoint={(broken) => {
        setCollapsed(broken)
      }}
      
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key == "signout") {
            } else {
              nevigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiFillDashboard />,
              label: "Dashboard",
            },
            {
              key: "Product",
              icon: <AiFillAppstore />,
              label: "Product",
              children: [
                {
                  key: "add-product",
                  icon: <AiFillPlusSquare />,
                  label: "Add Products",
                },
                {
                  key: "manage-products",
                  icon: <AiFillEdit />,
                  label: "Manage Products",
                },
              ],
            },
            {
              key: "user",
              icon: <FaUserAlt />,
              label: "User",
              children: [
                {
                  key: "add-user",
                  icon: <FaUserPlus />,
                  label: "Add User",
                },
                {
                  key: "manage-user",
                  icon: <FaUserMd />,
                  label: "Manage User",
                },
              ],
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
