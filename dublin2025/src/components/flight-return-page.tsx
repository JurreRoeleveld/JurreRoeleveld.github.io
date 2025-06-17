import { Plane, Clock, MapPin, ExternalLink, Calendar, Users } from "lucide-react"

export function FlightReturnPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="bg-orange-100 p-3 rounded-lg">
          <Plane className="h-6 w-6 text-orange-600 rotate-180" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Terug naar Amsterdam</h1>
          <p className="text-muted-foreground">Aer Lingus EI 608</p>
        </div>
      </div>

      {/* Flight Details Card */}
      <div className="bg-card rounded-lg border p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Vluchtdetails
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Departure */}
          <div className="space-y-3">
            <h3 className="font-medium text-orange-700">Vertrek</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Dublin (DUB)</span>
              </div>
              <div className="text-sm text-muted-foreground">Dublin Airport Terminal 2</div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">13:40</span>
              </div>
              <div className="text-sm text-muted-foreground">22 juni 2025</div>
            </div>
          </div>

          {/* Arrival */}
          <div className="space-y-3">
            <h3 className="font-medium text-blue-700">Aankomst</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Amsterdam (AMS)</span>
              </div>
              <div className="text-sm text-muted-foreground">Schiphol Airport</div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">16:20</span>
              </div>
              <div className="text-sm text-muted-foreground">22 juni 2025</div>
            </div>
          </div>
        </div>

        {/* Flight Info */}
        <div className="grid md:grid-cols-3 gap-4 mt-6 pt-6 border-t">
          <div className="text-center">
            <div className="text-sm text-muted-foreground">Vliegtijd</div>
            <div className="font-medium">1u 40m</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-muted-foreground">Toestel</div>
            <div className="font-medium">Airbus A320</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-muted-foreground">Check-in balie</div>
            <div className="font-medium">29-56</div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Check-in Info */}
        <div className="bg-card rounded-lg border p-6">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Users className="h-5 w-5" />
            Check-in Informatie
          </h3>
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-medium">Balies:</span> 29-56
            </div>
            <div>
              <span className="font-medium">Check-in sluit:</span> 12:25
            </div>
            <div>
              <span className="font-medium">Aanbevolen:</span> 2 uur voor vertrek op luchthaven
            </div>
            <div>
              <span className="font-medium">Looptijd naar gate:</span> ±15 minuten
            </div>
          </div>
        </div>

        {/* Live Information */}
        <div className="bg-card rounded-lg border p-6">
          <h3 className="font-semibold mb-3">Live Vluchtinformatie</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Voor actuele updates, check de luchthaven displays of neem contact op met de luchtvaartmaatschappij.
          </p>
          <a 
            href="https://www.schiphol.nl/nl/aankomst/vlucht/A20250622EI608/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            <ExternalLink className="h-4 w-4" />
            Bekijk live status op Schiphol.nl
          </a>
        </div>
      </div>

      {/* Aircraft Details */}
      <div className="bg-card rounded-lg border p-6">
        <h3 className="font-semibold mb-3">Toestel Details</h3>
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          <div>
            <div className="text-muted-foreground">Model</div>
            <div className="font-medium">Airbus A320</div>
          </div>
          <div>
            <div className="text-muted-foreground">Stoelen</div>
            <div className="font-medium">174</div>
          </div>
          <div>
            <div className="text-muted-foreground">Configuratie</div>
            <div className="font-medium">3-3 (Economy)</div>
          </div>
          <div>
            <div className="text-muted-foreground">Beenruimte</div>
            <div className="font-medium">43 cm</div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t">
          <h4 className="font-medium mb-2">Services aan boord</h4>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded">✓ Snacks</span>
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded">✗ WiFi</span>
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded">✗ Entertainment</span>
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded">✗ Stopcontacten</span>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="mt-4 pt-4 border-t">
          <h4 className="font-medium mb-2">Prestatie Statistieken</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-muted-foreground">Stiptheid vertrek</div>
              <div className="font-medium">63% (gemiddeld 29 min vertraging)</div>
            </div>
            <div>
              <div className="text-muted-foreground">Stiptheid aankomst</div>
              <div className="font-medium">93% (gemiddeld 4 min vroeger)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 