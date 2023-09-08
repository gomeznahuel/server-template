import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";
import { reusableSchemaMethods } from "../utils";

const UserSchema: Schema = new Schema<IUser>({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  status: { type: Boolean, default: true },
});

reusableSchemaMethods(UserSchema, ["V", "password"]);
// export default model<IUser>("User", UserSchema);

const User = model<IUser>("User", UserSchema);
export default User;
