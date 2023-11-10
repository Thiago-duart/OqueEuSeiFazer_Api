import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User_entity";
import { Food } from "./Food_entity";

@Entity("foodList")
export class FoodList {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ length: 50, nullable: false })
  listName: string;
  @Column({ nullable: false })
  dietCalories: number;
  @Column({ nullable: true })
  dietSum: number;

  @ManyToOne((type) => User, (user) => user.foodList)
  user: User;

  @ManyToMany((type) => Food, (food) => food.foodList, { eager: true })
  @JoinTable()
  food: Food[];
}
