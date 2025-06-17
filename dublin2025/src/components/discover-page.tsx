import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  BookOpen,
  Castle,
  Landmark,
  Lock,
  Church,
  Palmtree,
  ShoppingBag,
  ArrowUp,
  GlassWater,
  Beer,
  Compass,
} from "lucide-react"

const discoverItems = [
  {
    id: "trinity college",
    title: "Trinity College",
    description: "Bezoek de oudste universiteit van Ierland en bewonder het Book of Kells.",
    icon: BookOpen,
    iconBgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: "dublin castle",
    title: "Dublin Castle",
    description: "Verken het historische hart van de stad, de voormalige zetel van de macht.",
    icon: Castle,
    iconBgColor: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    id: "national museum",
    title: "National Museum",
    description: "Duik in de rijke archeologische schatten van Ierland, van Vikingen tot goud.",
    icon: Landmark,
    iconBgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: "kilmainham gaol",
    title: "Kilmainham Gaol",
    description: "Een reis door de turbulente geschiedenis van de Ierse onafhankelijkheid.",
    icon: Lock,
    iconBgColor: "bg-gray-200",
    iconColor: "text-gray-700",
  },
  {
    id: "st. patrick's cathedral",
    title: "St. Patrick's Cathedral",
    description: "Bewonder de gotische architectuur van de nationale kathedraal van Ierland.",
    icon: Church,
    iconBgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: "phoenix park",
    title: "Phoenix Park",
    description: "Ontsnap aan de drukte in een van Europa's grootste ommuurde stadsparken.",
    icon: Palmtree,
    iconBgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: "grafton street",
    title: "Grafton Street",
    description: "Ervaar de levendige sfeer van Dublin's beroemdste winkelstraat.",
    icon: ShoppingBag,
    iconBgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    id: "christ church cathedral",
    title: "Christ Church Cathedral",
    description: "Ontdek een van de oudste gebouwen van Dublin met prachtige architectuur.",
    icon: Church,
    iconBgColor: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    id: "the spire",
    title: "The Spire",
    description: "Bewonder het 120 meter hoge Monument of Light in het hart van de stad.",
    icon: ArrowUp,
    iconBgColor: "bg-gray-100",
    iconColor: "text-gray-600",
  },
  {
    id: "jameson distillery",
    title: "Jameson Distillery",
    description: "Leer alles over het beroemde Ierse whiskeymerk en geniet van een proeverij.",
    icon: GlassWater,
    iconBgColor: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    id: "the brazen head",
    title: "The Brazen Head",
    description: "Drink een pint in de oudste pub van Ierland, daterend uit 1198.",
    icon: Beer,
    iconBgColor: "bg-red-100",
    iconColor: "text-red-600",
  },
]

export function DiscoverPage({ onItemClick }: { onItemClick: (item: string) => void }) {
  return (
    <div className="p-4 sm:p-6 space-y-6">
        <div className="flex items-center gap-4">
            <div className="bg-rose-100 p-3 rounded-lg">
                <Compass className="h-6 w-6 text-rose-600" />
            </div>
            <div>
            <h1 className="text-2xl font-bold">Ontdek Dublin</h1>
            <p className="text-muted-foreground">Een overzicht van bezienswaardigheden en verborgen parels.</p>
            </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {discoverItems.map((item) => {
                const IconComponent = item.icon
                return (
                    <Card key={item.id} className="hover:shadow-md transition-shadow cursor-pointer p-6 flex flex-col items-center" onClick={() => onItemClick(item.id)}>
                        <div className={`p-3 rounded-lg mb-4 ${item.iconBgColor}`}>
                            <IconComponent className={`h-8 w-8 ${item.iconColor}`} />
                        </div>
                        <CardHeader className="p-0 text-center w-full">
                            <CardTitle className="text-lg">{item.title}</CardTitle>
                            <CardDescription className="text-sm mt-1">{item.description}</CardDescription>
                        </CardHeader>
                    </Card>
                )
            })}
        </div>
    </div>
  )
} 