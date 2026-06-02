export function extractStyle(source: string): string {
    const match = source.match(
        /<style[^>]*>([\s\S]*?)<\/style>/
    )

    return match?.[1]?.trim() ?? ''
}