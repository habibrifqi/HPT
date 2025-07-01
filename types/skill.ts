export interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency: number;
  icon?: string;
  created_at: Date;
}

export type SkillCategory = {
  category: string;
  skills: Skill[];
};