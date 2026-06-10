import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import V1 from "./pages/V1";
import V2 from "./pages/V2";
import En from "./pages/En";
import ProductV4 from "./pages/ProductV4";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/v1"} component={V1} />
      <Route path={"/v2"} component={V2} />
      <Route path={"/en"} component={En} />
      <Route path={"/product_v4"} component={ProductV4} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
