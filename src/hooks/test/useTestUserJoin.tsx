import { useMutation } from "@tanstack/react-query";
import { post_urlFormData } from "../../api/apiFilter";
import { API_URL } from "../../api/endpoints";
import { LoginData } from "../../types/auth";

export default function useTestUserJoin() {
	return useMutation({
		mutationFn: async (obj: LoginData) => (await post_urlFormData(API_URL.TEST_USER_JOIN, { ...obj })).data,
	});
}
