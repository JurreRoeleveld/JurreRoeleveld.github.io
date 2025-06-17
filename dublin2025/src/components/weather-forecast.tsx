import { Cloud, CloudRain, Sun } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const weatherData = [
  {
    date: "19 Juni",
    day: "Do",
    high: 18,
    low: 12,
    condition: "Bewolkt",
    icon: Cloud,
    precipitation: 20
  },
  {
    date: "20 Juni",
    day: "Vr",
    high: 20,
    low: 14,
    condition: "Zonnig",
    icon: Sun,
    precipitation: 10
  },
  {
    date: "21 Juni",
    day: "Za",
    high: 17,
    low: 11,
    condition: "Regen",
    icon: CloudRain,
    precipitation: 80
  },
  {
    date: "22 Juni",
    day: "Zo",
    high: 19,
    low: 13,
    condition: "Bewolkt",
    icon: Cloud,
    precipitation: 30
  },
  {
    date: "23 Juni",
    day: "Ma",
    high: 21,
    low: 15,
    condition: "Zonnig",
    icon: Sun,
    precipitation: 5
  }
]

export function WeatherForecast() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Cloud className="h-5 w-5 text-blue-600" />
          Weersvoorspelling Dublin
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {weatherData.map((day, index) => {
            const IconComponent = day.icon
            return (
              <div 
                key={day.date}
                className={`text-center p-3 rounded-lg transition-colors ${
                  index === 0 
                    ? "bg-blue-50 border border-blue-200" 
                    : "bg-muted/30 hover:bg-muted/50"
                }`}
              >
                <div className="text-xs font-medium text-muted-foreground mb-1">
                  {day.day}
                </div>
                <div className="text-xs text-muted-foreground mb-2">
                  {day.date.split(' ')[0]}
                </div>
                
                <div className="flex justify-center mb-2">
                  <IconComponent 
                    className={`h-6 w-6 ${
                      day.condition === "Zonnig" ? "text-yellow-500" :
                      day.condition === "Regen" ? "text-blue-500" :
                      "text-gray-500"
                    }`} 
                  />
                </div>
                
                <div className="text-xs font-medium mb-1">
                  {day.high}°/{day.low}°
                </div>
                
                <div className="text-xs text-muted-foreground mb-1">
                  {day.condition}
                </div>
                
                <div className="text-xs text-blue-600">
                  {day.precipitation}% 🌧️
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="mt-4 pt-4 border-t text-center">
          <div className="text-sm text-muted-foreground mb-2">
            💡 <strong>Tip:</strong> Neem een paraplu mee en kleed je in laagjes!
          </div>
          <div className="text-xs text-muted-foreground">
            Dublin's weer kan snel veranderen - typisch Iers weer! 🍀
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 