import { Bundle, Client } from "node-osc";
import { sleep } from "https://deno.land/x/sleep/mod.ts";
import { datetime } from "https://deno.land/x/ptera/mod.ts";

const dt = datetime();

// 送信先のipアドレス
// PC版のVRChatなら動かしているPCのローカルIPアドレス
// QuestはSideQuest等で確認したIPアドレス
// 例) "192.168.1.7"
const target_ip = "";

function send() {
  const client = new Client(target_ip, 9000);

  client.send("/clock", dt.format("M/d h:m:s"), () => {
    console.log("send!");
    client.close();
  });
}

setInterval(send, 1000);
