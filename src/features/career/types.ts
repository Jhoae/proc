export type CareerTrack = {
  id: string;
  label: string;
  summary: string;
  strengths: string[];
};

export type ProjectWindow = {
  id: "4w" | "8w" | "12w";
  label: string;
  summary: string;
};
