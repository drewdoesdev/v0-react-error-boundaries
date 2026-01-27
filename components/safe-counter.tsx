"use client"

import { useState } from "react"
import { Minus, Plus, AlertCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SafeCounterProps {
  maxValue?: number
}

export function SafeCounter({ maxValue = 5 }: SafeCounterProps) {
  const [count, setCount] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [showToast, setShowToast] = useState(false)

  const increment = () => {
    try {
      const newCount = count + 1
      if (newCount >= maxValue) {
        throw new Error(`Counter crashed! Value ${newCount} exceeded the limit of ${maxValue - 1}.`)
      }
      setCount(newCount)
    } catch (err) {
      setError((err as Error).message)
      setShowToast(true)
    }
  }

  return (
    <>
      {/* Ugly toast notification */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2">
          <div className="bg-destructive text-destructive-foreground px-4 py-3 rounded-lg shadow-lg flex items-start gap-3 max-w-sm">
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-medium text-sm">Error</p>
              <p className="text-xs opacity-90">{error}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 hover:bg-destructive-foreground/20"
              onClick={() => setShowToast(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Counter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center gap-4">
            <Button variant="outline" size="icon" onClick={() => setCount((c) => c - 1)}>
              <Minus className="h-4 w-4" />
            </Button>
            <span className="text-4xl font-bold tabular-nums w-16 text-center">{count}</span>
            <Button variant="outline" size="icon" onClick={increment}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-3">⚠️ Will show toast at {maxValue}</p>
        </CardContent>
      </Card>
    </>
  )
}
