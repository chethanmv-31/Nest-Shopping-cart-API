import { ApiProperty } from '@nestjs/swagger';
export class CreateOrderDto {
    @ApiProperty()
    amount: number;

    @ApiProperty()
    OSDate: number;

    @ApiProperty()
    qty: number;

    @ApiProperty()
    userId: string;

    @ApiProperty()
    productId: number;
}
