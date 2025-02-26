import { ApiProperty } from '@nestjs/swagger';
import { Info } from './info.dto';

export class InfoList {
    @ApiProperty({ description: 'Лист информаций' })
    public readonly list: Info[];
}