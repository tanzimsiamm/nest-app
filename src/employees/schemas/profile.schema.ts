/* eslint-disable prettier/prettier */
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

@Schema()
export class Profile extends Document {
    @Prop()
    name: string;
    @Prop()
    age: number;
    @Prop()
    position: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);