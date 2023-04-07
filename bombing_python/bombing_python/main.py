from requests import get

url = "http://google.com"


def fetch(url):
    content = get(url)
    return content.text


print(fetch(url))
