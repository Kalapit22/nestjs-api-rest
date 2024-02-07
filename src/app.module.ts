import { Module } from "@nestjs/common";
import { TasksModule } from "./tasks/tasks.module";
import { ShopModule } from "./shop/shop.module";
import { AuthModule } from "./auth/auth.module";



@Module({
    imports:[TasksModule],
    providers:[],
    controllers:[]
})

export class AppModule{};