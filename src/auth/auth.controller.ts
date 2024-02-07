import {Controller, Get, Post} from '@nestjs/common';

@Controller('auth')

export class AuthController{

    @Get()
    helloworld(){
        return 'Auth rou te is working correctly';
    }

    @Post()
    postHelloWorld(){
        return 'Post route working fine';

    }




};