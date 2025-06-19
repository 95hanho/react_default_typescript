import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { post_urlFormData } from "../../api/apiFilter";
import { API_URL } from "../../api/endpoints";
import { LoginData } from "../../types/auth";
import { AxiosError } from "axios";

interface LoginResponse {
	access_token: string;
	refresh_token: string;
	msg: string;
	response_code: number;
	status: string;
}

export default function useTestLogin(): UseMutationResult<
	LoginResponse, // 성공 타입
	AxiosError<{
		msg?: string;
	}>, // 에러 타입
	LoginData // 입력 타입
> {
	return useMutation({
		mutationFn: async (obj: LoginData) => (await post_urlFormData(API_URL.TEST_USER, { ...obj })).data,
	});
}
