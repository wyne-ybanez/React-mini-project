import ReactDom from 'react-dom'
import './index.css'

const Booklist = () => {
  return (
    <section className="booklist">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
    </section>
  )
} 

const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  )
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/81iAADNy2NL._AC_UL200_SR200,200_.jpg" 
      alt="Book" />

const Title = () => <h1>Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones')</h1>
const Author = () => <h4 style={{color: '#617D98', fontSize: '0.75rem', marginTop: '0.25rem'}}>James Clear</h4>

ReactDom.render(
  <Booklist />, document.getElementById('root')
)