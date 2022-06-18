import { Column, DataType, Model, Table } from "sequelize-typescript";

interface PeopleCreationAttrs {
    /*id: number; /* возможно id стоит убрать */
    name: string;
    surname: string;
    phonenumber: string;
    address: string;
}

@Table({tableName: 'peoples'})
export class People extends Model<People, PeopleCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @Column({type: DataType.STRING, allowNull: false})
    name: string;
    @Column({type: DataType.STRING, allowNull: false})
    surname: string;
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    phonenumber: string;
    @Column({type: DataType.STRING, allowNull: false})
    address: string;
}