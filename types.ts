import { FunctionComponent } from "react";
import { IconType } from "react-icons";
export interface Service {
  Icon: IconType;
  title: string;
  about: string;
}

export interface Skill {
  Icon: IconType;
  name: string;
  level: string;
}

export interface Studies {
  title: string;
  years: string;
  institution: string;
}

export interface Experience {
  company: string;
  position: string;
  description: string;
  languages: string[];
  phone?: string;
  date: string;
}

export interface IProject {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category = "react" | "node" | "express" | "django" | "mongo" | "php" | "prestashop" | "laravel" | "mysql";
