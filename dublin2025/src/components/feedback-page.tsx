import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquareWarning } from "lucide-react"

export function FeedbackPage() {
  return (
    <div className="p-4 sm:p-6 flex-1 flex items-center justify-center">
      <Card className="w-full max-w-lg text-center">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-2">
            <MessageSquareWarning className="h-6 w-6 text-yellow-500" />
            Feedback & Suggesties
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-medium text-muted-foreground">
            Meld maar bij het volgende bestuur.
          </p>
        </CardContent>
      </Card>
    </div>
  )
} 