export function extractScript(source: string): string {
    const match = source.match(
        /<script[^>]*>([\s\S]*?)<\/script>/
    )

    return match?.[1]?.trim() ?? ''
}