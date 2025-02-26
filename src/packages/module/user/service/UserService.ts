import { Injectable } from '@nestjs/common';
import { Logger, LoggerWrapper, Transport } from '@ts-core/common';
import { Info, InfoList } from '../dto';

@Injectable()
export class UserService extends LoggerWrapper {
    constructor(logger: Logger, private transport: Transport) {
        super(logger);
    }

    declare infos: Map<number, Info>;
    declare key: number; 

    public async createInfo(infoData: Info): Promise<number> {
        if (this.key === undefined) {
            this.key = 0;
        }
        if (this.infos === undefined) {
            this.infos = new Map();
        }

        this.key += 1;

        this.infos.set(this.key, infoData);
        return Promise.resolve(this.key);
    }

    public async getInfos(): Promise<InfoList> {
        let key: number = 0;
        let resultInfos: InfoList = { list: [] };
        while (key <= this.key) {
            var info: Info;
            info = this.infos.get(key);
            resultInfos.list.push(info);
            key++;
        }
        
        return Promise.resolve(resultInfos);
    }
}