import { myAxios } from "~/Functions/Utils/myAxios";
import { responseHandler } from "~/Functions/Utils/responseHandler";

import { initialRequestOptions } from "~/Variables/constants/initialOptions";

const requester = async (options = initialRequestOptions) => {
	try {
		const finalOptions = {
			...initialRequestOptions,
			...options,
			data: { ...initialRequestOptions.data, ...options?.data },
			headers: { ...initialRequestOptions.headers, ...options?.headers },
		};

		if (!finalOptions.url) {
			const error = "Yo! you forget send me url!!!";
			throw error;
		}

		const token = options?.data?.token || localStorage.getItem("mainToken");

		finalOptions.headers.Authorization = `Bearer ${token}`;

		if (options.data && !Object.keys(options?.data)?.length) {
			delete finalOptions.data;
		}

		const response = await myAxios(finalOptions);

		const checkedResponse = responseHandler(response);

		console.log(checkedResponse);

		return checkedResponse;
	} catch (error) {
		console.log("requester catch, error:", error);

		throw error;
	}
};

export { requester };
