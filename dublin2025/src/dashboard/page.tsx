"use client"

import { useState } from "react"
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

function PageContent() {
  const { isMobile, setOpenMobile } = useSidebar()
  const [activeItem, setActiveItem] = useState("home")

  const handleItemClick = (item: string) => {
    setActiveItem(item)
    if (isMobile) {
      // On mobile, this will close the sheet.
      setOpenMobile(false) 
    }
  }

  const getBreadcrumbTitle = () => {
    switch (activeItem) {
      case "heen": return "Heenvlucht"
      case "terug": return "Terugvlucht"
      case "appartement": return "Appartement"
      case "planning": return "Planning"
      case "ontdek": return "Ontdek"
      default: return "Overzicht"
    }
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
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#" onClick={() => handleItemClick("home")}>
                    Dublin 2025
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{getBreadcrumbTitle()}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <main className="flex-1 overflow-auto">
          <SidebarInset>
            <DashboardContent activeItem={activeItem} onItemClick={handleItemClick} />
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
