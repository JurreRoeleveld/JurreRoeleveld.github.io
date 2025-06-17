"use client"

import type { ElementType } from "react"

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavSecondary({
  items,
  onItemClick,
  className,
}: {
  items: {
    title: string
    url: string
    icon: ElementType
    id: string
  }[]
  onItemClick?: (item: string) => void
  className?: string
}) {
  return (
    <SidebarGroup className={className}>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton tooltip={item.title} onClick={() => onItemClick?.(item.id)}>
              <item.icon />
              <span>{item.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
