import { useMemo } from "react";

import { SnackbarProvider } from "notistack";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import MainContainer from "~/Components/MainContainer/MainContainer";

import { socket } from "~/Functions/Others/socket";
import { dispatchInjector } from "~/Functions/Others/Injectors/dispatchInjector";

import { useThunkReducer } from "~/Hooks/useThunkReducer";

import { MainContext } from "~/Contexts/MainContext";

import { rootReducer } from "~/Reducers/index";

import { INITIAL_STATE } from "~/Variables/Constants/Initials/InitialStates/initialStates";

import { baseTheme } from "~/Theme/baseTheme";

export function App() {
	const [state = INITIAL_STATE, dispatch] = useThunkReducer(rootReducer, INITIAL_STATE);

	useMemo(() => {
		dispatchInjector({ dispatch });
	}, [dispatch]);

	console.log(state);

	return (
		<MainContext.Provider value={{ state, dispatch, hooksOutput: { dispatch } }}>
			<ThemeProvider theme={baseTheme}>
				<CssBaseline enableColorScheme />
				<SnackbarProvider>
					<MainContainer />
				</SnackbarProvider>
			</ThemeProvider>
		</MainContext.Provider>
	);
}
