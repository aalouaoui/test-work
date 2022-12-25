import { createSignal } from 'solid-js';

const getData = async <T>(
    url: string,
    email: string,
    password: string
)
    : Promise<T> => {
    const res = await fetch(url, {
        method: 'Post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    return await res.json();
}


export default function Home() {
  const [count, setCount] = createSignal(0);

  getData("http://localhost:8000/login", "maria@example.com", "maria123").then(res => console.log(res));
  getData("http://localhost:8000/login", "none@example.com", "none").then(res => console.log(res));

  return (
    <section class="bg-gray-100 text-gray-700 p-8">
      <h1 class="text-2xl font-bold">Home</h1>
      <p class="mt-4">This is the home page.</p>

      <div class="flex items-center space-x-2">
        <button
          class="border rounded-lg px-2 border-gray-900"
          onClick={() => setCount(count() - 1)}
        >
          -
        </button>

        <output class="p-10px">Count: {count}</output>

        <button
          class="border rounded-lg px-2 border-gray-900"
          onClick={() => setCount(count() + 1)}
        >
          +
        </button>
      </div>
    </section>
  );
}
