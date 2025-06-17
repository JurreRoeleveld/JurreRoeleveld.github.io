import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Plane,
} from "lucide-react"

const reisItems = [
  {
    id: "flight-page",
    title: "Vlucht Heen",
    description: "Bekijk de details van je heenvlucht naar Dublin.",
    icon: Plane,
    iconBgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    rotation: "",
  },
  {
    id: "flight-return-page",
    title: "Vlucht Terug",
    description: "Bekijk de details van je terugvlucht naar Amsterdam.",
    icon: Plane,
    iconBgColor: "bg-orange-100",
    iconColor: "text-orange-600",
    rotation: "rotate-180",
  },
]

export function ReisPage({ onItemClick }: { onItemClick: (item: string) => void }) {
  return (
    <div className="p-4 sm:p-6 space-y-6">
        <div className="flex items-center gap-4">
            <div className="bg-cyan-100 p-3 rounded-lg">
                <Plane className="h-6 w-6 text-cyan-600" />
            </div>
            <div>
            <h1 className="text-2xl font-bold">Reis Overzicht</h1>
            <p className="text-muted-foreground">Een overzicht van je vluchtgegevens.</p>
            </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reisItems.map((item) => {
                const IconComponent = item.icon
                return (
                    <Card key={item.id} className="hover:shadow-md transition-shadow cursor-pointer p-6 flex flex-col items-center" onClick={() => onItemClick(item.id)}>
                        <div className={`p-3 rounded-lg mb-4 ${item.iconBgColor}`}>
                            <IconComponent className={`h-8 w-8 ${item.iconColor} ${item.rotation}`} />
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