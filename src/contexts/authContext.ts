import { createContext } from "react";
import { AuthContextType } from "../types/auth";

export const authContext = createContext<AuthContextType | null>(null);
