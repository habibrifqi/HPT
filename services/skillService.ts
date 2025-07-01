import sql from '@/lib/db';
import { Skill } from '@/types/skill';

export async function getAllSkills(
  options?: {
    name?: string;
    type?: string;
    minProficiency?: number;
    maxProficiency?: number;
    limit?: number;
  }
): Promise<Skill[]> {
  try {

    if (options?.type && options.type === 'technical') {
      const skills = await sql<Skill[]>`
      SELECT 
        id,
        name,
        proficiency,
        icon,
        created_at
      FROM skills
      where category = 'technical'
      ORDER BY proficiency DESC, created_at DESC
    `;
    return skills;
    }else if(options?.type && options.type === 'professionall'){
      const skills = await sql<Skill[]>`
      SELECT 
        id,
        name,
        proficiency,
        icon,
        created_at
      FROM skills
      where category = 'professionall'
      ORDER BY proficiency DESC, created_at DESC
    `;
    return skills;
    }else{
      const skills = await sql<Skill[]>`
      SELECT 
        id,
        name,
        proficiency,
        icon,
        created_at
      FROM skills
      ORDER BY proficiency DESC, created_at DESC
    `;
    return skills;
    }

    // Menggunakan tagged template literal dari postgres
    
  } catch (error) {
    console.error('Error fetching skills:', error);
    throw new Error('Failed to fetch skills');
  }
}

export async function getTopSkills(limit: number = 5): Promise<Skill[]> {
  const skills = await sql<Skill[]>`
    SELECT * FROM skills
    ORDER BY proficiency DESC
    LIMIT ${limit}
  `;
  return skills;
}