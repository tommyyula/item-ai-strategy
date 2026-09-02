import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { I18nProvider } from "./i18n/runtime";
import { registerPagePack, type LocalePack } from "./i18n/dict";
import Home from "./pages/Home";
import En from "./pages/En";

/**
 * The deck at `/` loads eagerly; every other route is a self-contained
 * presentation weighing a few hundred KB, so they are split out and fetched on
 * demand rather than shipped to every visitor who lands on the home page.
 */
/**
 * Pair each page with its own translations: both arrive in the route's chunk,
 * and the pack is merged into the live dictionary before the page first
 * renders, so no page ever shows an untranslated key on mount.
 */
function page(
  loadPage: () => Promise<{ default: React.ComponentType }>,
  namespace?: string,
  loadPack?: () => Promise<{ default: LocalePack }>,
) {
  return lazy(async () => {
    if (!namespace || !loadPack) return loadPage();
    const [mod, pack] = await Promise.all([loadPage(), loadPack()]);
    registerPagePack(namespace, pack.default);
    return mod;
  });
}

const V1 = page(() => import("./pages/V1"));
const V2 = page(() => import("./pages/V2"));
const ProductV4 = page(
  () => import("./pages/ProductV4"),
  "productV4",
  () => import("./i18n/dict/pages/productV4"),
);
const Product2CustV3 = page(
  () => import("./pages/Product2CustV3"),
  "product2CustV3",
  () => import("./i18n/dict/pages/product2CustV3"),
);
const ProductGeneralV4 = page(
  () => import("./pages/ProductGeneralV4"),
  "productGeneralV4",
  () => import("./i18n/dict/pages/productGeneralV4"),
);
const ProductGeneralInvestorV43 = page(
  () => import("./pages/ProductGeneralInvestorV43"),
  "productGeneralInvestorV43",
  () => import("./i18n/dict/pages/productGeneralInvestorV43"),
);
const ProductGeneralCustomerV5 = page(
  () => import("./pages/ProductGeneralCustomerV5"),
  "productGeneralCustomerV5",
  () => import("./i18n/dict/pages/productGeneralCustomerV5"),
);
const ProductV6 = page(
  () => import("./pages/ProductV6"),
  "productV6",
  () => import("./i18n/dict/pages/productV6"),
);
const ProductENN = page(
  () => import("./pages/ProductENN"),
  "productEnn",
  () => import("./i18n/dict/pages/productEnn"),
);
const ProductENN2 = page(() => import("./pages/ProductENN2"));
const TMSProductV1 = page(
  () => import("./pages/TMSProductV1"),
  "tmsProductV1",
  () => import("./i18n/dict/pages/tmsProductV1"),
);

function RouteFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div
        className="h-6 w-6 animate-spin rounded-full border-2 border-border border-t-cyan-glow motion-reduce:animate-none"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/v1"} component={V1} />
      <Route path={"/v2"} component={V2} />
      <Route path={"/en"} component={En} />
      <Route path={"/product_v4"} component={ProductV4} />
      <Route path={"/product_2_cust_v3"} component={Product2CustV3} />
      <Route path={"/product_general_v4"} component={ProductGeneralV4} />
      <Route path={"/product_general_investor_v4.3"} component={ProductGeneralInvestorV43} />
      <Route path={"/product_general_investor_v43"} component={ProductGeneralInvestorV43} />
      <Route path={"/product_general_customer_v5"} component={ProductGeneralCustomerV5} />
      <Route path={"/product_v6"} component={ProductV6} />
      <Route path={"/product_enn"} component={ProductENN} />
      <Route path={"/product_enn2"} component={ProductENN2} />
      <Route path={"/TMS_Product_v1"} component={TMSProductV1} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark" switchable>
        <I18nProvider>
          <TooltipProvider>
            <Toaster />
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
              <Suspense fallback={<RouteFallback />}>
                <Router />
              </Suspense>
            </WouterRouter>
          </TooltipProvider>
        </I18nProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
