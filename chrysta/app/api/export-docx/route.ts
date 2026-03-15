import { NextRequest, NextResponse } from "next/server";
import HTMLtoDOCX from "html-to-docx";

export async function POST(req: NextRequest) {
  try {
    const { html, fileName } = await req.json();

    if (!html) {
      return NextResponse.json({ error: "HTML content is required" }, { status: 400 });
    }

    const fileBuffer = await HTMLtoDOCX(html, undefined, {
      table: { row: { cantSplit: true } },
      footer: true,
      pageNumber: true,
    });

    return new Response(fileBuffer, {
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "Content-Disposition": `attachment; filename=${fileName || "document"}.docx`,
      },
    });
  } catch (error) {
    console.error("DOCX Export Error:", error);
    return NextResponse.json({ error: "Failed to generate DOCX" }, { status: 500 });
  }
}
