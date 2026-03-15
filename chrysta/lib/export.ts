import { Editor } from "@tiptap/react";
import { saveAs } from "file-saver";

/**
 * Downloads the editor content as a PDF file
 */
export const downloadAsPDF = async (
  editor: Editor,
  fileName: string = "document"
) => {
  if (typeof window === "undefined") return;

  const html2pdf = (await import("html2pdf.js")).default;

  const element = editor.view.dom as HTMLElement;
  if (!element) {
    console.error("Editor element not found");
    return;
  }

  // Create temporary CSS override to remove lab/oklch colors
  const style = document.createElement("style");
  style.innerHTML = `
    * {
      color: rgb(0,0,0) !important;
      border-color: rgb(0,0,0) !important;
      outline-color: rgb(0,0,0) !important;
    }
    body {
      background: white !important;
    }
  `;

  document.head.appendChild(style);

  const opt: any = {
    margin: 0.5,
    filename: `${fileName}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    },
    jsPDF: {
      unit: "in",
      format: "letter",
      orientation: "portrait",
    },
  };

  try {
    await html2pdf().set(opt).from(element).save();
  } catch (error) {
    console.error("PDF generation failed:", error);
  } finally {
    document.head.removeChild(style);
  }
};

/**
 * Downloads the editor content as a Word (.docx) file
 */
export const downloadAsDOCX = async (
  editor: Editor,
  fileName: string = "document"
) => {
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
    const response = await fetch("/api/export-docx", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        html: htmlContent,
        fileName,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate DOCX");
    }

    const blob = await response.blob();
    saveAs(blob, `${fileName}.docx`);
  } catch (error) {
    console.error("Error generating DOCX:", error);
  }
};