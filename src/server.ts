import app from "./app";
import env from "./environmentVariables";

const PORT = env.GetApplicationPort();
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}.`);
});