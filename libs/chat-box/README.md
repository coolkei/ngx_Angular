# Chat-Box

### Goals

- hybrid conversations with bots, users and groups.
- multiple active conversations
- save and retrieve active conversations

### Publish
```bash
# build deps first
ng build utils
ng build ngx-utils
# build
ng build chat-box
# replace your npm key
export NPM_TOKEN="00000000-0000-0000-0000-000000000000"
# publish
npm publish dist/libs/chat-box --access public
```


TODO
multiple conversations inspired by
https://www.weave.works/
