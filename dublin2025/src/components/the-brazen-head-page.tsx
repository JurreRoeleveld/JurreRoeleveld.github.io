import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, MapPin, Info, Route, Beer } from "lucide-react"

export function TheBrazenHeadPage() {
  const address = "20 Lower Bridge St, The Liberties, Dublin 8, D08 HD28"
  const encodedAddress = encodeURIComponent(address)
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
  const websiteUrl = "https://brazenhead.com/"

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <div className="flex items-center gap-4">
        <div className="bg-red-100 p-3 rounded-lg">
            <Beer className="h-6 w-6 text-red-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">The Brazen Head</h1>
          <p className="text-muted-foreground">De oudste pub van Ierland (est. 1198).</p>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-blue-500" />
            Details van de attractie
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Stap terug in de tijd in The Brazen Head, de oudste pub van Ierland, met een geschiedenis die teruggaat tot 1198. Geniet van een pint Guinness, traditionele Ierse gerechten en live muziek in een authentieke, historische sfeer.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg border">
                <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                    <Route className="h-4 w-4 text-gray-600" />
                    Afstand van Appartement
                </h4>
                <p className="text-sm text-muted-foreground">~10 minuten lopen</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border">
                <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-600" />
                    Locatie
                </h4>
                <p className="text-sm text-muted-foreground">{address}</p>
                 <Button size="sm" asChild className="mt-2">
                    <a href={mapsLink} target="_blank" rel="noopener noreferrer">
                        <MapPin className="h-3 w-3 mr-1" />
                        Open Maps
                    </a>
                </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6 text-center">
            <h3 className="font-semibold mb-2">Eten, Drinken & Muziek</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Bekijk de website voor het menu en de agenda voor live Ierse muziek, die bijna elke avond plaatsvindt.
            </p>
            <Button variant="outline" size="sm" asChild>
                <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Bezoek Website
                </a>
            </Button>
        </CardContent>
      </Card>
    </div>
  )
} 