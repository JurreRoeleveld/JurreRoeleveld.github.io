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
import { PhoenixParkPage } from "./phoenix-park-page"
import { GraftonStreetPage } from "./grafton-street-page"
import { ChristChurchCathedralPage } from "./christ-church-cathedral-page"
import { TheSpirePage } from "./the-spire-page"
import { JamesonDistilleryPage } from "./jameson-distillery-page"
import { TheBrazenHeadPage } from "./the-brazen-head-page"
import { DiscoverPage } from "./discover-page"
import { ReisPage } from "./reis-page"
import { AccomodatiePage } from "./accomodatie-page"
import { PlanningPage } from "./planning-page"

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
    case "reis":
      return <ReisPage onItemClick={onItemClick} />
    case "accomodatie":
      return <AccomodatiePage onItemClick={onItemClick} />
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
    case "phoenix park":
      return <PhoenixParkPage />
    case "grafton street":
      return <GraftonStreetPage />
    case "christ church cathedral":
      return <ChristChurchCathedralPage />
    case "the spire":
      return <TheSpirePage />
    case "jameson distillery":
      return <JamesonDistilleryPage />
    case "the brazen head":
      return <TheBrazenHeadPage />
    case "planning":
      return <PlanningPage onItemClick={onItemClick} />
    case "ontdek":
      return <DiscoverPage onItemClick={onItemClick} />
    default:
      return <IntroPage onItemClick={onItemClick} />
  }
} 