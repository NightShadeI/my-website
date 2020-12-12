const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express()

app.use(cors())
app.use(express.static("build"))

app.get('*', (req, res) => {
 	res.sendFile(path.join(__dirname, '../build/index.html'));
});

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})