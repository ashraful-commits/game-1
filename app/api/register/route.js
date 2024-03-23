

import { NextResponse } from "next/server";
import { MongoDbConection } from './../../../config/MongodbConection';
import UserModel from "../../../model/User";
import makeHashPassword from './../../../helper/CreateHashPassword';

export async function POST(request) {
  MongoDbConection();
  const { name, email, password } = await request.json();
  const isExist = await UserModel.findOne({ email });
  if (isExist) {
    return NextResponse.json({ message: "Email Already Used" });
  } else {
   const user = await UserModel.create({ name, email, password:await makeHashPassword(password) });
    return NextResponse.json({user, message: "Registration successful!" });
  }
}
