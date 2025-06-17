import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, MapPin, Info, Route, GlassWater } from "lucide-react"

export function JamesonDistilleryPage() {
  const address = "Bow St, Smithfield, Dublin 7, D07 N95N"
  const encodedAddress = encodeURIComponent(address)
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
  const websiteUrl = "https://www.jamesonwhiskey.com/en-IE/visit-us/jameson-distillery-bow-st"

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <div className="flex items-center gap-4">
        <div className="bg-amber-100 p-3 rounded-lg">
            <GlassWater className="h-6 w-6 text-amber-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Jameson Distillery</h1>
          <p className="text-muted-foreground">De originele thuisbasis van Jameson Irish Whiskey.</p>
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
            Bezoek de beroemde whiskeydistilleerderij aan Bow Street en leer alles over de rijke geschiedenis en het productieproces van Jameson Irish Whiskey. Neem deel aan een rondleiding, een proeverij of leer zelf een cocktail maken.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg border">
                <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                    <Route className="h-4 w-4 text-gray-600" />
                    Afstand van Appartement
                </h4>
                <p className="text-sm text-muted-foreground">~25 minuten lopen</p>
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
            <h3 className="font-semibold mb-2">Tours & Tickets</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Het is sterk aanbevolen om tours en ervaringen van tevoren online te boeken, omdat ze snel volgeboekt kunnen zijn.
            </p>
            <Button variant="outline" size="sm" asChild>
                <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Boek Online
                </a>
            </Button>
        </CardContent>
      </Card>
    </div>
  )
} 