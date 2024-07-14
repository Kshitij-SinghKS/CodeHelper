import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Compile from "./pages/Compile";
import NotFound from "./pages/NotFound";

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <>
    <Toaster position="bottom-right"/>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compiler" element={<Compile />} />
        <Route path="/compiler/:urlId" element={<Compile />} />
      

        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
    </>
  )
}




export default App



