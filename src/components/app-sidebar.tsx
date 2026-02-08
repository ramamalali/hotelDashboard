import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router";
import { sidebarItems } from "@/Constants/data";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex justify-end items-center h-[73px] text-2xl  text-center">
        HOTEL Dashboard
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.link}>
                  <SidebarMenuButton asChild className="mb-2 h-12">
                    <Link to={item.link} className="text-5xl font-bold ">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="mr-2 h-12 w-10"
                      />
                      {item.name}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
