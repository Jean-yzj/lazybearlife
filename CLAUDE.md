# lazybearlife

創作者個人站（Next.js 伺服器模式＋內容後台）。動後台先讀 docs/ADMIN.md。

## Zeabur Deployment

- Project ID: 6a4e82bfc2881a93656e8439
- Service ID: 6a4e8367f04125ac9a33bc4f（app，直傳部署）
- PostgreSQL 與 app 同專案；DATABASE_URL 設在 app 服務的環境變數

**重要**：這個服務是「直傳」部署（不是 git-connected）。redeploy 一定要帶
`--service-id 6a4e8367f04125ac9a33bc4f`，否則會建出重複服務。
直傳只上傳已 commit 的內容——新檔案先 `git add` 再 deploy。

```bash
# redeploy
npx zeabur@latest deploy --project-id 6a4e82bfc2881a93656e8439 --service-id 6a4e8367f04125ac9a33bc4f --json
```
