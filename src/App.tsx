import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import { CardTool } from "./pages/CardTool";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TemporaryEmailEn from "./pages/TemporaryEmailEn";
import TemporaryEmailPt from "./pages/TemporaryEmailPt";
import ReceiveSms from "./pages/ReceiveSms";
import PasswordGeneratorPage from "./pages/PasswordGeneratorPage";
import CpfCnpjGeneratorPage from "./pages/CpfCnpjGeneratorPage";
import { Layout } from "./components/Layout";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/temporary-email" component={TemporaryEmailEn} />
        <Route path="/email-temporario" component={TemporaryEmailPt} />
        <Route path="/receive-sms" component={ReceiveSms} />
        <Route path="/password-generator" component={PasswordGeneratorPage} />
        <Route path="/gerador-cpf-cnpj" component={CpfCnpjGeneratorPage} />
        <Route path="/tools/card-generator" component={CardTool} />
        <Route path="/about" component={About} />
        <Route path="/privacy" component={PrivacyPolicy} />
        <Route path="/404" component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
