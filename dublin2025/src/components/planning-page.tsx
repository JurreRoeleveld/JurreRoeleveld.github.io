import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Beer,
  Dog,
  Calendar
} from "lucide-react"

const planningItems = [
  {
    id: "guinness-tour",
    title: "Guinness Storehouse",
    description: "Ontdek de geschiedenis van Ierlands beroemdste bier.",
    icon: Beer,
    iconBgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    id: "greyhound-racing",
    title: "Windhondenrennen",
    description: "Ervaar een spannende avond bij de hondenraces.",
    icon: Dog,
    iconBgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
]

export function PlanningPage({ onItemClick }: { onItemClick: (item: string) => void }) {
  return (
    <div className="p-4 sm:p-6 space-y-6">
        <div className="flex items-center gap-4">
            <div className="bg-red-100 p-3 rounded-lg">
                <Calendar className="h-6 w-6 text-red-600" />
            </div>
            <div>
            <h1 className="text-2xl font-bold">Planning Overzicht</h1>
            <p className="text-muted-foreground">Een overzicht van de geplande activiteiten.</p>
            </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {planningItems.map((item) => {
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