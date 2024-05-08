import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Compile from "./pages/Compile";
import NotFound from "./pages/NotFound";
import Editor from "./pages/Editor";
import { ThemeProvider } from "@/components/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compiler" element={<Compile />} />
        <Route path="/editor" element={<Editor />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
    </ThemeProvider>
  )
}

export default App



