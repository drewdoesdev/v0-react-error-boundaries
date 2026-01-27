import { ErrorBoundary } from "@/components/error-boundary"
import { BuggyCounter } from "@/components/buggy-counter"
import { SafeCounter } from "@/components/safe-counter"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight mb-2">React Error Boundaries POC</h1>
          <p className="text-muted-foreground">Click the + button until counter reaches 5 to see the difference</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* WITH Error Boundary */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="default" className="bg-emerald-600 hover:bg-emerald-600">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                With Error Boundary
              </Badge>
            </div>
            <ErrorBoundary fallbackTitle="Counter Error">
              <BuggyCounter maxValue={5} />
            </ErrorBoundary>
            <div className="mt-4 p-4 rounded-lg bg-muted/50 text-sm">
              <p className="font-medium text-emerald-600 mb-2">✓ Benefits:</p>
              <ul className="space-y-1 text-muted-foreground text-xs">
                <li>• Error is contained to the component</li>
                <li>• Graceful fallback UI in place</li>
                <li>• User can recover with "Try Again"</li>
                <li>• Rest of the app keeps working</li>
              </ul>
            </div>
          </section>

          {/* WITHOUT Error Boundary */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="destructive">
                <XCircle className="h-3 w-3 mr-1" />
                Without Error Boundary
              </Badge>
            </div>
            <SafeCounter maxValue={5} />
            <div className="mt-4 p-4 rounded-lg bg-muted/50 text-sm">
              <p className="font-medium text-destructive mb-2">✗ Problems:</p>
              <ul className="space-y-1 text-muted-foreground text-xs">
                <li>• Requires manual try-catch everywhere</li>
                <li>• Toast is intrusive and disconnected</li>
                <li>• Counter state is stuck/inconsistent</li>
                <li>• No clear recovery path for user</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Code comparison */}
        <div className="mt-12 p-6 rounded-lg border bg-card">
          <h2 className="font-semibold mb-4">Key Difference</h2>
          <div className="grid md:grid-cols-2 gap-4 text-xs">
            <div className="p-3 rounded bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900">
              <p className="font-mono text-emerald-700 dark:text-emerald-400 mb-2">{"<ErrorBoundary>"}</p>
              <p className="font-mono text-emerald-700 dark:text-emerald-400 mb-2 ml-2">{"<BuggyCounter />"}</p>
              <p className="font-mono text-emerald-700 dark:text-emerald-400">{"</ErrorBoundary>"}</p>
            </div>
            <div className="p-3 rounded bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900">
              <p className="font-mono text-red-700 dark:text-red-400 mb-2">{"try {"}</p>
              <p className="font-mono text-red-700 dark:text-red-400 mb-2 ml-2">{"// logic..."}</p>
              <p className="font-mono text-red-700 dark:text-red-400 mb-2">{"} catch (e) {"}</p>
              <p className="font-mono text-red-700 dark:text-red-400 mb-2 ml-2">{"showToast(e)"}</p>
              <p className="font-mono text-red-700 dark:text-red-400">{"}"}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
