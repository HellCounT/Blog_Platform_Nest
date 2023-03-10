import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
class AccountData {
  @Prop({ required: true })
  login: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  hash: string;
  @Prop({ required: true })
  createdAt: string;
}

const AccountDataSchema = SchemaFactory.createForClass(AccountData);

@Schema()
class EmailConfirmationData {
  @Prop({ required: true })
  confirmationCode: string;
  @Prop({ required: true })
  expirationDate: string;
  @Prop({ required: true })
  isConfirmed: boolean;
}

const EmailConfirmationDataSchema = SchemaFactory.createForClass(
  EmailConfirmationData,
);

@Schema()
class RecoveryCodeData {
  @Prop({ required: false })
  recoveryCode: string;
  @Prop({ required: false })
  expirationDate: string;
}

const RecoveryCodeDataSchema = SchemaFactory.createForClass(RecoveryCodeData);

@Schema()
export class User {
  @Prop({ required: true, type: AccountDataSchema })
  accountData: AccountData;

  @Prop({ required: true, type: EmailConfirmationDataSchema })
  emailConfirmationData: EmailConfirmationData;

  @Prop({ required: false, type: RecoveryCodeDataSchema })
  recoveryCodeData: RecoveryCodeData;
}

export const UserSchema = SchemaFactory.createForClass(User);
