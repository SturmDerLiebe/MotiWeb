import { BaseRepository } from "@/clientData/repository/base";
import { UserRepository } from "@/clientData/repository/user";

export const UserRepositoryInstance = new UserRepository({
    apiBaseUrl: BaseRepository.Api.mockaroo,
    publicApiKey: process.env.NEXT_PUBLIC_MOCKAROO_KEY ?? "",
});
