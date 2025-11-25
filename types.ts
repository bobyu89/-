export interface AssessmentItem {
  id: string;
  text: string;
  scoreRange: string; // e.g., "0 1 2 3"
  note?: string; // Additional context like "(Pos.1) 0 1 2"
}

export interface AssessmentSection {
  title: string;
  isCritical: boolean; // Marked with asterisk in PDF
  items: AssessmentItem[];
  percentage?: string; // e.g. "10%"
}

export interface AssessmentScenario {
  id: string;
  title: string;
  sections: AssessmentSection[];
}