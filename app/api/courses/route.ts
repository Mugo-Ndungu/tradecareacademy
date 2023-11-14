import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { isTeacher } from "@/lib/teacher";

export async function POST(
  req: Request,
) {
  try {
    console.log("Hereeeee=> ")
    const { userId } = auth();
    const { title } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized Access", { status: 401 });
    }

    const course = await db.course.create({
      data: {
        userId,
        title,
      }
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log("Hereeeee=> ")
    console.log("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}