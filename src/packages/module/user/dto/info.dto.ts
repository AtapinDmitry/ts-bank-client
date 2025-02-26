import { ApiProperty } from '@nestjs/swagger';

export class Info {
    @ApiProperty({ description: 'Идентификатор' })
    public readonly id: number;

    @ApiProperty({ description: 'Информация' })
    public readonly data: string;
}

