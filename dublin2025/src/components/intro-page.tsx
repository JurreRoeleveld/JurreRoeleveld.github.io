import { MapPin, Calendar, Users, Plane, Heart, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function IntroPage() {
  return (
    <div className="flex flex-col gap-8 p-6">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
          <Heart className="h-4 w-4" />
          Sláinte! Welkom bij je Dublin avontuur
        </div>
        <h1 className="text-4xl font-bold text-foreground">
          Dublin 2025
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Je complete gids voor een onvergetelijke reis naar de Ierse hoofdstad. 
          Van vluchtdetails tot verborgen schatten - alles wat je nodig hebt voor de perfecte trip!
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="flex flex-col items-center p-6">
            <Calendar className="h-8 w-8 text-blue-600 mb-2" />
            <div className="text-2xl font-bold">Juni 2025</div>
            <div className="text-sm text-muted-foreground">Reisperiode</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex flex-col items-center p-6">
            <Plane className="h-8 w-8 text-green-600 mb-2" />
            <div className="text-2xl font-bold">EI 603</div>
            <div className="text-sm text-muted-foreground">Aer Lingus</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex flex-col items-center p-6">
            <MapPin className="h-8 w-8 text-orange-600 mb-2" />
            <div className="text-2xl font-bold">Dublin</div>
            <div className="text-sm text-muted-foreground">Bestemming</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex flex-col items-center p-6">
            <Users className="h-8 w-8 text-purple-600 mb-2" />
            <div className="text-2xl font-bold">1,4M</div>
            <div className="text-sm text-muted-foreground">Inwoners</div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* About Dublin */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-green-600" />
              Over Dublin
            </CardTitle>
            <CardDescription>
              De bruisende hoofdstad van Ierland
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Dublin, ook wel Baile Átha Cliath genoemd, is een stad vol geschiedenis, 
              cultuur en de beroemde Ierse gastvrijheid. Van de historische Trinity College 
              tot de levendige Temple Bar wijk - Dublin heeft voor ieder wat wils.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">🍺 Guinness Storehouse</Badge>
              <Badge variant="secondary">📚 Trinity College</Badge>
              <Badge variant="secondary">🎭 Temple Bar</Badge>
              <Badge variant="secondary">🏰 Dublin Castle</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Trip Highlights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-600" />
              Trip Highlights
            </CardTitle>
            <CardDescription>
              Wat je niet mag missen in Dublin
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-1 rounded">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <div className="font-medium text-sm">Guinness Storehouse</div>
                  <div className="text-xs text-muted-foreground">Leer alles over Ierlands beroemdste bier</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-1 rounded">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <div className="font-medium text-sm">Book of Kells</div>
                  <div className="text-xs text-muted-foreground">Prachtige middeleeuwse manuscripten</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-orange-100 p-1 rounded">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                </div>
                <div>
                  <div className="font-medium text-sm">Cliffs of Howth</div>
                  <div className="text-xs text-muted-foreground">Adembenemende kustlijn nabij Dublin</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Cards */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Plan je reis</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Plane className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <div className="font-semibold">Vlucht</div>
              <div className="text-sm text-muted-foreground">Bekijk je vluchtdetails</div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <MapPin className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <div className="font-semibold">Appartement</div>
              <div className="text-sm text-muted-foreground">Je accommodatie info</div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-3" />
              <div className="font-semibold">Planning</div>
              <div className="text-sm text-muted-foreground">Dagelijkse activiteiten</div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Heart className="h-12 w-12 text-red-600 mx-auto mb-3" />
              <div className="font-semibold">Ontdek</div>
              <div className="text-sm text-muted-foreground">Verborgen parels</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardContent className="p-6 text-center">
          <div className="text-sm text-muted-foreground mb-2">
            "Céad míle fáilte - A hundred thousand welcomes"
          </div>
          <div className="text-xs text-muted-foreground">
            Traditionele Ierse begroeting
          </div>
          <Button variant="outline" size="sm" className="mt-3" asChild>
            <a href="https://www.visitdublin.com/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Bezoek Dublin.com
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
} 