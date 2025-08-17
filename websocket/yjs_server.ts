import { WebSocketServer } from 'ws'
import { setupWSConnection } from '@y/websocket-server/utils'

export function startYjsWebSocketServer(port: number = 1234) {
  const wss = new WebSocketServer({ port })

  wss.on('connection', (ws, req) => {
    setupWSConnection(ws, req)
  })

  console.log(`Yjs WebSocket server running on port ${port}`)

  return wss
}
