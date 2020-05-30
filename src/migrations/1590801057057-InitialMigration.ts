import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1590801057057 implements MigrationInterface {
    name = 'InitialMigration1590801057057'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `item` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `test` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `item`", undefined);
    }

}
