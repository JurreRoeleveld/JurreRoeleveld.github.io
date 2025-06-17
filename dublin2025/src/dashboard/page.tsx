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
} from "@/components/ui/sidebar"
import { DashboardContent } from "@/components/dashboard-content"

export default function Page() {
  const [activeItem, setActiveItem] = useState("home")

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
    <SidebarProvider>
      <AppSidebar activeItem={activeItem} onItemClick={setActiveItem} />
      <SidebarInset className="flex-1 overflow-hidden">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#" onClick={() => setActiveItem("home")}>
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
        <div className="flex-1 overflow-auto">
          <DashboardContent activeItem={activeItem} />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
