import { FlightPage } from "./flight-page"
import { IntroPage } from "./intro-page"

export function DashboardContent({ activeItem }: { 
  activeItem: string
}) {
  switch (activeItem) {
    case "vlucht":
      return <FlightPage />
    case "appartement":
      return (
        <div className="flex flex-col gap-4 p-6">
          <h1 className="text-2xl font-bold">Appartement</h1>
          <div className="bg-muted/50 min-h-[50vh] rounded-xl flex items-center justify-center">
            <p className="text-muted-foreground">Appartement informatie komt hier...</p>
          </div>
        </div>
      )
    case "planning":
      return (
        <div className="flex flex-col gap-4 p-6">
          <h1 className="text-2xl font-bold">Planning</h1>
          <div className="bg-muted/50 min-h-[50vh] rounded-xl flex items-center justify-center">
            <p className="text-muted-foreground">Planning komt hier...</p>
          </div>
        </div>
      )
    case "ontdek":
      return (
        <div className="flex flex-col gap-4 p-6">
          <h1 className="text-2xl font-bold">Ontdek Dublin</h1>
          <div className="bg-muted/50 min-h-[50vh] rounded-xl flex items-center justify-center">
            <p className="text-muted-foreground">Ontdek opties komen hier...</p>
          </div>
        </div>
      )
    default:
      return <IntroPage />
  }
} 