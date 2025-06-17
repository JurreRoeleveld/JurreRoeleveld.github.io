import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, MapPin, Info, Landmark, Route } from "lucide-react"

export function NationalMuseumPage() {
  const address = "Kildare St, Dublin 2, Ireland"
  const encodedAddress = encodeURIComponent(address)
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
  const websiteUrl = "https://www.museum.ie/en-IE/Museums/Archaeology"

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <div className="flex items-center gap-4">
        <div className="bg-green-100 p-3 rounded-lg">
            <Landmark className="h-6 w-6 text-green-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">National Museum of Ireland</h1>
          <p className="text-muted-foreground">Duik in de rijke archeologische schatten van Ierland.</p>
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
            Het Nationaal Museum voor Archeologie herbergt een schat aan Ierse artefacten, waaronder de beroemde Tara Broche en het Ardagh Chalice. Ontdek prehistorisch goud, Viking-vondsten en middeleeuwse relikwieën die het verhaal van Ierland vertellen. Toegang is gratis.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg border">
                <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                    <Route className="h-4 w-4 text-gray-600" />
                    Afstand van Appartement
                </h4>
                <p className="text-sm text-muted-foreground">~15 minuten lopen</p>
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
                        Open Kaarten
                    </a>
                </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6 text-center">
            <h3 className="font-semibold mb-2">Gratis Toegang</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Toegang tot het Nationaal Museum is gratis. Bezoek de website voor de meest actuele openingstijden.
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