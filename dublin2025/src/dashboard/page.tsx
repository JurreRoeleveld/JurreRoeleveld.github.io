"use client"

import { useEffect } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { DashboardContent } from "@/components/dashboard-content"
import { navigationData } from "@/lib/navigation-data"
import type { NavItem } from "@/lib/navigation-data"
import { useNavigate, useLocation } from "react-router-dom"

function PageContent() {
  const { isMobile, setOpenMobile } = useSidebar()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const activeItem = location.pathname.substring(1) || "home"

  const handleItemClick = (item: string) => {
    navigate(item === "home" ? "/" : `/${item}`)
    if (isMobile) {
      setOpenMobile(false)
    }
  }

  const getBreadcrumbItems = () => {
    if (activeItem === "home") {
      return <BreadcrumbPage>Overzicht</BreadcrumbPage>
    }

    let parent: NavItem | undefined
    let child: NavItem | undefined

    for (const navItem of navigationData.navMain) {
      if (navItem.id === activeItem) {
        parent = navItem
        break
      }
      if (navItem.items) {
        const foundChild = navItem.items.find(item => item.id === activeItem)
        if (foundChild) {
          parent = navItem
          child = foundChild
          break
        }
      }
    }

    if (!parent && activeItem) {
      const secondaryItem = navigationData.navSecondary.find(
        item => item.id === activeItem,
      )
      if (secondaryItem) {
        parent = secondaryItem
      }
    }

    return (
      <>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="#" onClick={() => handleItemClick("home")}>
            Dublin 2025
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden md:block" />
        {parent && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="#"
                onClick={() => handleItemClick(parent!.id)}
              >
                {parent.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {child && <BreadcrumbSeparator />}
          </>
        )}
        {child && (
          <BreadcrumbItem>
            <BreadcrumbPage>{child.title}</BreadcrumbPage>
          </BreadcrumbItem>
        )}
        {!child && parent && (
          <BreadcrumbItem>
            <BreadcrumbPage>{parent.title}</BreadcrumbPage>
          </BreadcrumbItem>
        )}
      </>
    )
  }

  return (
    <>
      <AppSidebar activeItem={activeItem} onItemClick={handleItemClick} />
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b bg-background">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>{getBreadcrumbItems()}</BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <main className="flex-1 overflow-auto">
          <SidebarInset>
            <DashboardContent />
          </SidebarInset>
        </main>
      </div>
    </>
  )
}

export default function Page() {
  return (
    <SidebarProvider>
      <PageContent />
    </SidebarProvider>
  )
}
