import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { FoodList } from "./FoodList_entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ length: 50, nullable: false })
  name: string;
  @Column({ length: 50, nullable: false })
  email: string;
  @Column({ length: 120, nullable: false })
  password: string;

  @OneToMany((type) => FoodList, (foodList) => foodList.user)
  foodList: FoodList[];
}
