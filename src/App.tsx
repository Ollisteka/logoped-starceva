import { BrowserRouter as Router } from 'react-router-dom';
import { 
  Sidebar, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarContent, 
  SidebarToggle 
} from "./components/SimpleSidebar";
import { 
  ProfileSection,
  PublicationsSection,
  PedkopilkaSection,
  MentorshipSection,
  SportsSection,
  CompetitionsSection,
  CoursesSection
} from "./pages";

export default function App() {
  return (
    <Router basename="/logoped-starceva">
      <div className="min-h-screen bg-gradient-to-br from-sky-100 to-indigo-200">
        <Sidebar defaultSection="profile" className="flex">
        <div className="flex flex-1">
          {/* Sidebar Navigation */}
          <SidebarMenu className="w-64 bg-white/90 backdrop-blur-sm p-4 min-h-screen border-r border-gray-200">
            <div className="mb-8 px-4">
              <h2 className="mb-1">Старцева Светлана Александровна</h2>
              <p className="text-sm text-gray-600">Учитель-логопед</p>
            </div>
            
            <SidebarMenuItem value="profile">Профиль</SidebarMenuItem>
            <SidebarMenuItem value="publications">Публикации</SidebarMenuItem>
            <SidebarMenuItem value="pedkopilka">Педкопилка</SidebarMenuItem>
            <SidebarMenuItem value="mentorship">Наставничество</SidebarMenuItem>
            <SidebarMenuItem value="sports">Спортивные мероприятия</SidebarMenuItem>
            <SidebarMenuItem value="competitions">Конкурсы</SidebarMenuItem>
            <SidebarMenuItem value="courses">Курсы</SidebarMenuItem>
          </SidebarMenu>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Header */}
            <header className="md:hidden bg-white/90 backdrop-blur-sm border-b border-gray-200 px-4 py-4 flex items-center justify-between sticky top-0 z-30">
              <div>
                <h1 className="text-lg">Старцева С.А.</h1>
                <p className="text-xs text-gray-600">Учитель-логопед</p>
              </div>
              <SidebarToggle />
            </header>

            <div className="container mx-auto px-4 md:px-8 py-8 max-w-5xl">
              <SidebarContent value="profile">
                <ProfileSection />
              </SidebarContent>

              <SidebarContent value="publications">
                <PublicationsSection />
              </SidebarContent>

              <SidebarContent value="pedkopilka">
                <PedkopilkaSection />
              </SidebarContent>

              <SidebarContent value="mentorship">
                <MentorshipSection />
              </SidebarContent>

              <SidebarContent value="sports">
                <SportsSection />
              </SidebarContent>

              <SidebarContent value="competitions">
                <CompetitionsSection />
              </SidebarContent>

              <SidebarContent value="courses">
                <CoursesSection />
              </SidebarContent>


              <footer className="mt-12 text-center text-gray-500 text-sm">
                <p>© 2025 Старцева Светлана Александровна</p>
              </footer>
            </div>
          </div>
        </div>
      </Sidebar>
      </div>
    </Router>
  );
}
