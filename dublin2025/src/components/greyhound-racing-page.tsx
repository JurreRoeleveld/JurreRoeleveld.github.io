import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, MapPin, Clock, Info, Calendar, Dog } from "lucide-react"

export function GreyhoundRacingPage() {
  const address = "South Lotts Road, Dublin 4, D04 W5C3"
  const encodedAddress = encodeURIComponent(address)
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
  const websiteUrl = "https://www.grireland.ie/go-greyhound-racing/our-stadiums/shelbourne-park-greyhound-stadium/"

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <div className="flex items-center gap-4">
        <div className="bg-blue-100 p-3 rounded-lg">
          <Dog className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Windhondenrennen in Shelbourne Park</h1>
          <p className="text-muted-foreground">Een spannende avond bij de hondenraces.</p>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-blue-500" />
            Details van de activiteit
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Ervaar de spanning van windhondenrennen in Shelbourne Park, het belangrijkste hondenracesstadion van Dublin. Geniet van een uniek avondje uit met vrienden of familie, compleet met heerlijk eten, een elektrische sfeer en de kans om een winnaar aan te moedigen.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg border">
                <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-600" />
                    Dag
                </h4>
                <p className="text-sm text-muted-foreground">Donderdag of Zaterdag</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border">
                <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-600" />
                    Tijd
                </h4>
                <p className="text-sm text-muted-foreground">Avond</p>
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
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-green-500" />
            Raceavonden & Openingstijden
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>
            <h4 className="font-medium">Donderdag & Vrijdag</h4>
            <p className="text-sm text-muted-foreground">Poorten open: 18:30 | Eerste race: ca. 19:42</p>
          </div>
          <div>
            <h4 className="font-medium">Zaterdag</h4>
            <p className="text-sm text-muted-foreground">Poorten open: 18:00 | Eerste race: ca. 19:42</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 text-center">
            <h3 className="font-semibold mb-2">Meer informatie</h3>
            <p className="text-sm text-muted-foreground mb-4">
                Bezoek de officiële website van Shelbourne Park voor de laatste details, boekingen en speciale aanbiedingen.
            </p>
            <Button variant="outline" size="sm" asChild>
                <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Bezoek website
                </a>
            </Button>
        </CardContent>
      </Card>
    </div>
  )
} 