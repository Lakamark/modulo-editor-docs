export function extractTemplate(source: string): string {
    const match = source.match(
        /<template[^>]*>([\s\S]*?)<\/template>/
    )

    return match?.[1]?.trim() ?? ''
}