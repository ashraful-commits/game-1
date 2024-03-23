

import { NextResponse } from "next/server";
import { MongoDbConection } from "../../config/MongodbConection";
import UserModel from './../../model/User';

export async function GET(request) {
  MongoDbConection();

  const data = await UserModel.find();
  return NextResponse.json({ message: data });
}
