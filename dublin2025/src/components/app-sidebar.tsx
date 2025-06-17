import * as React from "react"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { navigationData } from "@/lib/navigation-data"

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  activeItem?: string
  onItemClick?: (item: string) => void
}

export function AppSidebar({ activeItem, onItemClick, ...props }: AppSidebarProps) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <button onClick={() => onItemClick?.("home")}>
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
                  <img src="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☘️</text></svg>" alt="Dublin 2025 Icon" className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Dublin 2025</span>
                  <span className="truncate text-xs">Trip Planner</span>
                </div>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navigationData.navMain} activeItem={activeItem} onItemClick={onItemClick} />
        <NavSecondary items={navigationData.navSecondary} className="mt-auto" onItemClick={onItemClick} />
      </SidebarContent>
    </Sidebar>
  )
}
