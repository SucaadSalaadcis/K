import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {HiChartPie, HiInbox, HiTable, HiUser,HiArrowSmRight, HiViewBoards } from "react-icons/hi";

function SidebarElec() {
  return (
    <Sidebar aria-label="Sidebar with content separator example" >
      <Sidebar.Items className="bg-gray-300">
        <Sidebar.ItemGroup >
          <Sidebar.Item href="/" icon={HiArrowSmRight}>
             Home
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard/total" icon={HiChartPie}>
             Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard/upload" icon={HiViewBoards}>
            Upload Electronics
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard/manage" icon={HiInbox}>
           Manage Electronics
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Logout
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}


export default SidebarElec