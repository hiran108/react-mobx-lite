import React from "react";
import { TStore } from "./store/userStore";

export const storeContext = React.createContext<TStore|null>(null);