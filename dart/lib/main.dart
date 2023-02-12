import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:web_socket_channel/web_socket_channel.dart';
/* import 'package:web_socket_channel/status.dart'; */

const secret = "kYWFmVff3Q9BoUNlvhPyCnv5k5BG6V2Q";
const host = "misskey.io";

void main() async {
  /* const globalTimeLine = "globalTimeline"; */
  /* const socialTimeLine = "hybridTimeline"; */
  const localTimeLine = "localTimeline";

  final wsUrl = Uri.parse("wss://${host}/streaming?i=${secret}");

  final channel = WebSocketChannel.connect(wsUrl);

  const body = {
    "type": "connect",
    "body": {"channel": localTimeLine, "id": "local", "params": {}}
  };

  print(jsonEncode(body));
  channel.sink.add(jsonEncode(body));
  channel.stream.listen((msg) {
    extract(msg);
  });
  /* channel.sink.close(); */
}

void extract(msg) {
  Map<String, dynamic> map = jsonDecode(msg);

  final body = map["body"]["body"];
  final user = body["user"];

  final name = user["name"];
  final username = user["username"];

  var text = body["text"];
  var status = "";

  if (text == null) {
    text = body["renote"]["text"];
    status = "ReNote";
  }

  print("""
${name}@${username} ${status}
${text}
  """);
}

void api() async {
  final url = Uri.https(host, '/api/i');
  /* var response = await http.post(url, body: {'i': secret}); */

  final response = await http.post(url,
      body: jsonEncode({"i": secret}),
      headers: {"Content-Type": "application/json"});

  /* print('Response status: ${response.statusCode}'); */
  /* print('Response body: ${response.body}'); */

  Map<String, dynamic> map = jsonDecode(response.body);

  print("${map["name"]}@${map["username"]}");
  print(map["description"]);
}
