import { apiClient } from "@/services/api-client";
import { type AxiosResponse } from "axios";

type requestBodyType = {
  username: string;
  password: string;
  expiresInMins?: number;
};

export async function signInService(
  data: requestBodyType,
): Promise<AxiosResponse> {
  return await apiClient.post("auth/login", data);
}
