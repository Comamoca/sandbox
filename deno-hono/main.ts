import { serve } from "https://deno.land/std/http/server.ts";
import { Hono } from "npm:hono";

// アップデート情報を配信するサンプルコード
// 最新バージョンは0.1.0と仮定
// URLクエリにバージョンを指定してアクセスすると、バージョンに応じて異なるJsonを返す

// もしバージョンが最新でなかった場合はGitHub上に配置されているJSONのURLを返す
// 最新の場合は`latest`という文字列を返す

// 返却するJSONの定義
interface API {
  version: string;
  update: string | "latest";
}

const app = new Hono();

// バージョンの表記方法を定義
class Version {
  major: number;
  minor: number;
  patch: number;

  constructor(version: string) {
    const [major, minor, patch] = version.split(".");

    this.major = Number(major);
    this.minor = Number(minor);
    this.patch = Number(patch);
  }

  public toString(): string {
    return `${this.major}.${this.minor}.${this.patch}`;
  }

  isOlder(version: Version): boolean {
    // バージョン比較関数
    // 与えられたバージョより古い場合はtrueを返す

    if (this.major > version.major) {
      return true;
    } else if (this.minor > version.minor) {
      return true;
    } else if (this.patch > version.patch) {
      return true;
    } else {
      return false;
    }
  }
}

app.get("/", (c) => {
  const version = new Version(String(c.req.query("version")));
  const latest = new Version("0.1.0");

  if (version.isOlder(latest)) {
    const update_url = new URL(
      "https://raw.githubusercontent.com/unknown/repository/main/update.json",
    );

    const content: API = {
      version: version.toString(),
      update: update_url.toString(),
    };

    return c.json(content);
  } else {
    const content: API = {
      version: version.toString(),
      update: "latest",
    };

    return c.json(content);
  }
});

serve(app.fetch);
