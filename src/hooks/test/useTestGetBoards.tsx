import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { get_normal } from "../../api/apiFilter";
import { API_URL } from "../../api/endpoints";
import { Board } from "../../types/board";
import { AxiosError } from "axios";

interface GetBoardResponse {
	msg: string;
	boardList: Board[];
}

export default function useTestGetBoards(): UseQueryResult<GetBoardResponse, AxiosError> {
	return useQuery({
		queryKey: ["testGetBoards"],
		queryFn: async () => (await get_normal(API_URL.TEST_BOARD)).data,
		retry: false, // ❌ 실패 시 자동 재요청 안 함
	});
}
