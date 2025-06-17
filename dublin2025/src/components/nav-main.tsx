"use client"

import { type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
  activeItem,
  onItemClick,
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
  activeItem?: string
  onItemClick?: (item: string) => void
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible key={item.title} asChild open={item.items && item.items.length > 0}>
            <SidebarMenuItem>
              <SidebarMenuButton 
                tooltip={item.title}
                onClick={() => {
                  if (item.items && item.items.length > 0) {
                    console.log('Main menu clicked:', item.title, 'navigating to first submenu:', item.items[0].title)
                    onItemClick?.(item.items[0].title.toLowerCase())
                  }
                }}
                className={item.items && item.items.length > 0 ? "cursor-pointer" : ""}
              >
                <item.icon />
                <span>{item.title}</span>
              </SidebarMenuButton>
              {item.items?.length ? (
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton 
                          onClick={() => {
                            console.log('Navigation clicked:', subItem.title, 'converted to:', subItem.title.toLowerCase())
                            onItemClick?.(subItem.title.toLowerCase())
                          }}
                          className={`cursor-pointer ${activeItem === subItem.title.toLowerCase() ? "bg-sidebar-accent" : ""}`}
                        >
                          <span>{subItem.title}</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              ) : null}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
