import { Editor } from "@tiptap/react";
import { saveAs } from "file-saver";
import HTMLtoDOCX from "html-to-docx";

/**
 * Downloads the editor content as a PDF file
 */
export const downloadAsPDF = async (editor: Editor, fileName: string = "document") => {
  if (typeof window === "undefined") return;

  // Dynamically import to avoid SSR issues
  const html2pdf = (await import("html2pdf.js")).default;

  const element = document.querySelector(".ProseMirror") as HTMLElement;
  if (!element) {
    console.error("Editor element not found");
    return;
  }

  const opt = {
    margin: 1,
    filename: `${fileName}.pdf`,
    image: { type: "jpeg" as const, quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" as const },
  };

  html2pdf().set(opt).from(element).save();
};

/**
 * Downloads the editor content as a Word (.docx) file
 */
export const downloadAsDOCX = async (editor: Editor, fileName: string = "document") => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>${fileName}</title>
    </head>
    <body>
        ${editor.getHTML()}
    </body>
    </html>
  `;

  try {
    const docxBuffer = await HTMLtoDOCX(htmlContent, undefined, {
      table: { row: { cantSplit: true } },
      footer: true,
      pageNumber: true,
    });
    
    // Ensure we have a Blob
    const blob = docxBuffer instanceof Blob ? docxBuffer : new Blob([docxBuffer], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
    saveAs(blob, `${fileName}.docx`);
  } catch (error) {
    console.error("Error generating DOCX:", error);
  }
};
