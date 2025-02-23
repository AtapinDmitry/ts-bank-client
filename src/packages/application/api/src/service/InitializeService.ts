import { Injectable } from '@nestjs/common';
import { Logger, Transport, ExtendedError, LoggerWrapper, DateUtil, ValidateUtil, MathUtil } from '@ts-core/common';
import { FileUtil } from '@ts-core/backend';
import * as _ from 'lodash';

@Injectable()
export class InitializeService extends LoggerWrapper {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------



    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(
        logger: Logger,
        private transport: Transport,
    ) {
        super(logger);
    }

    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------

    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public async initialize(): Promise<void> {
        this.logger.log("Initialized");
    }
}