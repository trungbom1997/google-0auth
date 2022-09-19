import { ApiProperty } from "@nestjs/swagger";

export class CreateAuthDto {
  
    @ApiProperty({ required: false })
    email?: string;
  
    @ApiProperty({ required: false })
    displayName?: string;
}
