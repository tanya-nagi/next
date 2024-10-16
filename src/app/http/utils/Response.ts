import { NextResponse } from "next/server";

export class Response {
   static success(data: any, message: string, statusCode: number) {
      return NextResponse.json({
        status: true,
        data: data,
        message: message,
      }, {status: statusCode});
    }
  
  static error(message: string, statusCode: number, data?: any) {
    return NextResponse.json({
        data: data ?? null,
        status: false,
        message: message,
      }, {status: statusCode});
    }
  }
  