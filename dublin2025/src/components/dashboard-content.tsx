import { FlightPage } from "./flight-page"
import { FlightReturnPage } from "./flight-return-page"
import { IntroPage } from "./intro-page"
import { ApartmentPage } from "./apartment-page"
import { GreyhoundRacingPage } from "./greyhound-racing-page"
import { GuinnessTourPage } from "./guinness-tour-page"
import { FeedbackPage } from "./feedback-page"
import { TrinityCollegePage } from "./trinity-college-page"
import { DublinCastlePage } from "./dublin-castle-page"
import { NationalMuseumPage } from "./national-museum-page"
import { KilmainhamGaolPage } from "./kilmainham-gaol-page"
import { StPatricksCathedralPage } from "./st-patricks-cathedral-page"

export function DashboardContent({ activeItem, onItemClick }: { 
  activeItem: string;
  onItemClick: (item: string) => void;
}) {
  switch (activeItem) {
    case "flight-page":
      return <FlightPage />
    case "flight-return-page":
      return <FlightReturnPage />
    case "appartement":
      return <ApartmentPage />
    case "greyhound racing":
      return <GreyhoundRacingPage />
    case "guinness tour":
      return <GuinnessTourPage />
    case "feedback":
      return <FeedbackPage />
    case "trinity college":
      return <TrinityCollegePage />
    case "dublin castle":
      return <DublinCastlePage />
    case "national museum":
      return <NationalMuseumPage />
    case "kilmainham gaol":
      return <KilmainhamGaolPage />
    case "st. patrick's cathedral":
      return <StPatricksCathedralPage />
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
      return <IntroPage onItemClick={onItemClick} />
  }
} 