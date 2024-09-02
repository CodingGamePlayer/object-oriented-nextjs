import { ReactNode } from "react";

export abstract class SidebarItem {
  constructor(public title: string, public children?: SidebarItem[]) {}

  protected renderTitle(): ReactNode {
    return <span className="title">{this.title}</span>; // 부모 아이템은 볼드 처리
  }

  renderContent(): ReactNode {
    return <div className="sidebar-item text-xs">{this.renderTitle()}</div>;
  }

  abstract render(): ReactNode;
}

export abstract class ChildSidebarItem extends SidebarItem {
  constructor(
    public title: string,
    public path: string,
    public icon: ReactNode,
    public children?: SidebarItem[]
  ) {
    super(title, children);
  }

  protected renderIcon(): ReactNode {
    if (this.icon) {
      return <span className="icon mr-2">{this.icon}</span>;
    }
    return null;
  }

  protected renderTitle(): ReactNode {
    return <span className="title text-sm">{this.title}</span>;
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
