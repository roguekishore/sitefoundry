// Sample content lives here (gallery only); the page reuses it. Tidepool and its client are made up.
import { Atom, Feather, Flame, Mountain, Triangle, Wind } from "lucide-react";
import { SupabaseFrameworks, type SupabaseFrameworksProps } from "./supabase-frameworks";

const react = `import { openPool } from '@tidepool/client'

const pool = openPool(
  import.meta.env.POOL_ADDRESS,
  import.meta.env.POOL_PUBLIC_KEY
)

export default function Shelf() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    pool.table('books').list()
      .then(({ rows }) => setBooks(rows))
  }, [])

  return <BookList items={books} />
}`;

const next = `import { serverPool } from '@tidepool/next'

export default async function Page() {
  const pool = await serverPool()
  const { rows } = await pool
    .table('orders')
    .list({ limit: 20 })

  return <OrderTable rows={rows} />
}`;

const flutter = `import 'package:tidepool/tidepool.dart';

final pool = Tidepool.open(
  address: POOL_ADDRESS,
  publicKey: POOL_PUBLIC_KEY,
);

Future<List> loadNotes() async {
  final rows = await pool.table('notes').list();
  return rows;
}`;

const svelte = `<script>
  import { openPool } from '@tidepool/client'

  const pool = openPool(POOL_ADDRESS, POOL_PUBLIC_KEY)
  let tasks = pool.table('tasks').list()
</script>

{#await tasks then { rows }}
  {#each rows as task}
    <TaskRow {task} />
  {/each}
{/await}`;

const vue = `<script setup>
import { openPool } from '@tidepool/client'

const pool = openPool(POOL_ADDRESS, POOL_PUBLIC_KEY)
const songs = ref([])

onMounted(async () => {
  const { rows } = await pool.table('songs').list()
  songs.value = rows
})
</script>`;

const nuxt = `export default defineEventHandler(async () => {
  const pool = usePool()
  const { rows } = await pool
    .table('events')
    .list({ order: 'starts_at' })

  return rows
})`;

export const frameworksSample: SupabaseFrameworksProps = {
  lead: "Plug Tidepool into",
  frameworks: [
    { name: "React", icon: <Atom strokeWidth={1.5} />, code: react, docs: { label: "React guide", href: "#" } },
    { name: "Next.js", icon: <Triangle strokeWidth={1.5} />, code: next, docs: { label: "Next.js guide", href: "#" } },
    { name: "Flutter", icon: <Feather strokeWidth={1.5} />, code: flutter, docs: { label: "Flutter guide", href: "#" } },
    { name: "Svelte", icon: <Flame strokeWidth={1.5} />, code: svelte, docs: { label: "Svelte guide", href: "#" } },
    { name: "Vue", icon: <Wind strokeWidth={1.5} />, code: vue, docs: { label: "Vue guide", href: "#" } },
    { name: "Nuxt", icon: <Mountain strokeWidth={1.5} />, code: nuxt, docs: { label: "Nuxt guide", href: "#" } },
  ],
};

export default function Demo() {
  return <SupabaseFrameworks {...frameworksSample} />;
}
