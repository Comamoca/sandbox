import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="m-3 border-solid border-2 p-3 w-3/5">
        <h2 class="text-xl">w-3/5</h2>
        Ipsum numquam nobis aperiam maiores nisi Veritatis dolorem temporibus
        minus maiores nesciunt Numquam at veritatis inventore cum aliquam!
        Magnam vitae laboriosam ad laboriosam officiis. Unde excepturi eius
        tempore placeat accusamus
      </div>
      <div class="m-3 border-solid border-2 p-3 w-fit">
        <h2 class="text-xl">w-fit</h2>
        Ipsum numquam nobis aperiam maiores nisi Veritatis dolorem temporibus
        minus maiores nesciunt Numquam at veritatis inventore cum aliquam!
        Magnam vitae laboriosam ad laboriosam officiis. Unde excepturi eius
        tempore placeat accusamus
      </div>
    </>
  );
}
