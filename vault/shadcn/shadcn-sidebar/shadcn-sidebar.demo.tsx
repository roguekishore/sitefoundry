import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset, SidebarTrigger } from "./sidebar"

const items = ["Inbox", "Projects", "Calendar", "Settings"]

export default function Demo() {
  return (
    <SidebarProvider className="min-h-[420px]">
      <Sidebar collapsible="none" className="h-auto">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item}>
                  <SidebarMenuButton isActive={item === "Inbox"}>{item}</SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="p-6">
        <SidebarTrigger />
        <p className="mt-4 text-sm text-muted-foreground">Page content sits next to the sidebar.</p>
      </SidebarInset>
    </SidebarProvider>
  )
}
