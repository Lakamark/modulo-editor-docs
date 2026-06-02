import {
    EditorPlugin,
    EditorPluginApi,
} from '@lakamark/modulo-editor';

export class DemoAssetUploaderPlugin implements EditorPlugin {
    public readonly name = 'demo-asset-uploader';

    private unsubscribe?: () => void;

    public setup(api: EditorPluginApi): void {
        this.unsubscribe = api.on('asset:upload-request', async ({ file }) => {
            try {
                await new Promise((resolve) => {
                    window.setTimeout(resolve, 500);
                });

                api.emit('asset:upload-success', {
                    file,
                    url: 'https://placehold.co/600x400?text=ModuloEditor',
                });
            } catch (error) {
                api.emit('asset:upload-error', {
                    file,
                    error,
                });
            }
        });
    }

    public destroy(): void {
        this.unsubscribe?.();
    }
}