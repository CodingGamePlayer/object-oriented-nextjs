import React, { ReactNode } from "react";

export interface SidebarItemProps {
  title: string;
  children?: SidebarItem[];
  icon?: ReactNode;
  path?: string;
}

export abstract class SidebarItem extends React.Component<SidebarItemProps> {
  protected renderTitle(): ReactNode {
    return <span className="title">{this.props.title}</span>;
  }

  renderContent(): ReactNode {
    return <div className="sidebar-item text-xs">{this.renderTitle()}</div>;
  }

  abstract render(): ReactNode;
}

export abstract class ChildSidebarItem extends SidebarItem {
  constructor(props: SidebarItemProps) {
    super(props);
  }

  protected renderIcon(): ReactNode {
    if (this.props.icon) {
      return <span className="icon mr-2">{this.props.icon}</span>;
    }
    return null;
  }

  protected renderTitle(): ReactNode {
    return <span className="title text-sm">{this.props.title}</span>;
  }

  renderContent(): ReactNode {
    return (
      <div className="sidebar-item flex items-center">
        {this.renderIcon()}
        {this.renderTitle()}
      </div>
    );
  }
}
