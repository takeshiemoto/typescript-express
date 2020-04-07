import { Request, Response } from 'express';
import { heroes } from '../data/heroes';
import { Hero } from '../models';

export const heroesData: Hero[] = [...heroes];

/**
 * GET /v1/heroes
 */
export const getHeroes = (req: Request, res: Response) => {
  return res.json(heroesData);
};

/**
 * GET /v1/heroes/:id
 */
export const getHeroById = (req: Request, res: Response) => {
  const { id } = req.params;
  const hero: Hero = heroesData.find(hero => hero.id === Number(id));
  return res.json(hero);
};

/**
 * POST /v1/heroes
 */
export const applyHero = (req: Request, res: Response) => {
  // Get last hero id
  const { id } = heroesData[heroesData.length - 1];
  // Create new hero
  const newHero = { id: id + 1, ...req.body };
  // Push new hero
  heroesData.push(newHero);

  return res.json(newHero);
};

/**
 * PUT /v1/heroes
 */
export const updateHero = (req: Request, res: Response) => {
  // @todo 更新メソッドを実装する
};
