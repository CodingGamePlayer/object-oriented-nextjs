import {
  ChildSidebarItem,
  SidebarItem,
} from "@/theme/abstracts/AbstractSidebarItem";
import Link from "next/link";
import { ReactNode } from "react";
import { FaCalendarAlt, FaPlus, FaTasks, FaUser } from "react-icons/fa";

class MainItem extends SidebarItem {
  render(): ReactNode {
    return (
      <div className="sidebar-item flex items-center px-2 py-2 rounded-md mt-4 font-bold text-gray-400">
        {this.renderContent()}
      </div>
    );
  }
}

class MainChildItem extends ChildSidebarItem {
  render(): ReactNode {
    return (
      <Link
        href={this.path}
        className="sidebar-item flex items-center px-4 py-2 hover:bg-gray-700 rounded-md transition-colors duration-200 ease-in-out w-full text-gray-200"
      >
        {this.renderContent()}
      </Link>
    );
  }
}

export const sidebarItems: SidebarItem[] = [
  new MainItem("메인", [
    new MainChildItem("전체 면접 일정", "/main/schedule", <FaCalendarAlt />),
    new MainChildItem("나의 업무", "/main/tasks", <FaTasks />),
  ]),
  new MainItem("인사 관리", [
    new MainChildItem("지원자 관리", "/hr/applicants", <FaUser />),
    new MainChildItem("채용 포지션 관리", "/hr/positions", <FaTasks />),
    new MainChildItem("지원자 신규 추가", "/hr/new-applicant", <FaPlus />),
  ]),
  new MainItem("관리자", [
    new MainChildItem("사용자 관리", "/admin/users", <FaUser />),
  ]),
];
