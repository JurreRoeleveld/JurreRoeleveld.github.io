import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, MapPin, Info, Route, Palmtree } from "lucide-react"

export function PhoenixParkPage() {
  const address = "Phoenix Park, Dublin 8, Ireland"
  const encodedAddress = encodeURIComponent(address)
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
  const websiteUrl = "https://www.phoenixpark.ie/"

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <div className="flex items-center gap-4">
        <div className="bg-green-100 p-3 rounded-lg">
            <Palmtree className="h-6 w-6 text-green-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Phoenix Park</h1>
          <p className="text-muted-foreground">Een van de grootste ommuurde stadsparken van Europa.</p>
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
            Phoenix Park is een van de grootste ommuurde stadsparken van Europa, met een oppervlakte van 707 hectare. Het herbergt de Dublin Zoo, het presidentiële paleis (Áras an Uachtaráin), en grote kuddes wilde damherten. Het is de perfecte plek voor een wandeling, fietstocht of een picknick.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg border">
                <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                    <Route className="h-4 w-4 text-gray-600" />
                    Afstand van Appartement
                </h4>
                <p className="text-sm text-muted-foreground">~30 minuten met het OV</p>
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
            <h3 className="font-semibold mb-2">Bezoekersinformatie</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Het park is 24/7 geopend. De openingstijden van de dierentuin en andere attracties in het park kunnen variëren.
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