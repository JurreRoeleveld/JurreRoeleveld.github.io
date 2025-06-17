import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Building,
} from "lucide-react"

const accomodatieItems = [
  {
    id: "appartement",
    title: "Appartement",
    description: "Bekijk de details van je verblijf in Dublin.",
    icon: Building,
    iconBgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
]

export function AccomodatiePage({ onItemClick }: { onItemClick: (item: string) => void }) {
  return (
    <div className="p-4 sm:p-6 space-y-6">
        <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-lg">
                <Building className="h-6 w-6 text-green-600" />
            </div>
            <div>
            <h1 className="text-2xl font-bold">Accommodatie Overzicht</h1>
            <p className="text-muted-foreground">Details over je verblijfplaats.</p>
            </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {accomodatieItems.map((item) => {
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