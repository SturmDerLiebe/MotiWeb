import { UserRepository } from "@/data/repository/user";
import { UseServerSessionRepository } from "./repository/session";

export const SessionRepositoryInstance = new UseServerSessionRepository();

export const UserRepositoryInstance = new UserRepository({
    apiBaseUrl: UserRepository.Api.mockaroo,
    publicApiKey: process.env.NEXT_PUBLIC_MOCKAROO_KEY ?? "",
    sessionRepository: SessionRepositoryInstance,
});
