import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1699658052807 implements MigrationInterface {
    name = 'InitialMigration1699658052807'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "email" character varying(50) NOT NULL, "password" character varying(120) NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "foodList" ("id" SERIAL NOT NULL, "listName" character varying(50) NOT NULL, "dietCalories" integer NOT NULL, "dietSum" integer, "userId" integer, CONSTRAINT "PK_62576a75bf7191ca8b7c9f966b3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "food" ("id" SERIAL NOT NULL, "foodName" character varying(50) NOT NULL, "ingredients" text, "methodOfPreparation" character varying, "calories" integer NOT NULL, CONSTRAINT "PK_26d12de4b6576ff08d30c281837" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "food_list_food_food" ("foodListId" integer NOT NULL, "foodId" integer NOT NULL, CONSTRAINT "PK_fc777e5d9eaecba4e8a04d002fe" PRIMARY KEY ("foodListId", "foodId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_22040b3fe99581b4ef4de2baae" ON "food_list_food_food" ("foodListId") `);
        await queryRunner.query(`CREATE INDEX "IDX_fdda2209519cfaf4bc8c81c3b0" ON "food_list_food_food" ("foodId") `);
        await queryRunner.query(`ALTER TABLE "foodList" ADD CONSTRAINT "FK_18fefb558b533d05b65bf342774" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "food_list_food_food" ADD CONSTRAINT "FK_22040b3fe99581b4ef4de2baaea" FOREIGN KEY ("foodListId") REFERENCES "foodList"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "food_list_food_food" ADD CONSTRAINT "FK_fdda2209519cfaf4bc8c81c3b04" FOREIGN KEY ("foodId") REFERENCES "food"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "food_list_food_food" DROP CONSTRAINT "FK_fdda2209519cfaf4bc8c81c3b04"`);
        await queryRunner.query(`ALTER TABLE "food_list_food_food" DROP CONSTRAINT "FK_22040b3fe99581b4ef4de2baaea"`);
        await queryRunner.query(`ALTER TABLE "foodList" DROP CONSTRAINT "FK_18fefb558b533d05b65bf342774"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fdda2209519cfaf4bc8c81c3b0"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_22040b3fe99581b4ef4de2baae"`);
        await queryRunner.query(`DROP TABLE "food_list_food_food"`);
        await queryRunner.query(`DROP TABLE "food"`);
        await queryRunner.query(`DROP TABLE "foodList"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
