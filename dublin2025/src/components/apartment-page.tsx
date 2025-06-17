import { Home, MapPin, ExternalLink, Phone, Mail, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ApartmentPage() {
  const address = "Fownes Street, Temple Bar, Dublin, Ireland"
  const encodedAddress = encodeURIComponent(address)
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`

  return (
    <div className="flex flex-col gap-6 p-4 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="bg-green-100 p-3 rounded-lg">
          <Home className="h-6 w-6 text-green-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Temple Bar Crown Square</h1>
          <p className="text-muted-foreground">Modern 2BR/2BA Apartment in Dublin's Heart</p>
        </div>
      </div>

      {/* Useful Information Card */}
      <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-blue-600" />
            Locatie & Contact Informatie
          </CardTitle>
          <CardDescription>
            Alles wat je nodig hebt om ons te bereiken en te vinden
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Address with Maps Link */}
          <div className="bg-white p-4 rounded-lg border border-blue-100">
            <div className="flex flex-col items-center gap-3">
              <div className="text-center">
                <h4 className="font-medium text-sm mb-1">📍 Adres</h4>
                <p className="text-sm text-muted-foreground">
                  Fownes Street, Temple Bar<br />
                  Dublin, Ireland<br />
                  <span className="text-xs">Property ID: 510191</span>
                </p>
              </div>
              <Button size="sm" asChild className="shrink-0">
                <a 
                  href={mapsLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs"
                >
                  <MapPin className="h-3 w-3 mr-1" />
                  Open Maps
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-green-100">
              <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                <Phone className="h-4 w-4 text-green-600" />
                Telefoon
              </h4>
              <a 
                href="tel:+35314433920" 
                className="text-sm text-blue-600 hover:underline"
              >
                +353 1 443 3920
              </a>
            </div>

            <div className="bg-white p-4 rounded-lg border border-green-100">
              <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                <Mail className="h-4 w-4 text-green-600" />
                Email
              </h4>
              <a 
                href="mailto:info@citybreakapartments.com" 
                className="text-sm text-blue-600 hover:underline"
              >
                info@citybreakapartments.com
              </a>
            </div>
          </div>

          {/* Office Hours */}
          <div className="bg-white p-4 rounded-lg border border-orange-100">
            <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
              <Clock className="h-4 w-4 text-orange-600" />
              Openingstijden
            </h4>
            <p className="text-sm text-muted-foreground">
              7 dagen per week: 08:00 - 20:00
            </p>
          </div>

          {/* Quick Features */}
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge variant="outline">🏠 2 Slaapkamers</Badge>
            <Badge variant="outline">🚿 2 Badkamers</Badge>
            <Badge variant="outline">🌡️ Verwarmd Terras</Badge>
            <Badge variant="outline">📶 Gratis WiFi</Badge>
            <Badge variant="outline">👨‍👩‍👧‍👦 Gezinsvriendelijk</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Website Link */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardContent className="p-6 text-center">
          <h3 className="font-semibold mb-2">Meer informatie gewenst?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Bezoek de officiële website voor prijzen, beschikbaarheid en boekingen
          </p>
          <Button variant="outline" size="sm" asChild>
            <a 
              href="https://www.citybreakapartments.com/properties/temple-bar-crown-square-apartments/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Bezoek City Break Apartments
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
} 