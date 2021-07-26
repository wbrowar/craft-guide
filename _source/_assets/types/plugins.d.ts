export interface Guide {
  access: "all" | "admins" | "permissions";
  content: string;
  contentSource: string;
  contentUrl: string;
  format: "markdown" | "twig";
  id: number;
  slug: string;
  summary: string | null;
  template: string;
  title: string;
}