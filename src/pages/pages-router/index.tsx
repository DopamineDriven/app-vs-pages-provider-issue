import { Provider } from "@/components/SomeProvider";
import { RscWorkup } from "@/components/SimpleClientComponent/RscWorkup";
import { SimpleClientComponent, SimpleRSC } from "@/components/registry";

const Page = () => {
  return (
    <main>
      {/* This provider works ok in Pages router */}
      <Provider>
        <SimpleRSC />

        <SimpleClientComponent>
          <RscWorkup />
        </SimpleClientComponent>
      </Provider>
    </main>
  );
};

export default Page;