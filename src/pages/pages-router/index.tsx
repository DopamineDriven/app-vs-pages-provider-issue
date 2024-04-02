import { Provider } from "@/components/SomeProvider";
import { SimpleClientComponent, SimpleRSC } from "@/components/registry";

const Page = () => {
  return (
    <main>
      {/* This provider works ok in Pages router */}
      <Provider>
        <SimpleRSC />

        <SimpleClientComponent />
      </Provider>
    </main>
  );
};

export default Page;