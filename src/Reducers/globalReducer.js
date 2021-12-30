import { globalActions } from "~/Variables/constants/actions";
import { globalInitialState } from "~/Variables/constants/Initials/initialStates";
import { initialAction } from "~/Variables/constants/Initials/initialOptions";

const { appDrawerState, backdropState, viewMode } = globalActions;

const globalReducer = (state = globalInitialState, action = initialAction) => {
	const { payload, type } = action;

	const stateMan = (newState) => ({ ...state, ...newState });

	try {
		switch (type) {
			case viewMode.type:
				return stateMan({ ...payload });

			case backdropState.type:
				return stateMan({ backdropState: { ...state.backdropState, ...payload } });

			case appDrawerState.type:
				return stateMan({
					appDrawerState: {
						...state.appDrawerState,
						anchor: { ...state.appDrawerState.anchor, [payload.anchor]: payload.open },
					},
				});

			default:
				return state;
		}
	} catch (error) {
		console.log("globalReducer catch", error);
	}
};

export { globalReducer };
