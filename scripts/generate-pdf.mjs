import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'mm',
  format: 'a4',
});

const pageWidth = doc.internal.pageSize.getWidth(); // 210
const pageHeight = doc.internal.pageSize.getHeight(); // 297
const margin = 15;
const contentWidth = pageWidth - margin * 2; // 180

// Colors matching the original CV
const navyColor = [27, 54, 93]; // #1B365D - Dark Navy Blue
const darkTextColor = [30, 41, 59]; // #1e293b
const mutedTextColor = [71, 85, 105]; // #475569
const lineSeparatorColor = [27, 54, 93]; // Dark Navy Blue line

let y = 16;

// --- HEADER ---
// Photo on Top Right if exists
const sajanImagePath = path.join(process.cwd(), 'public', 'sajan.png');
if (fs.existsSync(sajanImagePath)) {
  try {
    const imgBuffer = fs.readFileSync(sajanImagePath);
    const imgBase64 = `data:image/png;base64,${imgBuffer.toString('base64')}`;
    // Position photo on top right: 27mm wide x 34mm high
    doc.addImage(imgBase64, 'PNG', pageWidth - margin - 27, y - 2, 27, 34);
  } catch (err) {
    console.warn('Could not add photo to PDF:', err);
  }
}

// Left side Header Info
const headerTextWidth = contentWidth - 32; // Leave room for photo

doc.setFont('helvetica', 'bold');
doc.setFontSize(19);
doc.setTextColor(...navyColor);
doc.text('ABDUL RAHMAN MOHAMMED SAJAN', margin, y);

y += 6;
doc.setFont('helvetica', 'normal');
doc.setFontSize(10.5);
doc.setTextColor(...mutedTextColor);
doc.text('Specialty Coffee Barista', margin, y);

y += 6;
doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(...darkTextColor);
const contactInfo = 'Doha, Qatar  |  +974 6647 6221  |  sajanmohammed777@gmail.com  |  sajanBarista';
doc.text(contactInfo, margin, y);

y += 14;
// Horizontal navy divider line under header
doc.setDrawColor(...lineSeparatorColor);
doc.setLineWidth(0.6);
doc.line(margin, y, pageWidth - margin, y);

y += 7;

// Helper to draw section heading with top divider line
function drawSectionHeader(title) {
  doc.setDrawColor(...lineSeparatorColor);
  doc.setLineWidth(0.6);
  doc.line(margin, y, pageWidth - margin, y);
  
  y += 5;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(...navyColor);
  doc.text(title.toUpperCase(), margin, y);
  
  y += 5;
}

// Helper for wrapping text
function addWrappedText(text, fontSize = 9, isBold = false, color = darkTextColor, leading = 4.2) {
  doc.setFont('helvetica', isBold ? 'bold' : 'normal');
  doc.setFontSize(fontSize);
  doc.setTextColor(...color);
  const lines = doc.splitTextToSize(text, contentWidth);
  lines.forEach((line) => {
    if (y > pageHeight - margin - 8) {
      doc.addPage();
      y = 16;
    }
    doc.text(line, margin, y);
    y += leading;
  });
}

// Helper for bullet points
function addBulletPoint(text, fontSize = 8.8, indent = 3) {
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(fontSize);
  doc.setTextColor(...darkTextColor);
  const bulletSymbol = '•';
  const bulletWidth = 3.5;
  const wrappedLines = doc.splitTextToSize(text, contentWidth - indent - bulletWidth);
  
  if (y > pageHeight - margin - 8) {
    doc.addPage();
    y = 16;
  }
  doc.text(bulletSymbol, margin + indent, y);
  wrappedLines.forEach((line, index) => {
    if (index > 0 && y > pageHeight - margin - 8) {
      doc.addPage();
      y = 16;
    }
    doc.text(line, margin + indent + bulletWidth, y);
    y += 4.1;
  });
}

// --- PROFESSIONAL SUMMARY ---
drawSectionHeader('Professional Summary');
const summaryText = 'Dedicated and detail-oriented Barista with extensive progressive experience in specialty coffee preparation and customer focused cafe operations across Sri Lanka and Qatar. Skilled in espresso extraction, milk texturing, latte art, and manual brewing methods, with a strong record of maintaining consistent quality, speed, and hygiene standards in fast-paced, high volume environments. Recognized by customers and management for warm hospitality, product knowledge, and reliability. Adaptable multicultural professional with hands-on POS, cash handling, and inventory experience, seeking to bring precision and passion for coffee craft to a growing specialty coffee brand.';
addWrappedText(summaryText, 9, false, darkTextColor, 4.3);

y += 4;

// --- CORE SKILLS ---
drawSectionHeader('Core Skills');
const skillsCol1 = [
  'Espresso extraction & calibration',
  'Milk steaming & latte art',
  'Manual brew methods (V60, French press)',
  'POS systems & cash handling',
  'Opening & closing shift management',
  'Cheese Counter & Portioning',
  'Pastry Handling & Merchandising'
];
const skillsCol2 = [
  'Customer service & hospitality',
  'Food safety & hygiene (HACCP)',
  'Inventory & stock management',
  'Team collaboration & training',
  'Multitasking under pressure',
  'Sandwich Preparation & Gourmet Wraps',
  'Salad Bar Operations & Ingredient Prep'
];

const colWidth = (contentWidth - 10) / 2;
for (let i = 0; i < skillsCol1.length; i++) {
  if (y > pageHeight - margin - 8) {
    doc.addPage();
    y = 16;
  }
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.8);
  doc.setTextColor(...darkTextColor);
  doc.text(`•  ${skillsCol1[i]}`, margin + 3, y);
  doc.text(`•  ${skillsCol2[i]}`, margin + colWidth + 5, y);
  y += 4.2;
}

y += 4;

// --- PROFESSIONAL EXPERIENCE ---
drawSectionHeader('Professional Experience');

// Job 1
if (y > pageHeight - margin - 20) {
  doc.addPage();
  y = 16;
}
doc.setFont('helvetica', 'bold');
doc.setFontSize(10);
doc.setTextColor(...navyColor);
doc.text('Barista — Fahrenheit Cafe (F-Mart Boutique Supermarket)', margin, y);

doc.setFont('helvetica', 'italic');
doc.setFontSize(9);
doc.setTextColor(...mutedTextColor);
doc.text('Jan 2026 – Present', pageWidth - margin, y, { align: 'right' });

y += 4.5;
doc.setFont('helvetica', 'italic');
doc.setFontSize(8.8);
doc.setTextColor(...mutedTextColor);
doc.text('Pearl-Qatar, Porto Arabia, Doha, Qatar', margin, y);

y += 5;
const j1Bullets = [
  'Prepare and serve a full range of hot and cold espresso-based beverages to a diverse, upscale clientele at a busy in-store coffee counter.',
  'Maintain consistent drink quality and presentation while managing high customer footfall during peak retail hours.',
  'Operate and clean espresso machines, grinders, and brewing equipment daily in line with food safety standards.',
  'Handle point-of-sale transactions accurately, including cash, card, and mobile payments.',
  'Monitor stock levels of coffee beans, milk, and consumables, coordinating timely reordering with supervisors.',
  'Build rapport with regular customers, contributing to strong repeat business and positive customer feedback.',
  'Trusted to independently handle closing shifts end-of-day cash reconciliation, equipment shutdown/cleaning, and securing the store.'
];
j1Bullets.forEach(b => addBulletPoint(b));

y += 4;

// Job 2
if (y > pageHeight - margin - 20) {
  doc.addPage();
  y = 16;
}
doc.setFont('helvetica', 'bold');
doc.setFontSize(10);
doc.setTextColor(...navyColor);
doc.text('Barista — Grind Cafe', margin, y);

doc.setFont('helvetica', 'italic');
doc.setFontSize(9);
doc.setTextColor(...mutedTextColor);
doc.text('Feb 2024 – Nov 2025', pageWidth - margin, y, { align: 'right' });

y += 4.5;
doc.setFont('helvetica', 'italic');
doc.setFontSize(8.8);
doc.setTextColor(...mutedTextColor);
doc.text('Colombo, Sri Lanka', margin, y);

y += 5;
const j2Bullets = [
  'Prepared a wide variety of espresso-based and filter coffee beverages, consistently earning praise from customers, including reviews citing it as "the best coffee" in the city.',
  'Delivered friendly, efficient table and counter service in a fast-paced neighbourhood coffee shop.',
  'Maintained cleanliness and organisation of the coffee bar, seating area, and equipment throughout each shift.',
  'Managed daily cash handling and point-of-sale operations with a strong record of accuracy.',
  'Regularly entrusted with closing shift duties, including register close-out, deep-cleaning equipment, and locking up the premises.',
  'Built foundational barista skills in espresso extraction, milk texturing, and customer engagement over nearly two years, laying the groundwork for further specialty coffee roles abroad.'
];
j2Bullets.forEach(b => addBulletPoint(b));

// FORCE PAGE BREAK FOR PAGE 2 SECTIONS (matching original 2-page document structure)
doc.addPage();
y = 16;

// --- EDUCATION ---
drawSectionHeader('Education');

doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(...darkTextColor);
doc.text('GCE Ordinary Level (O/L)', margin, y);

y += 4.5;
doc.setFont('helvetica', 'italic');
doc.setFontSize(8.8);
doc.setTextColor(...mutedTextColor);
doc.text('Al-Misbah Maha Vidyalaya, Kalmunai, Sri Lanka — 2020', margin, y);

y += 6;

// --- CERTIFICATIONS ---
drawSectionHeader('Certifications');

doc.setFont('helvetica', 'normal');
doc.setFontSize(8.8);
doc.setTextColor(...darkTextColor);

// Cert 1
doc.text('•  Basic Certificate for Barista — Colombo Bartender & Barista School (Pvt.)', margin + 3, y);
doc.text('2024', pageWidth - margin, y, { align: 'right' });

y += 4.5;
// Cert 2
doc.text('•  HACCP / ISO 22000 Based Food Safety Certificate — Colombo Bartender & Barista School (Pvt.) Ltd.', margin + 3, y);
doc.text('2024', pageWidth - margin, y, { align: 'right' });

y += 6;

// --- LANGUAGES ---
drawSectionHeader('Languages');

doc.setFont('helvetica', 'normal');
doc.setFontSize(8.8);
doc.setTextColor(...darkTextColor);
doc.text('Tamil (Native)', margin, y);
y += 4.2;
doc.text('English (Fluent)', margin, y);
y += 4.2;
doc.text('Sinhala (Conversational)', margin, y);

y += 6;

// --- ADDITIONAL INFORMATION ---
drawSectionHeader('Additional Information');

const addInfoBullets = [
  'Visa Status: Valid QID with transferable visa and NOC readily available.',
  'Currently based in Doha, Qatar',
  'Willing to relocate and work flexible shifts, including weekends and holidays.',
  'References available upon request.'
];
addInfoBullets.forEach(b => addBulletPoint(b));

const outputPath = path.join(process.cwd(), 'public', 'Sajan_Mohammed_CV.pdf');
const pdfBuffer = doc.output('arraybuffer');
fs.writeFileSync(outputPath, Buffer.from(pdfBuffer));
console.log('CV PDF generated successfully at:', outputPath);
