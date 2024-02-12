import { Hono } from 'hono'
import type { FC } from 'hono/jsx'

const app = new Hono()

const Layout: FC = (props) => {
  return (
    <html>
      <head>
        <title>
          {props.title}
        </title>
      </head>
      <body>{props.children}</body>
    </html>
  )
}

const Top: FC<{ messages: string }> = (props: { messages: string }) => {
  return (
    <Layout title={`Hono API | ${props.messages}`}>
      <h1>Welcome {props.messages}</h1>
    </Layout>
  )
}

app.get('/', (c) => {
  return c.html(<Top messages="World" />)
})

app.get('/:id', (c) => {
  const messages = c.req.param('id')
  return c.html(<Top messages={messages} />)
})

export default app