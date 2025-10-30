import type { Placement, Options } from "@popperjs/core";

// 定义了 Tooltip 组件可以接收的属性（Props）类型
export interface TooltipProps {
  content?: string;
  trigger?: "hover" | "click";
  placement?: Placement;
  manual?: boolean;
  popperOptions?: Partial<Options>;
  transition?: string;
  openDelay?: number;
  closeDelay?: number;
}

// 定义了 Tooltip 组件可以触发的事件类型
export interface TooltipEmits {
  (e: "visible-change", value: boolean): void;
  (e: "click-outside", value: boolean): void;
}

export interface TooltipInstance {
  show: () => void;
  hide: () => void;
}
