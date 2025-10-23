import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const PDF_WIDTH_DEFAULT = 1080;
const PDF_HEIGHT_DEFAULT = 1440;
const PDF_PAGE_NUMBER_DEFAULT = 1;
const PDF_DEVICE_PIXEL_RATIO_DEFAULT = 10; // Higher value to amplify memory usage
const PDF_URL_DEFAULT = "sample.pdf";

export const PdfSection = ({
  pdfUrl = PDF_URL_DEFAULT,
  pageNumber = PDF_PAGE_NUMBER_DEFAULT,
  width = PDF_WIDTH_DEFAULT,
  height = PDF_HEIGHT_DEFAULT,
}) => {
  return (
    <Document file={pdfUrl}>
      <Page
        devicePixelRatio={PDF_DEVICE_PIXEL_RATIO_DEFAULT}
        scale={1}
        pageNumber={pageNumber}
        width={width}
        height={height}
        renderAnnotationLayer={false}
        renderTextLayer={false}
      />
    </Document>
  );
};
