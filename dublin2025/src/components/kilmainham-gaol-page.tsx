import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, MapPin, Info, Lock, Route } from "lucide-react"

export function KilmainhamGaolPage() {
  const address = "Inchicore Rd, Kilmainham, Dublin 8, D08 RK28"
  const encodedAddress = encodeURIComponent(address)
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
  const websiteUrl = "https://kilmainhamgaolmuseum.ie/"

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <div className="flex items-center gap-4">
        <div className="bg-gray-200 p-3 rounded-lg">
            <Lock className="h-6 w-6 text-gray-700" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Kilmainham Gaol</h1>
          <p className="text-muted-foreground">Een reis door de turbulente geschiedenis van Ierland.</p>
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
            Kilmainham Gaol is een voormalige gevangenis die een cruciale rol speelde in de Ierse onafhankelijkheidsstrijd. Veel leiders van de opstanden van 1798 tot 1916 werden hier opgesloten en geëxecuteerd. Een rondleiding is een ontroerende en essentiële ervaring voor wie de Ierse geschiedenis wil begrijpen.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg border">
                <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                    <Route className="h-4 w-4 text-gray-600" />
                    Afstand van Appartement
                </h4>
                <p className="text-sm text-muted-foreground">~45 min. lopen / 20 min. met de bus</p>
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
            <h3 className="font-semibold mb-2">Tickets & Rondleidingen</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Vooraf boeken is essentieel, aangezien rondleidingen vaak weken van tevoren uitverkocht zijn.
            </p>
            <Button variant="outline" size="sm" asChild>
                <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Boek Tickets
                </a>
            </Button>
        </CardContent>
      </Card>
    </div>
  )
} 