import { Route, Switch } from "wouter";
import Home from "./Home";
import About from "./About";
import { CardTool } from "./CardTool";
import PrivacyPolicy from "./PrivacyPolicy";
import TemporaryEmailEn from "./TemporaryEmailEn";
import TemporaryEmailPt from "./TemporaryEmailPt";
import ReceiveSms from "./ReceiveSms";
import PasswordGeneratorPage from "./PasswordGeneratorPage";
import CpfCnpjGeneratorPage from "./CpfCnpjGeneratorPage";
import { Layout } from "./Layout";

function NotFound() {
  return <div>Page not found.</div>;
}

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
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default function App() {
  return <Router />;
}