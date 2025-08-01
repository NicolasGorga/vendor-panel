import { DashboardExtensionManager } from "./extensions"
import { Providers } from "./providers/providers"
import { RouterProvider } from "./providers/router-provider"

import displayModule from "virtual:medusa/displays"
import formModule from "virtual:medusa/forms"
import menuItemModule from "virtual:medusa/menu-items"
import widgetModule from "virtual:medusa/widgets"

import "./index.css"
import { TalkjsProvider } from "./providers/talkjs-provider"

function App() {
  const manager = new DashboardExtensionManager({
    displayModule,
    formModule,
    menuItemModule,
    widgetModule,
  })
  return (
    <Providers api={manager.api}>
      <TalkjsProvider>
        <RouterProvider />
      </TalkjsProvider>
    </Providers>
  )
}

export default App
