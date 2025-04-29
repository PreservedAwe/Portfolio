import { Client } from 'minio';

const client = new Client({
    endPoint: process.env.MINIO_ENDPOINT,
    useSSL: true,
    accessKey: process.env.MINIO_ACCESS_KEY, 
    secretKey: process.env.MINIO_SECRET_KEY, 
});

const bucket = process.env.NEXT_PUBLIC_MINIO_BUCKET;

const audioUrlPrefix = 'audio';
const imageUrlPrefix = 'images';

const setupBucket = async() => {
    try {
        const exists = await client.bucketExists(bucket);
        if (exists) {
            console.log(`The bucket ${bucket} already exists`);
        } else {
            await client.makeBucket(bucket);
            console.log(`The bucket ${bucket} has been created successfully`);
        }        
        const policy = JSON.stringify({
            Version: '2012-10-17',
            Statement: 
            [
                {
                    Effect: 'Allow',
                    Principal: '*',
                    Action: ['s3:GetObject'],
                    Resource: [`arn:aws:s3:::${bucket}/*`],
                },
            ],
        });
        await client.setBucketPolicy(bucket, policy);
        console.log(`The public policy for the bucket:(${bucket}) has been set successfully`);
    } catch(error) {
        console.log(`Error checking bucket: ${error}`);
    }
}

export default {client, bucket, audioUrlPrefix, imageUrlPrefix, setupBucket};