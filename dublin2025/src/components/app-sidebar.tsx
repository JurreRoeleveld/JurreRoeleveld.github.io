import * as React from "react"
import {
  Command,
  LifeBuoy,
  Send,
  Plane,
  Building,
  Calendar,
  Compass,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Reis",
      url: "#",
      icon: Plane,
      isActive: true,
      items: [
        {
          title: "Heen",
          url: "#",
        },
        {
          title: "Terug",
          url: "#",
        },
      ],
    },
    {
      title: "Accomodatie",
      url: "#",
      icon: Building,
      isActive: true,
      items: [
        {
          title: "Appartement",
          url: "#",
        },
      ],
    },
    {
      title: "Planning",
      url: "#",
      icon: Calendar,
      isActive: true,
      items: [],
    },
    {
      title: "Ontdek",
      url: "#",
      icon: Compass,
      isActive: true,
      items: [
        {
          title: "optie 1",
          url: "#",
        },
        {
          title: "optie 2",
          url: "#",
        },
        {
          title: "optie 3",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
}

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
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
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
        <NavMain items={data.navMain} activeItem={activeItem} onItemClick={onItemClick} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
