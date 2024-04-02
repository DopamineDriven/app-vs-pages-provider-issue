import { RscWorkup } from "@/components/SimpleClientComponent/RscWorkup";
import { Provider } from "@/components/SomeProvider";
import { SimpleClientComponent, SimpleRSC } from "@/components/registry";

export default function AppRouterIssuePage() {
  return (
    <main>
      {/* This provider is the reason of the CLS */}
      <Provider>
        <SimpleRSC />

        <SimpleClientComponent>
          <RscWorkup />
        </SimpleClientComponent>
      </Provider>
    </main>
  );
}
