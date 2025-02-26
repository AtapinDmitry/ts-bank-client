import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Info, InfoList } from '../dto';
import { UserService } from '../service/UserService';

@ApiTags('Информация')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @ApiOperation({ summary: 'Добавление информации' })
    @ApiResponse({ status: HttpStatus.OK })
    @Post('info')
    public async CreateInfo(
        @Body() info: Info
    ): Promise<number> {
        return this.userService.createInfo(info);
    }

    @ApiOperation({ summary: 'Извлечение информации' })
    @ApiResponse({ status: HttpStatus.OK })
    @Get('info')
    public async GetInfos(): Promise<InfoList> {
        return this.userService.getInfos();
    }
}