import { IWebSettings, EnvSettingsStorage } from '@ts-core/backend';
import { ILogger, LoggerLevel } from '@ts-core/common';

export class AppSettings extends EnvSettingsStorage {
    // --------------------------------------------------------------------------
    //
    //  Public Properties
    //
    // --------------------------------------------------------------------------

    public logger?: ILogger;

    // --------------------------------------------------------------------------
    //
    //  Logger Properties
    //
    // --------------------------------------------------------------------------

    public get loggerLevel(): LoggerLevel {
        return this.getValue('LOGGER_LEVEL', LoggerLevel.ALL);
    }

    // --------------------------------------------------------------------------
    //
    //  Web Properties
    //
    // --------------------------------------------------------------------------

    public get webPort(): number {
        return this.getValue('WEB_PORT');
    }

    public get webHost(): string {
        return this.getValue('WEB_HOST', 'localhost');
    }

    // --------------------------------------------------------------------------
    //
    //  Logger Properties
    //
    // --------------------------------------------------------------------------

    public get s3FileBucketName(): string {
        return this.getValue('S3_FILE_BUCKET_NAME');
    }

    public get s3AccessKeyId(): string {
        return this.getValue('S3_ACCESS_KEY_ID');
    }

    public get s3SecretAccessKey(): string {
        return this.getValue('S3_SECRET_ACCESS_KEY');
    }
}
