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
import { Routes, Route } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export function DashboardContent() {
  const navigate = useNavigate()

  const handleItemClick = (item: string) => {
    navigate(`/${item}`)
  }

  return (
    <Routes>
      <Route path="/" element={<IntroPage onItemClick={handleItemClick} />} />
      <Route path="/flight-page" element={<FlightPage />} />
      <Route path="/flight-return-page" element={<FlightReturnPage />} />
      <Route path="/appartement" element={<ApartmentPage />} />
      <Route path="/reis" element={<ReisPage onItemClick={handleItemClick} />} />
      <Route path="/accomodatie" element={<AccomodatiePage onItemClick={handleItemClick} />} />
      <Route path="/greyhound-racing" element={<GreyhoundRacingPage />} />
      <Route path="/guinness-tour" element={<GuinnessTourPage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/trinity-college" element={<TrinityCollegePage />} />
      <Route path="/dublin-castle" element={<DublinCastlePage />} />
      <Route path="/national-museum" element={<NationalMuseumPage />} />
      <Route path="/kilmainham-gaol" element={<KilmainhamGaolPage />} />
      <Route path="/st-patricks-cathedral" element={<StPatricksCathedralPage />} />
      <Route path="/phoenix-park" element={<PhoenixParkPage />} />
      <Route path="/grafton-street" element={<GraftonStreetPage />} />
      <Route path="/christ-church-cathedral" element={<ChristChurchCathedralPage />} />
      <Route path="/the-spire" element={<TheSpirePage />} />
      <Route path="/jameson-distillery" element={<JamesonDistilleryPage />} />
      <Route path="/the-brazen-head" element={<TheBrazenHeadPage />} />
      <Route path="/planning" element={<PlanningPage onItemClick={handleItemClick} />} />
      <Route path="/ontdek" element={<DiscoverPage onItemClick={handleItemClick} />} />
    </Routes>
  )
} 