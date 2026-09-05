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
const contentWidth = pageWidth - margin * 2;

// Colors
const navyColor = [15, 23, 42]; // #0f172a
const goldColor = [180, 130, 60]; // #b4823c
const darkTextColor = [30, 41, 59]; // #1e293b
const mutedTextColor = [71, 85, 105]; // #475569
const lineSeparatorColor = [203, 213, 225]; // #cbd5e1

let y = 18;

// --- HEADER ---
doc.setFont('helvetica', 'bold');
doc.setFontSize(22);
doc.setTextColor(...navyColor);
doc.text('ABDUL RAHMAN MOHAMMED SAJAN', margin, y);

y += 6;
doc.setFont('helvetica', 'bold');
doc.setFontSize(12);
doc.setTextColor(...goldColor);
doc.text('SPECIALTY COFFEE BARISTA', margin, y);

y += 6;
doc.setFont('helvetica', 'normal');
doc.setFontSize(9.5);
doc.setTextColor(...mutedTextColor);
const contactInfo = 'Doha, Qatar  |  +974 6647 6221  |  sajanmohammed777@gmail.com  |  Instagram: @mohamed_sajan_07';
doc.text(contactInfo, margin, y);

y += 4;
doc.setDrawColor(...lineSeparatorColor);
doc.setLineWidth(0.4);
doc.line(margin, y, pageWidth - margin, y);

y += 8;

// Helper to draw section heading
function drawSectionHeader(title) {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...navyColor);
  doc.text(title.toUpperCase(), margin, y);
  
  y += 2;
  doc.setDrawColor(...goldColor);
  doc.setLineWidth(0.6);
  doc.line(margin, y, margin + 45, y);
  doc.setDrawColor(...lineSeparatorColor);
  doc.setLineWidth(0.2);
  doc.line(margin + 45, y, pageWidth - margin, y);
  
  y += 6;
}

// Helper for wrapping text
function addWrappedText(text, fontSize, isBold, color, leading = 4.5) {
  doc.setFont('helvetica', isBold ? 'bold' : 'normal');
  doc.setFontSize(fontSize);
  doc.setTextColor(...color);
  const lines = doc.splitTextToSize(text, contentWidth);
  lines.forEach((line) => {
    if (y > pageHeight - margin - 10) {
      doc.addPage();
      y = 18;
    }
    doc.text(line, margin, y);
    y += leading;
  });
}

// Helper for bullet points
function addBulletPoint(text, fontSize = 9, indent = 4) {
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(fontSize);
  doc.setTextColor(...darkTextColor);
  const bulletSymbol = '•';
  const bulletWidth = 4;
  const wrappedLines = doc.splitTextToSize(text, contentWidth - indent - bulletWidth);
  
  if (y > pageHeight - margin - 10) {
    doc.addPage();
    y = 18;
  }
  doc.text(bulletSymbol, margin + indent, y);
  wrappedLines.forEach((line, index) => {
    if (index > 0 && y > pageHeight - margin - 10) {
      doc.addPage();
      y = 18;
    }
    doc.text(line, margin + indent + bulletWidth, y);
    y += 4.2;
  });
}

// --- PROFESSIONAL SUMMARY ---
drawSectionHeader('Professional Summary');
const summaryText = 'Dedicated and detail-oriented Specialty Coffee Barista with progressive experience in specialty coffee preparation and customer-focused cafe operations across Sri Lanka and Qatar. Skilled in espresso extraction, microfoam milk texturing, latte art, and manual brewing methods (V60, French Press), with a proven track record of maintaining consistent drink quality, speed, and strict hygiene (HACCP) standards in high-volume environments. Recognized for warm hospitality, strong product knowledge, and operational reliability.';
addWrappedText(summaryText, 9.5, false, darkTextColor, 4.5);

y += 5;

// --- CORE SKILLS ---
drawSectionHeader('Core Skills & Expertise');
const skillsCol1 = [
  'Espresso Extraction & Calibration (Dial-in)',
  'Milk Steaming & Microfoam Latte Art',
  'Manual Brew Methods (V60, French Press)',
  'POS Systems & Cash Reconciliation',
  'Opening & Closing Shift Management'
];
const skillsCol2 = [
  'Customer Service & Specialty Hospitality',
  'Food Safety & Hygiene Standards (HACCP)',
  'Inventory Audit & Stock Management',
  'Multitasking & Speed Under Pressure',
  'Coffee Grinder Calibration & Maintenance'
];

const colWidth = (contentWidth - 10) / 2;
for (let i = 0; i < skillsCol1.length; i++) {
  if (y > pageHeight - margin - 10) {
    doc.addPage();
    y = 18;
  }
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...darkTextColor);
  doc.text(`•  ${skillsCol1[i]}`, margin, y);
  doc.text(`•  ${skillsCol2[i]}`, margin + colWidth + 5, y);
  y += 4.5;
}

y += 5;

// --- PROFESSIONAL EXPERIENCE ---
drawSectionHeader('Professional Experience');

// Job 1
if (y > pageHeight - margin - 20) {
  doc.addPage();
  y = 18;
}
doc.setFont('helvetica', 'bold');
doc.setFontSize(10.5);
doc.setTextColor(...navyColor);
doc.text('Barista', margin, y);
doc.setFont('helvetica', 'normal');
doc.setTextColor(...mutedTextColor);
doc.text('— F-Mart Boutique Supermarket', margin + 17, y);

doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.setTextColor(...goldColor);
doc.text('Jan 2026 – Present', pageWidth - margin, y, { align: 'right' });

y += 4.5;
doc.setFont('helvetica', 'italic');
doc.setFontSize(8.5);
doc.setTextColor(...mutedTextColor);
doc.text('Pearl-Qatar, Porto Arabia, Doha, Qatar', margin, y);

y += 5;
const j1Bullets = [
  'Prepare and serve a full range of hot and cold espresso-based beverages to a diverse, upscale clientele at a busy in-store coffee counter.',
  'Maintain consistent drink quality, taste balance, and latte art presentation while efficiently managing high customer footfall during peak retail hours.',
  'Operate, calibrate, and daily deep-clean commercial espresso machines, grinders, and brewing equipment in compliance with HACCP food safety standards.',
  'Accurately handle point-of-sale (POS) cash, credit card, and mobile wallet transactions.',
  'Monitor inventory levels of specialty coffee beans, dairy/non-dairy milk, and cafe consumables, coordinating timely reorders.',
  'Trusted to independently execute closing shifts — end-of-day register balancing, equipment shutdown, sanitation, and store security.'
];
j1Bullets.forEach(b => addBulletPoint(b));

y += 5;

// Job 2
if (y > pageHeight - margin - 20) {
  doc.addPage();
  y = 18;
}
doc.setFont('helvetica', 'bold');
doc.setFontSize(10.5);
doc.setTextColor(...navyColor);
doc.text('Barista', margin, y);
doc.setFont('helvetica', 'normal');
doc.setTextColor(...mutedTextColor);
doc.text('— Grind', margin + 17, y);

doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.setTextColor(...goldColor);
doc.text('Feb 2024 – Nov 2025', pageWidth - margin, y, { align: 'right' });

y += 4.5;
doc.setFont('helvetica', 'italic');
doc.setFontSize(8.5);
doc.setTextColor(...mutedTextColor);
doc.text('Colombo, Sri Lanka', margin, y);

y += 5;
const j2Bullets = [
  'Prepared a wide variety of espresso-based and filter coffee beverages, earning consistent customer praise and reviews citing "the best coffee" in the city.',
  'Delivered warm, attentive table and counter service in a vibrant neighbourhood specialty coffee shop.',
  'Maintained flawless cleanliness and organization across the coffee bar, guest seating areas, and brewing stations throughout each shift.',
  'Managed daily cash handling and point-of-sale register operations with exemplary accuracy.',
  'Regularly entrusted with closing shift responsibilities, including register close-out, deep-cleaning equipment, and locking up the premises.'
];
j2Bullets.forEach(b => addBulletPoint(b));

y += 6;

// --- EDUCATION & CERTIFICATIONS ---
if (y > pageHeight - margin - 35) {
  doc.addPage();
  y = 18;
}

drawSectionHeader('Certifications & Education');

doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(...navyColor);
doc.text('•  Basic Certificate for Barista', margin, y);
doc.setFont('helvetica', 'normal');
doc.setTextColor(...mutedTextColor);
doc.text('— Colombo Bartender & Barista School (Pvt.) Ltd.', margin + 50, y);
doc.text('2024', pageWidth - margin, y, { align: 'right' });

y += 4.5;
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(...navyColor);
doc.text('•  HACCP / ISO 22000 Based Food Safety Certificate', margin, y);
doc.setFont('helvetica', 'normal');
doc.setTextColor(...mutedTextColor);
doc.text('— Colombo Bartender & Barista School', margin + 85, y);
doc.text('2024', pageWidth - margin, y, { align: 'right' });

y += 4.5;
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(...navyColor);
doc.text('•  GCE Ordinary Level (O/L)', margin, y);
doc.setFont('helvetica', 'normal');
doc.setTextColor(...mutedTextColor);
doc.text('— Al-Misbah Maha Vidyalaya, Kalmunai, Sri Lanka', margin + 45, y);
doc.text('2020', pageWidth - margin, y, { align: 'right' });

y += 7;

// --- LANGUAGES & ADDITIONAL INFO ---
if (y > pageHeight - margin - 25) {
  doc.addPage();
  y = 18;
}

drawSectionHeader('Languages & Additional Details');

doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(...darkTextColor);
doc.text('Languages:', margin, y);
doc.setFont('helvetica', 'bold');
doc.text('Tamil (Native), English (Fluent), Sinhala (Conversational)', margin + 22, y);

y += 5;
doc.setFont('helvetica', 'normal');
doc.text('Status & Availability:', margin, y);
doc.setFont('helvetica', 'bold');
doc.text('Currently based in Doha, Qatar. Willing to relocate globally & work flexible shifts.', margin + 34, y);

const outputPath = path.join(process.cwd(), 'public', 'Sajan_Mohammed_CV.pdf');
const pdfBuffer = doc.output('arraybuffer');
fs.writeFileSync(outputPath, Buffer.from(pdfBuffer));
console.log('CV PDF generated successfully at:', outputPath);
