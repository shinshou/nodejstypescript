import express, { Request, Response, NextFunction } from "express";

import todoRoutes from "./routes/todos";

import { json } from "body-parser";
const app = express();

app.use(json());

//todosへのアクセスがあった場合に、todoRoutesを使用する。
app.use("/todos", todoRoutes);

//上記のexpressのルートでエラーが発生した場合のエラー処理。
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);
