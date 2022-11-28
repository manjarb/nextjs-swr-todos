import { apiUrl, fetcher } from '@/helper/api-config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useSWR from 'swr'

export default function TodoItem() {
  const router = useRouter()
  const { id } = router.query

  const { data } = useSWR(id ? `${apiUrl}/api/todos/${id}` : null, fetcher)
  if (!data) {
    return <div>Loading</div>
  }

  const { todo } = data

  return (
    <div>
      title: {todo.title}
      <br />
      <ul>
        {todo.TodoItems.map((item) => (
          <li key={item.id}>
            <input type="checkbox" defaultChecked={item.checked} /> {item.name}
          </li>
        ))}
      </ul>
      <Link href="/">
        Todos
      </Link>
    </div>
  )
}
