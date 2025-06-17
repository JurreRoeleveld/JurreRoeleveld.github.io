import { Cloud, CloudRain, Sun, WifiOff, Loader } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"

const dayNameToAbbreviation: { [key: string]: string } = {
  "Thursday": "Do",
  "Friday": "Vr",
  "Saturday": "Za",
  "Sunday": "Zo",
}

interface WeatherData {
  date: string
  day: string
  high: number
  low: number
  condition: string
  icon: React.ElementType
  precipitation: number
}

const mapWeatherCodeToCondition = (code: number): { condition: string; icon: React.ElementType } => {
  if (code === 0) return { condition: "Zonnig", icon: Sun }
  if (code >= 1 && code <= 3) return { condition: "Bewolkt", icon: Cloud }
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return { condition: "Regen", icon: CloudRain }
  return { condition: "Bewolkt", icon: Cloud } // Fallback
}

export function WeatherForecast() {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const lat = 53.350140
        const lon = -6.266155
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Europe/Dublin&start_date=2025-06-19&end_date=2025-06-22`
        
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Weerdata kon niet worden opgehaald')
        }
        const data = await response.json()

        const transformedData = data.daily.time.map((t: string, i: number) => {
          const date = new Date(t)
          const dayName = date.toLocaleDateString('en-US', { weekday: 'long' })
          const { condition, icon } = mapWeatherCodeToCondition(data.daily.weathercode[i])
          
          return {
            date: `${date.getDate()} Juni`,
            day: dayNameToAbbreviation[dayName] || '',
            high: Math.round(data.daily.temperature_2m_max[i]),
            low: Math.round(data.daily.temperature_2m_min[i]),
            condition: condition,
            icon: icon,
            precipitation: data.daily.precipitation_probability_max[i],
          }
        })
        
        setWeatherData(transformedData)
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError("Er is een onbekende fout opgetreden.")
        }
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Cloud className="h-5 w-5 text-blue-600" />
          Weersvoorspelling Dublin
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {loading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="text-center p-3 rounded-lg bg-muted/30 flex flex-col items-center justify-center h-40">
                <Loader className="h-6 w-6 animate-spin text-muted-foreground" />
              </div>
            ))
          ) : error ? (
            <div className="col-span-full text-center p-4 rounded-lg bg-red-50 border border-red-200">
                <WifiOff className="h-8 w-8 mx-auto text-red-500 mb-2" />
                <div className="font-semibold text-red-700">Oeps! Kon het weer niet laden.</div>
                <div className="text-sm text-red-600">{error}</div>
            </div>
          ) : (
            weatherData.map((day, index) => {
              const IconComponent = day.icon
              return (
                <div 
                  key={day.date}
                  className={`text-center p-3 rounded-lg transition-colors h-40 flex flex-col justify-between ${
                    index === 0 
                      ? "bg-blue-50 border border-blue-200" 
                      : "bg-muted/30 hover:bg-muted/50"
                  }`}
                >
                  <div>
                    <div className="text-xs font-medium text-muted-foreground mb-1">
                      {day.day}
                    </div>
                    <div className="text-xs text-muted-foreground mb-2">
                      {day.date}
                    </div>
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
                  
                  <div>
                    <div className="text-xs font-medium mb-1">
                      {day.high}°/{day.low}°
                    </div>
                    
                    <div className="text-xs text-muted-foreground mb-1 truncate">
                      {day.condition}
                    </div>
                    
                    <div className="text-xs text-blue-600">
                      {day.precipitation}% 🌧️
                    </div>
                  </div>
                </div>
              )
            })
          )}
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