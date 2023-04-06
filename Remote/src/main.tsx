import React from "react";
import ReactDOM from "react-dom/client";

import { Remote } from "./Remote";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Remote />
	</React.StrictMode>
);

export * from "./Remote";