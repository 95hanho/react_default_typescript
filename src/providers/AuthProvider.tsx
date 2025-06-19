import { useEffect, useState } from "react";
import useTestUserToken from "../hooks/test/useTestUserToken";
import { isTokenExpired } from "../libs/auth";
import { authContext } from "../contexts/authContext";
import { getCookie, hasCookie, removeCookie, setCookie } from "../libs/cookie";
import { useNavigate } from "react-router-dom";

export default function AuthProvider({ children }: Readonly<{ children: React.ReactNode }>) {
	console.log("AuthProvider");
	const navigate = useNavigate();
	const [loading, set_loading] = useState<boolean>(true);
	const [loginOn, set_loginOn] = useState<boolean>(false);
	const [accessToken, set_accessToken] = useState<string | null>(null);

	const { mutate: reissueToken } = useTestUserToken();

	useEffect(() => {
		// console.log(accessToken);
	}, [accessToken]);

	const setTokens = (aToken: string, rToken: string) => {
		console.log("setTokens");
		set_accessToken(aToken);
		localStorage.setItem("accessToken", aToken);
		setCookie("refreshToken", rToken, 60 * 10); // 10분
	};

	const loginToken = (aToken: string, rToken: string) => {
		set_loginOn(true);
		setTokens(aToken, rToken);
	};

	// AuthProvider.tsx 내부
	const reissueAccessToken = (): Promise<string> => {
		const rToken = getCookie("refreshToken");

		return new Promise((resolve, reject) => {
			if (!rToken || isTokenExpired(rToken)) {
				logout();
				reject("Refresh token expired");
				return;
			}
			reissueToken(
				{ refresh_token: rToken },
				{
					onSuccess(data) {
						setTokens(data.access_token, data.refresh_token);
						resolve(data.access_token); // ✅ 새 accessToken 반환
					},
					onError(err) {
						console.log("재발급 실패", err);
						logout();
						navigate("/");
						reject(err);
					},
				}
			);
		});
	};

	const logout = () => {
		console.log("로그아웃");
		set_loginOn(false);
		set_accessToken(null);
		localStorage.removeItem("accessToken");
		removeCookie("refreshToken");
	};

	useEffect(() => {
		const aToken = localStorage.getItem("accessToken");
		if (aToken) set_accessToken(aToken);
		set_loginOn(hasCookie("refreshToken"));
		set_loading(false); // 초기 새로고침 시 동작
	}, []);

	if (loading) return null; // 처음 새로고침 시 useEffect를 무조건 하고 실행하기
	return <authContext.Provider value={{ loginOn, accessToken, loginToken, logout, reissueAccessToken }}>{children}</authContext.Provider>;
}
