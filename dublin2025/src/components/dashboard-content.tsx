import { FlightPage } from "./flight-page"
import { FlightReturnPage } from "./flight-return-page"
import { IntroPage } from "./intro-page"
import { ApartmentPage } from "./apartment-page"

export function DashboardContent({ activeItem }: { 
  activeItem: string
}) {
  console.log('DashboardContent received activeItem:', activeItem)
  switch (activeItem) {
    case "heen":
      return <FlightPage />
    case "terug":
      return <FlightReturnPage />
    case "appartement":
      return <ApartmentPage />
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