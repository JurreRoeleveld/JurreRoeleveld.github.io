import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, MapPin, Info, Castle, Route } from "lucide-react"

export function DublinCastlePage() {
  const address = "Dame St, Dublin 2, Ireland"
  const encodedAddress = encodeURIComponent(address)
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
  const websiteUrl = "https://www.dublincastle.ie/"

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <div className="flex items-center gap-4">
        <div className="bg-red-100 p-3 rounded-lg">
            <Castle className="h-6 w-6 text-red-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Dublin Castle</h1>
          <p className="text-muted-foreground">Het historische hart van de stad.</p>
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
            Dublin Castle was eeuwenlang de zetel van de Britse regering in Ierland. Tegenwoordig is het een belangrijke Ierse overheidsinstelling en een grote toeristische attractie. Verken de State Apartments, de Chapel Royal en de overblijfselen van de Viking- en middeleeuwse fundamenten.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg border">
                <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                    <Route className="h-4 w-4 text-gray-600" />
                    Afstand van Appartement
                </h4>
                <p className="text-sm text-muted-foreground">~5 minuten lopen</p>
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
            <h3 className="font-semibold mb-2">Tickets & Rondleidingen</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Tickets kunnen online of ter plaatse worden gekocht. Er zijn zowel self-guided als begeleide tours beschikbaar.
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