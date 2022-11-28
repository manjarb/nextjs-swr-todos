import useSWR from 'swr'
import Link from 'next/link'
import { apiUrl, fetcher } from '@/helper/api-config'
import styles from '../styles/Home.module.scss'

export default function Home() {
  // Old Way
  // const [todosData, setTodosData] = useState([])

  // const getTodos = async () => {
  //   const { data: { todos, meta: { currentPage, totalPages } } } = await axios.get(`${apiUrl}/api/todos`)
  //   console.log('todos: ', todos)
  //   console.log('currentPage: ', currentPage)
  //   console.log('totalPages: ', totalPages)
  //   // data.data.todos
  //   // data.data.meta.currenPage
  //   // data.data.meta.totalPages
  //   setTodosData(todos)
  // }

  // useEffect(() => {
  //   getTodos()
  // }, [])

  // SWR
  const { data } = useSWR(`${apiUrl}/api/todos`, fetcher)
  if (!data) {
    return <div>Loading</div>
  }

  const { todos, meta } = data
  const { currentPage, totalPages } = meta
  console.log(data, ' :data')

  return (
    <div className={styles.container}>
      <h1>Varis Todo list</h1>
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            tittle: {todo.title}
            <br />
            <Link href={`${todo.id}`}>
              <button type="button">Details</button>
            </Link>
            <br />
            ----------------------------
          </li>
        ))}
      </ol>
      <div>
        Pages:
        {/* TODO: Need to finish Pagination */}
        {/* {totalPages && totalPages.map((page) => (
          <Link href={`/page=${page}`}>{page}</Link>
        ))} */}
      </div>
    </div>
  )
}
