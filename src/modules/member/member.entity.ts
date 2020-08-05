import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from "typeorm";

@Index("fk_Member_pk_Tier", ["tierId"], {})
@Entity("Member")
export class Member {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "tierId", nullable: true })
  tierId: number | null;

  @Column("int", { name: "countryId", nullable: true })
  countryId: number | null;

  @Column("int", { name: "cityId", nullable: true })
  cityId: number | null;

  @Column("varchar", { name: "memberCode", length: 50 })
  memberCode: string;

  @Column("enum", {
    name: "title",
    nullable: true,
    enum: ["Mr.", "Mrs.", "Ms.", "Miss"],
  })
  title: "Mr." | "Mrs." | "Ms." | "Miss" | null;

  @Column("varchar", { name: "firstName", length: 200 })
  firstName: string;

  @Column("varchar", { name: "lastName", length: 200 })
  lastName: string;

  @Column("varchar", { name: "email", length: 100 })
  email: string;

  @Column("varchar", { name: "password", length: 100 })
  password: string;

  @Column("varchar", { name: "phoneCode", length: 20 })
  phoneCode: string;

  @Column("varchar", { name: "phoneNumber", length: 50 })
  phoneNumber: string;

  @Column("enum", {
    name: "gender",
    nullable: true,
    enum: ["MALE", "FEMALE", "OTHER"],
  })
  gender: "MALE" | "FEMALE" | "OTHER" | null;

  @Column("date", { name: "birthDate", nullable: true })
  birthDate: string | null;

  @Column("varchar", { name: "identityNumber", length: 200 })
  identityNumber: string;

  @Column("longtext", { name: "address" })
  address: string;

  @Column("timestamp", {
    name: "registerDate",
  })
  registerDate: Date;

  @Column("int", { name: "totalPointBalance", default: () => "'0'" })
  totalPointBalance: number;

  @Column("int", { name: "lifetimePointEarned", default: () => "'0'" })
  lifetimePointEarned: number;

  @Column("int", { name: "lifetimePointExpired", default: () => "'0'" })
  lifetimePointExpired: number;

  @Column("decimal", {
    name: "lifetimeSpending",
    precision: 20,
    scale: 2,
    default: () => "'0.00'",
  })
  lifetimeSpending: string;

  @Column("decimal", {
    name: "YTDSpending",
    precision: 20,
    scale: 2,
    default: () => "'0.00'",
  })
  ytdSpending: string;

  @Column("longtext", { name: "roomPreference" })
  roomPreference: string;

  @Column("longtext", { name: "foodPreference" })
  foodPreference: string;

  @Column("longtext", { name: "internalPreference" })
  internalPreference: string;

  @Column("tinyint", {
    name: "emailVerificationStatus",
    width: 1,
    default: () => "'0'",
  })
  emailVerificationStatus: boolean;

  @Column("tinyint", {
    name: "mobileVerificationStatus",
    width: 1,
    default: () => "'0'",
  })
  mobileVerificationStatus: boolean;

  @Column("tinyint", { name: "status", width: 1, default: () => "'0'" })
  status: boolean;

  @Column("int", { name: "createdBy", default: () => "'1'" })
  createdBy: number;

  @Column("int", { name: "updatedBy", default: () => "'1'" })
  updatedBy: number;

  @Column("timestamp", {
    name: "createdAt",
  })
  createdAt: Date;

  @Column("timestamp", {
    name: "updatedAt",
  })
  updatedAt: Date;
}
