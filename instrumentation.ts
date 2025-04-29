export async function register() {
    if (process.env.NEXT_RUNTIME === 'nodejs') {
        await import('@/lib/cron')
        const minio = await import('@/lib/minio');
        minio.default.setupBucket();
    }
}