export function cleanDemoImports(source: string): string {
    return source
        .replace(/import ['"]\.\.\/\.\.\/modulo-editor-demo\.css['"]\n/g, '')
        .trim()
}