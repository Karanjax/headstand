import { NextResponse } from "next/server";
import { instructorData } from "@/Data/Application/InstructorList/InstructorList";


export async function GET() {
  const htmlContent = instructorData
    .map((instructor) => 
      `<h2>${instructor.name}</h2><p>${instructor.description}</p>`
    )
    .join("");

  return NextResponse.json(htmlContent);
}
