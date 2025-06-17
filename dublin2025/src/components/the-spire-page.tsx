import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, MapPin, Info, Route, ArrowUp } from "lucide-react"

export function TheSpirePage() {
  const address = "O'Connell Street Upper, Dublin 1, D01 N5P2"
  const encodedAddress = encodeURIComponent(address)
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
  const websiteUrl = "https://www.visitdublin.com/see-do/details/the-spire"

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <div className="flex items-center gap-4">
        <div className="bg-gray-100 p-3 rounded-lg">
            <ArrowUp className="h-6 w-6 text-gray-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">The Spire</h1>
          <p className="text-muted-foreground">Het Monument van het Licht.</p>
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
            The Spire, ook bekend als het Monument of Light, is een indrukwekkende 120 meter hoge roestvrijstalen zuil in het hart van Dublin. Het is een van de meest herkenbare moderne monumenten van de stad en een populair ontmoetingspunt.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg border">
                <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                    <Route className="h-4 w-4 text-gray-600" />
                    Afstand van Appartement
                </h4>
                <p className="text-sm text-muted-foreground">~20 minuten lopen</p>
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
              The Spire is een openbaar monument en kan op elk moment van de dag worden bekeken. Het is 's nachts prachtig verlicht.
            </p>
            <Button variant="outline" size="sm" asChild>
                <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Meer Informatie
                </a>
            </Button>
        </CardContent>
      </Card>
    </div>
  )
} 