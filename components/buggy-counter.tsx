"use client"

import { useState } from "react"
import { Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface BuggyCounterProps {
  maxValue?: number
}

export function BuggyCounter({ maxValue = 5 }: BuggyCounterProps) {
  const [count, setCount] = useState(0)

  // Intentionally throw an error when count reaches maxValue
  if (count >= maxValue) {
    throw new Error(`Counter crashed! Value ${count} exceeded the limit of ${maxValue - 1}.`)
  }

  return (
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
          <Button variant="outline" size="icon" onClick={() => setCount((c) => c + 1)}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground text-center mt-3">⚠️ Will crash at {maxValue}</p>
      </CardContent>
    </Card>
  )
}
