import express from "express";
const app = express();

app.use(static(__dirname + '/app'));

app.all('*', (req, res) => {
  res.status(200).sendFile(__dirname + '/app/index.html');
});

app.listen(process.env.PORT || 8080);
