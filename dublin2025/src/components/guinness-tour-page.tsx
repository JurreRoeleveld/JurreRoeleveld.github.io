import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, MapPin, Clock, Info, Calendar, Beer } from "lucide-react"

export function GuinnessTourPage() {
  const address = "St. James's Gate, Dublin 8, D08 VF8H"
  const encodedAddress = encodeURIComponent(address)
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
  const websiteUrl = "https://www.guinness-storehouse.com/en/visit"

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <div className="flex items-center gap-4">
        <div className="bg-yellow-100 p-3 rounded-lg">
            <Beer className="h-6 w-6 text-yellow-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Guinness Storehouse Tour</h1>
          <p className="text-muted-foreground">Ontdek de geschiedenis van Ierlands beroemdste bier.</p>
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
            Verken de zeven verdiepingen van de Guinness Storehouse en leer alles over de geschiedenis, het brouwproces en de iconische reclames. De tour eindigt in de Gravity Bar, waar je geniet van een gratis pint Guinness en een 360-graden uitzicht over Dublin.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg border">
                <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-600" />
                    Dag
                </h4>
                <p className="text-sm text-muted-foreground">Vrijdag</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border">
                <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-600" />
                    Tijd
                </h4>
                <p className="text-sm text-muted-foreground">14:30 - 16:30 (ongeveer)</p>
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
            <h3 className="font-semibold mb-2">Meer Informatie & Tickets</h3>
            <p className="text-sm text-muted-foreground mb-4">
                Bezoek de officiële website om je tickets te boeken en meer te weten te komen over de verschillende ervaringen.
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