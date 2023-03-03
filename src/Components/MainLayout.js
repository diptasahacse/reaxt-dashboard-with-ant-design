import { Dropdown, Layout, Menu, theme } from "antd";
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
  AiOutlineInsertRowAbove,
  AiOutlineNodeCollapse
} from "react-icons/ai";
import { FaUserAlt, FaUserMd, FaUserPlus } from "react-icons/fa";
import { Outlet, useNavigate } from "react-router-dom";
import UserNav from "./HeaderCompo/UserNav";
const { Header, Sider, Content, Footer } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const nevigate = useNavigate();

  // console.log(collapsed)
  return (
    <Layout>
      <Sider
        trigger={null}
        breakpoint="md"
        collapsed={collapsed}
        onBreakpoint={(broken) => {
          setCollapsed(broken);
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
            {
              key: "table",
              icon: <AiOutlineInsertRowAbove />,
              label: "Table",
              
            },
            {
              key: "form",
              icon: <AiOutlineNodeCollapse />,
              label: "Form",
              
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
          <div className="d-flex justify-content-between">
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
            <div>
              <UserNav />
            </div>
          </div>
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
        <Footer style={{ textAlign: "center" }}>
          Autonomy ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
