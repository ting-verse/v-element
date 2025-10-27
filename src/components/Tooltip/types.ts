import type { Placement } from "@popperjs/core";

// 定义了 Tooltip 组件可以接收的属性（Props）类型
export interface TooltipProps {
  content?: string;
  trigger?: "hover" | "click";
  placement?: Placement;
}

// 定义了 Tooltip 组件可以触发的事件类型
export interface TooltipEmits {
  (e: "visible-change", value: boolean): void;
}
