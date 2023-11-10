import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { FoodList } from "./FoodList_entity";

@Entity("food")
export class Food {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ length: 50, nullable: false })
  foodName: string;
  @Column("simple-array", { nullable: true })
  ingredients: string[];
  @Column({ nullable: true })
  methodOfPreparation: string;
  @Column()
  calories: number;

  @ManyToMany((type) => FoodList, (foodList) => foodList.food)
  foodList: FoodList[];
}
